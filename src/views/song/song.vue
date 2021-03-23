<template>
  <div class="song">
    <div class="song-title">新歌速递</div>
    <el-tabs v-model="activePane" @tab-click="handleTabClick">
      <el-tab-pane label="全部" name="0"></el-tab-pane>
      <el-tab-pane label="华语" name="7"></el-tab-pane>
      <el-tab-pane label="欧美" name="96"></el-tab-pane>
      <el-tab-pane label="韩国" name="16"></el-tab-pane>
      <el-tab-pane label="日本" name="8"></el-tab-pane>
    </el-tabs>
    <div class="song-item" v-for="(item,index) in chooseList" :key="index" @mouseenter="handleEnter(index)"
         @mouseleave="handleLeave">
      <div class="item-index">{{ index + 1 }}</div>
      <div class="item-cover">
        <el-image class="item-image" :src="item.image" lazy></el-image>
        <div class="item-btn" v-if="showBtn===index">
          <i class="el-icon-video-play btn-icon" @click="handlePlay(index)"></i>
        </div>
      </div>
      <div class="item-name">{{item.name}}</div>
      <div class="item-singer">{{item.singer}}</div>
      <div class="item-album">{{item.album}}</div>
      <div class="item-duration">{{toGetMS(item.duration)}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createSong,getMS } from '../../utils/util';

export default {
  name: "song",
  data () {
    return {
      activePane: 0,
      chooseList: [],
      showBtn: -1,
      loading: false
    }
  },
  methods: {
    ...mapActions(['getTopNew', 'getSongDetails', 'selectPlay']),
    getTopSongs () {
      this.loading = true
      this.getTopNew(this.activePane)
          .then(res => {
            let newArr = []
            res.data.map(item => {
              newArr.push(item.id)
            })
            let newString = newArr.join(',')
            this.getSongDetails(newString)
                .then(data => {
                  let songs = []
                  data.songs.map(item => {
                    songs.push(createSong(item))
                  })
                  this.chooseList = songs
                  this.loading = false
                })
          })
          .catch(() => {
            this.$message.error('新歌速递失败')
          })
    },
    handleTabClick () {
      this.getTopSongs()
    },
    handlePlay (index) {
      this.selectPlay({
        list: this.chooseList,
        index
      })
    },
    handleEnter (index) {
      this.showBtn = index
    },
    handleLeave () {
      this.showBtn = -1
    },
    toGetMS(s){
      return getMS(s)
    }
  },
  mounted () {
    this.getTopSongs()
  }
}
</script>

<style lang="scss" scoped>
.song {
  .song-title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .song-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .item-index {
      width: 50px;
      margin-right: 10px;
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
    .item-name{
      width: 300px;
      margin: 0 10px;
    }
    .item-singer{
      width: 400px;
      margin: 0 10px;
    }
    .item-album{
      width: 200px;
      margin: 0 10px;
    }
    .item-duration{
      width: 50px;
      margin-left: 10px;
    }
  }


}
</style>
