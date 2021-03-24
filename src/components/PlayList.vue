<template>
  <div class="play-list">
    <div class="list-item" v-for="item of lists" :key="item.id">
      <div class="item-cover" @click="handleListDetail(item)">
        <el-image class="item-image" :src="item.picUrl||item.coverImgUrl" lazy>
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
</template>

<script>
export default {
  name: "PlayList",
  props:{
    lists: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  methods:{
    handleListDetail(item){
      this.$router.push({
        name:'playlist-detail',
        query:{
          id:item.id
        }
      })
    },
    getPlayCount (item) {
      return item.playCount < 10000 ? item.playCount : Math.floor(item.playCount / 10000)+'万'
    }
  }
}
</script>

<style lang="scss" scoped>
.play-list {
  display: flex;
  flex-wrap: wrap;

  .list-item {
    flex: 0 0 12.5%;
    padding: 15px;
    max-width: 12.5%;

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
        padding-right: 5px;
      }
    }

    .item-info{
      margin-top: 15px;
      font-size: 14px;
    }
  }
}
</style>
