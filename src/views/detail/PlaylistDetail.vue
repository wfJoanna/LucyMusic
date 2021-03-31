<template>
  <div class="playlist-detail">
    <div class="detail-top">
      <div class="top-cover">
        <el-image class="cover-image" :src="coverUrl" :fit="'cover'" lazy></el-image>
      </div>
      <div class="top-info">
        <div class="first-line">{{ title }}</div>
        <div class="second-line">
          <el-avatar class="avatar" :src="avatar"></el-avatar>
          <span class="text">{{ creator }}</span>
          <span class="text">{{ time }}创建</span>
        </div>
        <div class="third-line">
          <div>标签：</div>
          <div class="tag" v-for="tag in tags" @click="handleTag(tag)">{{tag}}</div>
        </div>
        <div class="description">
          <div class="short-desc">{{description}}</div>
          <el-button type="text" @click="dialogVisible=true">全部<i class="el-icon-arrow-right"></i></el-button>
          <el-dialog :title="title" :visible.sync="dialogVisible">{{description}}</el-dialog>
        </div>
      </div>
    </div>
    <div class="detail-bottom">
      <song-list :song-list="playlist" :loading="loading"></song-list>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { createSong, getYMD } from '../../utils/util';
import SongList from '../../components/SongList';

export default {
  name: "PlaylistDetail",
  components: { SongList },
  data () {
    return {
      listId: '',
      playlist: [],
      loading: false,
      dialogVisible:false,

      coverUrl: '',
      title: '',
      creator: '',
      avatar: '',
      time: '',
      tags: [],
      description:''
    }
  },
  methods: {
    ...mapActions(['getListDetail', 'getSongDetails']),
    getListDetails () {
      this.loading = true
      this.getListDetail(this.listId)
          .then(res => {
            let p = res.playlist
            this.coverUrl = p.coverImgUrl
            this.title = p.name
            this.creator = p.creator.nickname
            this.avatar = p.creator.avatarUrl
            this.time = getYMD(p.createTime)
            this.tags = p.tags
            this.description=p.description

            let songArr = []
            p.trackIds.map(item => {
              songArr.push(item.id)
            })
            let songString = songArr.join(',')
            this.getSongDetails(songString)
                .then(data => {
                  let songs = []
                  data.songs.map(item => {
                    songs.push(createSong(item))
                  })
                  this.playlist = songs
                })
          })
          .catch(() => {
            this.$message.error('获取歌单详情失败')
          })
          .finally(()=>{
            this.loading=false
          })
    },
    handleTag(tag){
      this.$router.push({
        name: 'playlist',
        query: {
          tag: tag
        }
      })
    }
  },
  mounted () {
    this.listId = this.$route.query.id
    this.getListDetails()
  }
}
</script>

<style lang="scss" scoped>
.playlist-detail {
  .detail-top {
    //background: cornflowerblue;
    display: flex;

    .top-cover {
      margin-right: 20px;
      .cover-image {
        width: 200px;
        height: 200px;
        border-radius: 9px;
      }
    }

    .top-info {
      .first-line {
        font-size: 25px;
        font-weight: bolder;
        margin-bottom: 10px;
      }

      .second-line {
        display: flex;
        align-items: center;
        font-size: small;
        margin-bottom: 10px;

        .avatar {
          margin-right: 5px;
        }

        .text {
          margin-right: 10px;
        }
      }

      .third-line {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .tag{
          background: #7868e6;
          border-radius: 15px;
          font-size: 12px;
          padding: 4px 12px;
          color: white;
          cursor: pointer;
          margin: 0 3px;
        }
      }
      .description{
        font-size: small;
        white-space: pre-wrap;
        line-height: 20px;
        .short-desc{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }

  .detail-bottom {
    //background: #7868e6;
  }
}
</style>
