<template>
  <div class="album-detail">
    <div class="detail-top">
      <div class="top-cover">
        <el-image class="cover-image" :src="coverUrl"></el-image>
      </div>
      <div class="top-info">
        <div class="first-line">{{ title }}</div>
        <div class="second-line">歌手：{{ singer }}</div>
        <div class="second-line">时间：{{ time }}</div>
      </div>
    </div>
    <div class="detail-bottom">
      <song-list :song-list="songs" :loading="loading"></song-list>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createSong, getYMD } from '../../utils/util';
import SongList from '../../components/SongList';

export default {
  name: "AlbumDetail",
  components: { SongList },
  data () {
    return {
      albumId: '',
      songs: [],
      loading: false,

      coverUrl: '',
      title: '',
      singer: '',
      time: ''
    }
  },
  methods: {
    ...mapActions(['getAlbum', 'getSongDetails']),
    getAlbumDetails () {
      this.loading = true
      this.getAlbum(this.albumId)
          .then(res => {
            let p = res.album
            this.coverUrl = p.picUrl
            this.title = p.name
            this.singer = p.artist.name
            this.time = getYMD(p.publishTime)

            let songArr = []
            res.songs.map(item => {
              songArr.push(item.id)
            })
            let songString = songArr.join(',')
            this.getSongDetails(songString)
                .then(data => {
                  let songs = []
                  data.songs.map(item => {
                    songs.push(createSong(item))
                  })
                  this.songs = songs
                })
          })
          .catch(() => {
            this.$message.error('获取专辑详情失败')
          })
          .finally(()=>{
            this.loading=false
          })
    },
  },
  mounted () {
    this.albumId = this.$route.query.id
    this.getAlbumDetails()
  }
}
</script>

<style lang="scss" scoped>
.album-detail {
  .detail-top {
    display: flex;

    .top-cover {
      margin-right: 20px;
      .cover-image {
        width: 200px;
        height: 200px;
        border-radius: 9px;
      }
    }

    .top-info {
      .first-line {
        font-size: 25px;
        font-weight: bolder;
        margin-bottom: 30px;
      }

      .second-line {
        font-size: small;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
