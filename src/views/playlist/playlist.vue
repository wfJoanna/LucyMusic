<template>
  <div class="playlist">
    <div class="top">
      <el-select class="top-select" v-model="category" placeholder="默认全部" clearable size="mini">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label"
                     :value="item.value"></el-option>
        </el-option-group>
      </el-select>
      <div class="hot-tag">热门标签：
        <el-radio-group v-model="category" size="mini">
          <el-radio-button v-for="(item,index) in hotTag" :key="index" :label="item"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="sort">排序方式：
        <el-radio-group v-model="sortType" size="mini">
          <el-radio-button label="热门"></el-radio-button>
          <el-radio-button label="最新"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="middle" v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading">
      <play-list :lists="playlists"></play-list>
    </div>
    <div class="bottom">
      <el-pagination background layout="total,prev,pager,next,jumper" :page-size="40" :total="total"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PlayList from '../../components/PlayList';

export default {
  name: "playlist",
  components: { PlayList },
  data () {
    return {
      options: [],
      category: '',
      hotTag: [],
      sortType: '热门',
      playlists: [],
      total: 0,
      currentPage: 1,
      loading: false
    }
  },
  watch: {
    category () {
      this.getLists()
    },
    sortType () {
      this.getLists()
    }
  },
  methods: {
    ...mapActions(['getPlaylistCat', 'getPlaylistHotCat', 'getPlaylist']),
    getLists () {
      this.playlists = []
      this.loading = true
      let query = {
        limit: 40
      }
      if (this.category) {
        query.cat = this.category
      }
      query.order = this.sortType === '热门' ? 'hot' : 'new'
      query.offset = (this.currentPage - 1) * 40
      this.getPlaylist(query)
          .then(res => {
            this.playlists = res.playlists
            this.total = res.total
          })
          .catch(() => {
            this.$message.error('获取歌单失败')
          })
          .finally(() => {
            this.loading = false
          })
    },
    handleCurrentChange () {
      this.getLists()
    }
  },
  mounted () {
    this.category = this.$route.query.tag
    this.getPlaylistCat()
        .then(res => {
          let options = []
          for (let item in res.categories) {
            let cat = res.categories[item]
            options.push({
              label: cat,
              options: []
            })
          }
          for (let item of res.sub) {
            let parentCat = res.categories[item.category]
            for (let cat of options) {
              if (cat.label === parentCat) {
                cat.options.push({
                  value: item.name,
                  label: item.name
                })
              }
            }
          }
          this.options = options
        })
        .catch(() => {
          this.$message.error('获取歌单分类失败')
        })

    this.getPlaylistHotCat()
        .then(res => {
          res.tags.map(item => {
            this.hotTag.push(item.name)
          })
        })
        .catch(() => {
          this.$message.error('获取热门分类失败')
        })
    this.getLists()
  }
}
</script>

<style lang="scss" scoped>
.playlist {
  .top {
    display: flex;
    font-size: small;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .middle {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .bottom {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
