<template>
  <div class="personalized-song">
    <div class="song-title">
      <span @click="handleOpenSong">最新音乐<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="song-content">
      <div class="song-item" v-for="(item,index) of songList" :key="item.id" @mouseenter="handleEnter(index)"
           @mouseleave="handleLeave" @click="handlePlay(index)">
        <div class="song-index">
          <i class="el-icon-video-play play-icon" v-if="focusItem===index"></i>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="song-cover">
          <el-image :key="item.picUrl" :src="item.picUrl" lazy>
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="song-info">
          <div class="song-name">{{ item.name }}</div>
          <div class="song-singer">{{ getSinger(item.song.artists) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "PersonalizedSong",
  data () {
    return {
      songList: [],
      focusItem: -1
    }
  },
  methods: {
    ...mapActions(['selectPlay']),
    handleOpenSong () {
      this.$router.push({
        name: 'song'
      })
    },
    getPersonalizedSong () {
      this.$api.getNewSongs(12)
          .then(res => {
            this.songList = res.result
          })
          .catch(() => this.$message.error('获取最新音乐出错'))
    },
    getSinger (artists) {
      let arr = []
      for (let val of artists) {
        arr.unshift(val.name)
      }
      return arr.join(' / ')
    },
    handleEnter (index) {
      this.focusItem = index
    },
    handleLeave () {
      this.focusItem = -1
    },
    handlePlay(index){
      this.selectPlay({
        list:this.songList,
        index
      })
    }
  },
  mounted () {
    this.getPersonalizedSong()
  }
}
</script>

<style lang="scss" scoped>
.personalized-song {
  margin: 40px 0;

  .song-title {
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .song-content {
    display: flex;
    flex-wrap: wrap;

    .song-item {
      flex: 0 0 33.33%;
      height: 80px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 10px;

      &:hover {
        background: #e6e6e6;
      }

      .song-index {
        width: 30px;
        margin: 0 20px;
        text-align: center;

        .play-icon{
          font-size: larger;
          color: #7868e6;
          cursor: pointer;
        }
      }

      .song-cover {
        width: 55px;
        height: 55px;
        background-color: #d9d9d9;
        color: white;
      }

      .song-info {
        margin: 0 20px;

        .song-singer {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
