<template>
  <li class="singer-item">
    <el-image class="avatar" :src="item.picUrl||'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
              lazy @click.native="handleSinger" :fit="'cover'"></el-image>
    <span class="name" @click="handleSinger">{{ item.name }}</span>
  </li>
</template>

<script>
export default {
  name: "SingerItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    handleSinger () {
      this.$router.push({
        name: 'singer-detail',
        query: {
          id: this.item.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.singer-item {
  flex: 0 0 10%;
  max-width: 10%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  font-size: 14px;

  .avatar {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .name {
    cursor: pointer;

    &:hover {
      color: #7868e6;
    }
  }
}
</style>
