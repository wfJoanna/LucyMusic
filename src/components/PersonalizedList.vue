<template>
  <div class="personalized-list">
    <div class="list-title">
      <span @click="handleOpenList">推荐歌单<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="list-content">
      <div class="list-item" v-for="item of lists" :key="item.id">
        <div class="item-cover">
          <el-image class="item-image" :key="item.picUrl" :src="item.picUrl" lazy>
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-count">
            <i class="el-icon-caret-right"></i><span>{{ getPlayCount(item) }}</span>
          </div>
        </div>
        <div class="item-info">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalizedList",
  data () {
    return {
      lists: []
    }
  },
  methods: {
    getPersonalizedList () {
      this.$api.getPersonalized(24)
          .then(res => {
            this.lists = res.result
          })
          .catch(() => this.$message.error('获取推荐歌单出错'))
    },
    getPlayCount (item) {
      return item.playCount < 10000 ? item.playCount : Math.floor(item.playCount / 10000)+'万'
    },
    handleOpenList(){
      this.$router.push({
        name: 'playlist'
      })
    }
  },
  mounted () {
    this.getPersonalizedList()
  }
}
</script>

<style lang="scss" scoped>
.personalized-list {
  margin: 40px 0;

  .list-title {
    font-weight: bold;
    cursor: pointer;
  }

  .list-content {
    display: flex;
    flex-wrap: wrap;

    .list-item {
      flex: 0 0 12.5%;
      padding: 15px;

      .item-cover {
        cursor: pointer;
        background-color: #d9d9d9;
        border-radius: 4px;
        color: white;
        position: relative; /*只是为了设置z-index而已*/

        &:hover {
          -webkit-filter: opacity(50%);
          filter: opacity(50%);
        }

        .item-image {
          position: relative;
          top: 4px;
          right: 4px;
          border-radius: 4px;
          vertical-align: top;
        }

        .item-count {
          background: black;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }

      .item-info{
        margin-top: 15px;
        font-size: 14px;
      }
    }
  }
}
</style>
