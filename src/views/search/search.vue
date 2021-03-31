<template>
  <div class="search">
    <div class="search-title">搜索结果 共{{ totalCount }}条<span v-if="totalCount>288">（最多显示12页）</span></div>
    <el-tabs v-model="type" @tab-click="handleTabClick">
      <el-tab-pane label="单曲" name="1"></el-tab-pane>
      <el-tab-pane label="歌单" name="1000"></el-tab-pane>
      <el-tab-pane label="歌手" name="100"></el-tab-pane>
      <el-tab-pane label="专辑" name="10"></el-tab-pane>
    </el-tabs>
    <div class="loading" v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading">
      <song-list v-if="type==='1'" :song-list="resultList"></song-list>
      <play-list v-else-if="type==='1000'" :lists="resultList"></play-list>
      <play-list v-else-if="type==='10'" :type="'album'" :lists="resultList"></play-list>
      <div class="singer" v-else-if="type==='100'">
        <div class="singer-item" v-for="item in resultList" :key="item.id" @click="handleSingerDetail(item)">
          <el-image class="item-avatar"
                    :src="item.picUrl||'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"
                    :fit="'cover'" lazy></el-image>
          <span class="item-name">{{ item.name }}</span>
          <span class="item-trans" v-if="item.transNames">({{ item.transNames[0] }})</span>
          <span class="item-trans" v-else-if="item.alias&&item.alias.length>0">({{ item.alias[0] }})</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <el-pagination background layout="prev,pager,next,jumper" :page-size="24" :total="totalCount>288?288:totalCount"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SongList from '../../components/SongList';
import { createSong } from '../../utils/util';
import PlayList from '../../components/PlayList';

export default {
  name: "search",
  components: { PlayList, SongList },
  data () {
    return {
      wd: '',
      type: '1',
      loading: false,
      resultList: [],
      currentPage: 1,
      totalCount: 0
    }
  },
  watch: {
    $route () {
      this.wd = this.$route.query.wd
      this.currentPage = 1
      this.getSearch()
    }
  },
  methods: {
    ...mapActions(['search', 'getSongDetails']),
    getSearch () {
      this.resultList = []
      let param = {
        keywords: this.wd,
        type: this.type,
        limit: 24,
        offset: (this.currentPage - 1) * 24
      }
      this.loading = true
      this.search(param)
          .then(res => {
            this.handleRes(res)
          })
          .catch(() => {
            this.$message.error('搜索失败')
          })
          .finally(() => {
            this.loading = false
          })
    },
    handleTabClick () {
      this.currentPage = 1
      this.getSearch()
    },
    handleRes (res) {
      if (this.type === '1') {
        this.totalCount = res.result.songCount
        if (this.totalCount !== 0) {
          let songArr = []
          res.result.songs.map(item => {
            songArr.push(item.id)
          })
          let songString = songArr.join(',')
          this.getSongDetails(songString)
              .then(data => {
                let songs = []
                data.songs.map(item => {
                  songs.push(createSong(item))
                })
                this.resultList = songs
              })
        }
      } else if (this.type === '1000') {
        this.totalCount = res.result.playlistCount
        if (this.totalCount !== 0) {
          this.resultList = res.result.playlists
        }
      } else if (this.type === '100') {
        this.totalCount = res.result.artistCount
        if (this.totalCount !== 0) {
          this.resultList = res.result.artists
        }
      } else if (this.type === '10') {
        this.totalCount = res.result.albumCount
        if (this.totalCount !== 0) {
          this.resultList = res.result.albums
        }
      }
    },
    handleSingerDetail (item) {
      this.$router.push({
        name: 'singer-detail',
        query: {
          id: item.id
        }
      })
    },
    handleCurrentChange () {
      this.getSearch()
    }
  },
  mounted () {
    this.wd = this.$route.query.wd
    this.getSearch()
  }
}
</script>

<style lang="scss" scoped>
.search {
  .search-title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .loading {
    margin: 20px 0;
  }

  .bottom {
    text-align: center;
    margin-bottom: 30px;
  }

  .singer {
    margin: 10px 0;

    .singer-item {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #e6e6e6;
      }

      .item-avatar {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        margin-right: 30px;
      }

      .item-trans {
        margin-left: 5px;
        color: darkgray;
      }
    }
  }
}
</style>
