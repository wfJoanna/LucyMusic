<template>
  <div class="song-list" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <div class="song-item" v-for="(item,index) in songList" :key="index" @mouseenter="handleEnter(index)"
         @mouseleave="handleLeave">
      <div class="item-index">{{ index + 1 }}</div>
      <div class="item-cover">
        <el-image class="item-image" :src="item.image" lazy></el-image>
        <div class="item-btn" v-if="showBtn===index">
          <i class="el-icon-video-play btn-icon" @click="handlePlay(index)"></i>
        </div>
      </div>
      <div class="item-name">{{ item.name }}</div>
      <div class="item-singer">{{ item.singer }}</div>
      <div class="item-album" @click="handleAlbumDetail(item)">{{ item.album }}</div>
      <div class="item-duration">{{ toGetMS(item.duration) }}</div>
    </div>
  </div>
</template>

<script>
import { getMS } from '../utils/util';
import { mapActions } from 'vuex';

export default {
  name: "SongList",
  props: {
    songList: {
      type: Array,
      default: function () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showBtn: -1
    }
  },
  methods: {
    ...mapActions(['selectPlay']),
    handlePlay (index) {
      this.selectPlay({
        list: this.songList,
        index
      })
    },
    handleEnter (index) {
      this.showBtn = index
    },
    handleLeave () {
      this.showBtn = -1
    },
    toGetMS (s) {
      return getMS(s)
    },
    handleAlbumDetail(item){
      this.$router.push({
        name:'album-detail',
        query:{
          id:item.albumId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.song-list {
  margin-top: 20px;

  .song-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: small;

    .item-index {
      width: 50px;
      //text-align: center;
      margin-right: 10px;
    }

    .item-cover {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
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

    .item-name {
      //width: 300px;
      flex-basis: 20%;
      margin: 0 10px;
    }

    .item-singer {
      //width: 400px;
      flex-basis: 30%;
      margin: 0 10px;
    }

    .item-album {
      //width: 200px;
      flex-basis: 20%;
      margin: 0 10px;
      cursor: pointer;

      &:hover{
        color: #7868e6;
      }
    }

    .item-duration {
      width: 50px;
      margin-left: 10px;
    }
  }

}

</style>
