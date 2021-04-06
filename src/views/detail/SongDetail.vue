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
          <div class="info-small">专辑：<span class="album-h" @click="handleAlbumDetail">{{
              this.currentSong.album
            }}</span></div>
        </div>
        <div class="detail-lyric" v-if="lyrics">
          <div class="lyric-move" :style="lyricTop">
            <div class="lyric-basic" :class="{'lyric-active':lyricIndex===index}" v-for="(item,index) in lyricArray"
                 :key="index">{{ item.content }}
            </div>
          </div>
          <!--          <div class="lyric-cover"></div>-->
        </div>
        <div class="no-lyric" v-else-if="!lyrics && !lyricLoading">~~ 没有歌词哦 ~~</div>
      </div>
    </div>
    <div class="detail-bottom">
      <div class="comments">
        <div class="hot-comment">
          <div class="hot-title">精彩评论</div>
          <comments :comments="hotComments" :loading="hotLoading"></comments>
          <div class="has-more">
            <el-button class="more-btn" v-if="hasMoreHot" @click="handleMoreHot">更多精彩评论<i
                class="el-icon-arrow-right"></i></el-button>
          </div>
          <el-dialog :title="'精彩评论'" :visible.sync="dialogVisible">
            <comments :comments="hotTotal" :loading="hotTotalLoading"></comments>
          </el-dialog>
        </div>
        <div class="new-comment">
          <div class="new-title">最新评论（{{ newTotalCount }}）</div>
          <comments :comments="newComments" :loading="newLoading"></comments>
          <div class="new-bottom">
            <el-pagination background layout="prev,pager,next,jumper" :page-size="10" :total="newTotalCount"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currentPage"></el-pagination>
          </div>
        </div>
      </div>
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
import { getSinger, createSong, getYMD } from '../../utils/util'
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
    lyricTop () {
      let line = 37
      let n = 0
      for (let item of this.lyricArray) {
        if (this.currentTime >= item.time) {
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
      this.currentPage = 1
      this.hotTotal = []
    },
    playing () {
      this.turnOrStop()
    },
    currentTime (newTime) {
      if (this.lyrics) {
        let index = -1
        for (let i = 0; i < this.lyricArray.length; i++) {
          if (newTime > this.lyricArray[i].time) {
            index = i
          }
        }
        this.lyricIndex = index
      }
    }
  },
  data () {
    return {
      lyrics: '',
      lyricLoading: false,
      lyricArray: [],
      lyricIndex: -1,

      hotComments: [],
      hasMoreHot: false,
      hotTotal: [],
      hotTotalCount: 0,
      hotLoading: false,
      hotTotalLoading: false,

      newComments: [],
      newTotalCount: 0,
      currentPage: 1,
      newLoading: false,

      simiSongs: [],
      showBtn: -1,
      dialogVisible: false
    }
  },
  methods: {
    ...mapActions(['getLyric', 'getSongDetails', 'getSimiSong', 'selectPlay', 'getCommentHot', 'getAllComments']),
    initialize () {
      this.getHotComments()
      this.getNewComments()
      this.getSongLyrics()
      this.getSimiSongs()
      this.turnOrStop()
    },
    getSongLyrics () {
      this.lyrics = ''
      this.lyricLoading = true
      this.getLyric(this.songId)
          .then(res => {
            if (res.lrc) {
              this.lyrics = res.lrc.lyric
              this.splitLyrics()
            }
          })
          .catch(() => {
            this.$message.error('获取歌词失败')
          })
          .finally(() => {
            this.lyricLoading = false
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
      let res = []

      for (let i = 1; i < split1.length; i += 2) {
        let min = split1[i].substr(0, 2)
        let sec = split1[i].substr(3, 2)
        let time = min * 60 + sec * 1

        res.push({
          time: time,
          content: split1[i + 1]
        })
      }

      this.lyricArray = res
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
      let simiArr = []
      this.simiSongs.map(item => {
        simiArr.push(item.id)
      })
      let simiString = simiArr.join(',')
      this.getSongDetails(simiString)
          .then(res => {
            let songs = []
            res.songs.map(item => {
              songs.push(createSong(item))
            })
            this.selectPlay({
              list: songs,
              index
            })
          })
          .catch(() => {
            this.$message.error('切换失败')
          })
    },
    getHotComments () {
      this.hotLoading = true
      let param = {
        id: this.songId,
        type: 0,
        limit: 10
      }
      this.getCommentHot(param)
          .then(res => {
            this.hotComments = res.hotComments
            this.hasMoreHot = res.hasMore
            this.hotTotalCount = res.total
          })
          .catch(() => {
            this.$message.error('获取热门评论失败')
          })
          .finally(() => {
            this.hotLoading = false
          })
    },
    handleAlbumDetail () {
      this.$router.push({
        name: 'album-detail',
        query: {
          id: this.currentSong.albumId
        }
      })
    },
    handleMoreHot () {
      this.dialogVisible = true
      this.hotTotalLoading = true
      let param = {
        id: this.songId,
        type: 0,
        limit: this.hotTotalCount
      }
      this.getCommentHot(param)
          .then(res => {
            this.hotTotal = res.hotComments
          })
          .catch(() => {
            this.$message.error('获取热门评论失败')
          })
          .finally(() => {
            this.hotTotalLoading = false
          })
    },
    getNewComments () {
      this.newLoading = true
      this.newComments = []
      let param = {
        id: this.songId,
        limit: 10,
        offset: (this.currentPage - 1) * 10
      }
      this.getAllComments(param)
          .then(res => {
            this.newComments = res.comments
            this.newTotalCount = res.total
          })
          .catch(() => {
            this.$message.error('获取最新评论失败')
          })
          .finally(() => {
            this.newLoading = false
          })
    },
    handleCurrentChange () {
      this.getNewComments()
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

          .album-h {
            cursor: pointer;

            &:hover {
              color: #7868e6;
            }
          }
        }
      }

      .detail-lyric {
        margin: 30px 0;
        padding: 10px 20px;
        position: relative;
        height: 320px;
        overflow: hidden;
        //border-radius: 5px;
        //background: rgba(255, 255, 255, 0.9);
        //-webkit-box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);
        //box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);

        .lyric-move {
          width: 100%;
          height: 100%;
          position: absolute;
          transition: top 1s;
          //top:-37px;

          .lyric-basic {
            height: 37px;
            font-size: 14px;
            font-weight: 250;
          }

          .lyric-active {
            color: #7868e6;
          }
        }

        //.lyric-cover {
        //  position: absolute;
        //  top: 0;
        //  left: 0;
        //  width: 100%;
        //  height: 100%;
        //  background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
        //}
      }

      .no-lyric {
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
    align-items: flex-start;

    .comments {
      width: 100%;

      .hot-comment {
        margin: 30px 0;

        .hot-title {
          font-weight: bold;
          margin-bottom: 15px;
        }

        .has-more {
          text-align: center;

          .more-btn {
            margin: 20px;
          }
        }
      }

      .new-comment {
        margin-bottom: 30px;

        .new-title {
          font-weight: bold;
          margin-bottom: 15px;
        }

        .new-bottom {
          text-align: center;
          margin: 30px 0;
        }
      }
    }

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
          //background: #e6e6e6;
          background: rgba(255, 255, 255, 0.9);
          -webkit-box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);
          box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);
        }

        .item-cover {
          flex-shrink: 0;
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
