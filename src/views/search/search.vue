<template>
  <div class="search">
    <div class="search-title">搜索结果</div>
    <el-tabs v-model="type" @tab-click="handleTabClick">
      <el-tab-pane label="单曲" name="1"></el-tab-pane>
      <el-tab-pane label="歌单" name="1000"></el-tab-pane>
    </el-tabs>
    <song-list v-if="type==='1'" :song-list="resultList" :loading="loading"></song-list>
    <play-list v-else-if="type==='1000'" :lists="resultList"></play-list>
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
      resultList: []
    }
  },
  watch: {
    $route () {
      this.wd = this.$route.query.wd
      this.getSearch()
    }
  },
  methods: {
    ...mapActions(['search', 'getSongDetails']),
    getSearch () {
      this.resultList = []
      let param = {
        keywords: this.wd,
        type: this.type
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
      this.getSearch()
    },
    handleRes (res) {
      if (this.type === '1') {
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
      } else if (this.type === '1000') {
        this.resultList = res.result.playlists
      }
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
}
</style>
