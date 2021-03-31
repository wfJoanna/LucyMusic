<template>
  <div class="comments" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <div class="hot-item" v-for="(item,index) in comments" :key="index">
      <el-image class="hot-avatar" :fit="'cover'" :src="item.user.avatarUrl" lazy></el-image>
      <div class="hot-left">
        <div class="left-comment">{{ item.user.nickname }}：{{ item.content }}</div>
        <div class="children-comment" v-if="item.beReplied&&item.beReplied.length>0">
          {{ item.beReplied[0].user.nickname }}：{{ item.beReplied[0].content }}
        </div>
        <div class="left-bottom">
          <span>{{ toGetYMD(item.time) }}</span>
          <span><i class="el-icon-thumb"></i>{{ item.likedCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getYMD } from '../utils/util'

export default {
  name: "Comments",
  props: {
    comments: {
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
  methods: {
    toGetYMD (time) {
      return getYMD(time)
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  width: 100%;
  min-height: 20px;

  .hot-item {
    //height:120px;
    padding: 20px 10px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;

    .hot-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .hot-left {
      width: 100%;
      font-size: small;

      .left-comment {
        margin-bottom: 10px;
        line-height: 160%;
      }

      .children-comment {
        background: #f4f4f4;
        color: #636363;
        padding: 10px;
        line-height: 160%;
        margin-bottom: 10px;
      }

      .left-bottom {
        display: flex;
        justify-content: space-between;
      }
    }
  }

}
</style>
