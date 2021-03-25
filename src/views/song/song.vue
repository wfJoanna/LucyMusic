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
    <song-list :song-list="chooseList" :loading="loading"></song-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createSong } from '../../utils/util';
import SongList from '../../components/SongList';

export default {
  name: "song",
  components: { SongList },
  data () {
    return {
      activePane: 0,
      chooseList: [],
      loading: false
    }
  },
  methods: {
    ...mapActions(['getTopNew', 'getSongDetails']),
    getTopSongs () {
      this.chooseList = []
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
                })
          })
          .catch(() => {
            this.$message.error('新歌速递失败')
          })
          .finally(()=>{
            this.loading=false
          })
    },
    handleTabClick () {
      this.getTopSongs()
    }
  },
  mounted () {
    this.getTopSongs()
  }
}
</script>

<style lang="scss" scoped>
.song {
  background: url(../../assets/lucybg.png) no-repeat fixed right;
  background-size: 280px;
  .song-title {
    font-weight: bold;
    margin-bottom: 15px;
  }
}
</style>
