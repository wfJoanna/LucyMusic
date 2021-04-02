<template>
  <div class="personalized-list">
    <div class="list-title">
      <span style="cursor: pointer;" @click="handleOpenList">推荐歌单<i class="el-icon-arrow-right"></i></span>
    </div>
    <play-list :lists="lists" :loading="loading"></play-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PlayList from './PlayList';

export default {
  name: "PersonalizedList",
  components: { PlayList },
  data () {
    return {
      lists: [],
      loading: false
    }
  },
  methods: {
    ...mapActions(['getPersonalized']),
    getPersonalizedList () {
      this.loading = true
      this.getPersonalized(24)
          .then(res => {
            this.lists = res.result
          })
          .catch(() => this.$message.error('获取推荐歌单出错'))
          .finally(() => {
            this.loading = false
          })
    },
    handleOpenList () {
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
    margin-bottom: 15px;
  }
}
</style>
