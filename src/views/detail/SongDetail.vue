<template>
  <div class="song-detail">
    <div class="detail-top">
      <div class="detail-cover turn-stop" ref="turnImage">
        <el-image class="cover-image" :src="this.currentSong.image" lazy :preview-src-list="[this.currentSong.image]">
          <div slot="placeholder" class="image-slot"></div>
        </el-image>
      </div>
      <div class="detail-text">
        <div class="detail-info">
          <div class="info-big">{{ this.currentSong.name }}</div>
          <div class="info-small">歌手：{{ this.currentSong.singer }}</div>
          <div class="info-small">专辑：{{ this.currentSong.album }}</div>
        </div>
        <div class="detail-lyric" v-if="lyrics">
          <div class="lyric-move" :style="lyricTop">
            <div class="lyric-basic" :class="{'lyric-active':lyricActive(index)}" v-for="(item,index) in lyricObject"
               :key="index">{{ item }}</div>
          </div>
          <div class="lyric-cover"></div>
        </div>
        <div class="no-lyric" v-else>~~ 没有歌词哦 ~~</div>
      </div>
    </div>
    <div class="detail-bottom">
      <comments :comments="comments"></comments>
      <div class="detail-simi">
        <div class="simi-title">相似歌曲</div>
        <div class="simi-item" @mouseenter="handleSimiEnter(index)" @mouseleave="handleSimiLeave"
             v-for="(item,index) in simiSongs" :key="index">
          <div class="item-cover">
            <el-image class="item-image" :src="item.album.picUrl" lazy></el-image>
            <div class="item-btn" v-if="showBtn===index">
              <i class="el-icon-video-play btn-icon" @click="handlePlaySimi(index)"></i>
            </div>
          </div>
          <div class="item-info">
            <div class="info-name">{{ item.name }}</div>
            <div>{{ getSimiSinger(item.artists) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSinger, createSong,getYMD } from '../../utils/util'
import { mapActions, mapGetters, mapState } from 'vuex';
import Comments from '../../components/Comments';

export default {
  name: "SongDetail",
  components: { Comments },
  computed: {
    ...mapGetters(['currentSong']),
    ...mapState(['playing', 'currentTime']),
    songId () {
      return this.currentSong.id
    },
    lyricActive () {
      return function (index) {
        return this.currentTime >= index
      }
    },
    lyricTop () {
      let line = 37
      let n = 0
      for (let index in this.lyricObject) {
        if (this.currentTime >= index) {
          n++; // n代表歌词当前进行到第几行
        }
      }

      if (n > 5) {
        return {
          top: -line * (n - 5) + 'px'
        }
      } else {
        return {
          top: 0 + 'px'
        }
      }
    }
  },
  watch: {
    songId () {
      this.initialize()
    },
    playing () {
      this.turnOrStop()
    }
  },
  data () {
    return {
      lyrics: '',
      lyricObject: {},
      comments:[],
      simiSongs: [],
      showBtn: -1
    }
  },
  methods: {
    ...mapActions(['getLyric', 'getSongDetails', 'getSimiSong', 'selectPlay','getCommentHot']),
    initialize () {
      this.getHotComments()
      this.getSongLyrics()
      this.getSimiSongs()
      this.turnOrStop()
    },
    getSongLyrics () {
      this.getLyric(this.songId)
          .then(res => {
            if(res.lrc){
              this.lyrics = res.lrc.lyric
              this.splitLyrics()
            }
          })
          .catch(() => {
            this.$message.error('获取歌词失败')
          })
    },
    getSimiSongs () {
      this.getSimiSong(this.songId)
          .then(res => {
            this.simiSongs = res.songs
          })
          .catch(() => {
            this.$message.error('获取相似音乐失败')
          })
    },
    turnOrStop () {
      if (this.playing === true) {
        this.$refs.turnImage.classList.remove('turn-stop')
      } else {
        this.$refs.turnImage.classList.add('turn-stop')
      }
    },
    splitLyrics () {
      let split1 = this.lyrics.split(/\[|\]/g)
      let res = {}

      for (let i = 1; i < split1.length; i += 2) {
        let min = split1[i].substr(0, 2)
        let sec = split1[i].substr(3, 2)
        let time = min * 60 + sec * 1

        if (res.hasOwnProperty(time)) {
          res[time] = res[time] + split1[i + 1]
        } else {
          res[time] = split1[i + 1]
        }
      }

      this.lyricObject = Object.assign({}, res) // 深拷贝。其实浅拷贝也可以
    },
    getSimiSinger (artists) {
      return getSinger(artists)
    },
    handleSimiEnter (index) {
      this.showBtn = index
    },
    handleSimiLeave () {
      this.showBtn = -1
    },
    handlePlaySimi (index) {
      let simiArr=[]
      this.simiSongs.map(item=>{
        simiArr.push(item.id)
      })
      let simiString=simiArr.join(',')
      this.getSongDetails(simiString)
        .then(res=>{
          let songs = []
          res.songs.map(item => {
            songs.push(createSong(item))
          })
          this.selectPlay({
            list: songs,
            index
          })
        })
        .catch(()=>{
          this.$message.error('切换失败')
        })
    },
    getHotComments(){
      let param={
        id: this.songId,
        type: 0,
        limit: 10
      }
      this.getCommentHot(param)
        .then(res=>{
          this.comments=res.hotComments
        })
        .catch(()=>{
          this.$message.error('获取热门评论失败')
        })
    }
  },
  mounted () {
    this.initialize(this.songId)
  }
}
</script>

<style lang="scss" scoped>
.song-detail {
  .detail-top {
    display: flex;
    //height: 600px;

    .detail-cover {
      width: 300px;
      height: 300px;
      background: #7868e6;
      border-radius: 50%;
      animation: 60s linear infinite CDturn;
      margin: 120px 100px 100px 100px;

      .cover-image {
        border-radius: 50%;
        vertical-align: top;
        width: 300px;
        height: 300px;
      }

      @keyframes CDturn {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(360deg)
        }
      }
    }

    .turn-stop {
      animation-play-state: paused;
    }

    .detail-text {
      width: 100%;
      height: 100%;
      //background: #7868e6;
      padding: 20px 40px;

      .detail-info {
        .info-big {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .info-small {
          font-size: small;
          margin-bottom: 10px;
        }
      }

      .detail-lyric {
        margin: 30px 0;
        padding: 10px 20px;
        position: relative; //只是为了蒙层
        height: 360px;
        overflow: hidden;

        .lyric-move {
          width: 100%;
          height: 100%;
          position: absolute;
          transition: top 1s;
          //top:-37px;

          .lyric-basic{
            height:37px;
          }

          .lyric-active {
            color: #7868e6;
          }
        }

        .lyric-cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
        }
      }

      .no-lyric{
        margin: 30px 0;
        //text-align: center;
        padding: 10px 20px;
        height: 360px;
        color: darkgray;
      }
    }
  }

  .detail-bottom {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .detail-simi {
      margin-left: 50px;
      //width: 300px;

      .simi-title {
        font-weight: bold;
        margin-bottom: 15px;
      }

      .simi-item {
        width: 100%;
        height: 80px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;

        &:hover {
          background: #e6e6e6;
        }

        .item-cover {
          width: 60px;
          height: 60px;
          margin: 8px;
          position: relative;

          .item-image {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }

          .item-btn {
            //background: #e6e6e6;
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .btn-icon {
              cursor: pointer;
              font-size: 30px;
              font-weight: bolder;
              color: white;
              border-radius: 50%;
            }
          }
        }

        .item-info {
          width: 150px;
          overflow: hidden;
          font-size: 12px;

          .info-name {
            margin-bottom: 9px;
          }
        }
      }
    }
  }
}
</style>
