<template>
  <div class="singer-detail">
    <div class="top">
      <el-image class="cover" :src="detail.cover || 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'" :fit="'cover'"></el-image>
      <div class="info">
        <div class="first-line">{{ detail.name }}</div>
        <div class="second-line" v-if="detail.transNames">{{ detail.transNames[0] }}</div>
        <div class="second-line" v-else-if="detail.alias&&detail.alias.length>0">{{ detail.alias[0] }}</div>
        <div class="third-line">
          <span class="text">单曲数：{{ detail.musicSize }}</span>
          <span class="text">专辑数：{{ detail.albumSize }}</span>
        </div>
      </div>
    </div>
    <el-tabs v-model="activePane">
      <el-tab-pane label="热门歌曲" name="hot"></el-tab-pane>
      <el-tab-pane label="专辑" name="album"></el-tab-pane>
      <el-tab-pane label="歌手详情" name="desc"></el-tab-pane>
    </el-tabs>
    <div v-if="activePane==='hot'">
      <song-list :song-list="songList" :loading="songLoading"></song-list>
    </div>
    <div v-else-if="activePane==='album'">
      <load-more @scroll-state="getAlbum">
        <play-list :lists="albums" :type="'album'"></play-list>
      </load-more>
      <div class="loading" v-if="loading" v-loading="true" element-loading-text="拼命加载中"
           element-loading-background="rgba(0, 0, 0, 0)"
           element-loading-spinner="el-icon-loading">
      </div>
      <div class="loaded" v-if="noMore">
        - 已加载完 -
      </div>
    </div>
    <div class="desc" v-else-if="activePane==='desc'">
      {{detail.briefDesc}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SongList from '../../components/SongList';
import { createSong } from '../../utils/util';
import PlayList from '../../components/PlayList';
import LoadMore from '../../components/LoadMore';

export default {
  name: "SingerDetail",
  components: { LoadMore, PlayList, SongList },
  data () {
    return {
      singerId: '',
      detail: {},
      activePane: 'hot',
      songList: [],
      count: 1,
      albums: [],
      loading: false,
      noLoading: false,
      noMore: false,
      songLoading:false
    }
  },
  methods: {
    ...mapActions(['getSingerHotSong', 'getSingerDetail', 'getSongDetails', 'getSingerAlbum']),
    getHotSongs () {
      this.songLoading=true
      this.getSingerHotSong(this.singerId)
          .then(res => {
            let newArr = []
            res.songs.map(item => {
              newArr.push(item.id)
            })
            let newString = newArr.join(',')
            this.getSongDetails(newString)
                .then(data => {
                  let songs = []
                  data.songs.map(item => {
                    songs.push(createSong(item))
                  })
                  this.songList = songs
                })
          })
          .catch(() => {
            this.$message.error('获取歌手热门50首歌曲失败')
          })
          .finally(()=>{
            this.songLoading=false
          })
    },
    getDetail () {
      this.getSingerDetail(this.singerId)
          .then(res => {
            this.detail = res.data.artist
          })
          .catch(() => {
            this.$message.error('获取歌手详情失败')
          })
    },
    getAlbum () {
      if (!this.noMore && !this.noLoading) {
        this.loading = true
        this.noLoading = true
        let params = {
          id: this.singerId,
          limit: 40,
          offset: (this.count - 1) * 40
        }
        this.getSingerAlbum(params)
            .then(res => {
              this.albums.push(...res.hotAlbums)
              this.count += 1
              if (res.more !== true) {
                this.noMore = true
              }
            })
            .catch(() => {
              this.$message.error('获取歌手专辑失败')
            })
            .finally(() => {
              this.loading = false
              this.noLoading = false
            })
      }
    }
  },
  mounted () {
    this.singerId = this.$route.query.id
    this.getDetail()
    this.getHotSongs()
    this.getAlbum()
  }
}
</script>

<style lang="scss" scoped>
.singer-detail {
  .top {
    display: flex;
    margin-bottom: 20px;

    .cover {
      width: 220px;
      height: 220px;
      border-radius: 5px;
      margin-right: 20px;
    }

    .info {
      .first-line {
        font-size: 25px;
        font-weight: bolder;
        margin-bottom: 10px;
      }

      .second-line {
        margin-bottom: 30px;
      }

      .third-line {
        .text {
          margin-right: 30px;
        }
      }
    }
  }

  .loading {
    margin-bottom: 20px;
    height: 50px;
  }

  .loaded {
    text-align: center;
    margin: 20px 0;
    color: #7868e6;
  }

  .desc{
    padding: 20px 10px;
    color: #4d4d4d;
    text-indent: 35px;
    letter-spacing: 2px;
    text-align: justify;
    line-height: 170%;
  }
}
</style>
