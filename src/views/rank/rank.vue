<template>
  <div class="rank">
    <div class="list-title">官方榜<i class="el-icon-arrow-right"></i></div>
    <play-list :lists="lists.slice(0,4)" :loading="loading"></play-list>
    <div class="list-title">全球榜<i class="el-icon-arrow-right"></i></div>
    <play-list :lists="lists.slice(4)" :loading="loading"></play-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PlayList from '../../components/PlayList';

export default {
  name: "rank",
  components: { PlayList },
  data () {
    return {
      lists: [],
      loading: false
    }
  },
  methods: {
    ...mapActions(['getTopList']),
  },
  mounted () {
    this.loading = true
    this.getTopList()
        .then(res => {
          this.lists = res.list
        })
        .catch(() => {
          this.$message.error('获取榜单失败')
        })
        .finally(() => {
          this.loading = false
        })
  }
}
</script>

<style lang="scss" scoped>
.rank {
  .list-title {
    font-weight: bold;
    margin-bottom: 15px;
    padding-left: 11px;
    margin-top: 30px;
  }
}
</style>
