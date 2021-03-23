<template>
  <div class="comments">
    <div class="comment-hot">
      <div class="hot-title">精彩评论</div>
      <div class="hot-item" v-for="(item,index) in comments" :key="index">
        <el-image class="hot-avatar" :src="item.user.avatarUrl" lazy></el-image>
        <div class="hot-left">
          <div class="left-comment">{{ item.user.nickname }}：{{ item.content }}</div>
          <div class="left-bottom">
            <span>{{ toGetYMD(item.time) }}</span>
            <span><i class="el-icon-thumb"></i>{{ item.likedCount }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-new"></div>
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

  .comment-hot {
    .hot-title {
      font-weight: bold;
      margin-bottom: 15px;
    }

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
          margin-bottom: 15px;
        }

        .left-bottom {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
