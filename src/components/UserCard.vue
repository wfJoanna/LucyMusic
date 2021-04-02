<template>
  <div class="user-card" v-if="info">
    <div class="background" :style="{ backgroundImage: 'url(' + info.profile.backgroundUrl + ')' }"></div>
    <div class="avatar-name">
      <el-image class="avatar" fit="cover"
                :src="info.profile.avatarUrl || 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"></el-image>
      <span class="name">{{ info.profile.nickname }}</span>
      <div class="gender" v-if="info.profile.gender===1">
        <svg t="1617266188811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2093">
          <path
              d="M884.62336 71.68h-293.04832a34.816 34.816 0 0 0 0 69.632h242.432l-210.73408 211.6096A340.66944 340.66944 0 0 0 404.5312 273.60768a344.42752 344.42752 0 1 0 267.38176 128.97792l211.03104-211.88608v243.2a34.688 34.688 0 1 0 69.376 0V139.648A67.90656 67.90656 0 0 0 884.62336 71.68zM404.5312 892.928a274.82624 274.82624 0 1 1 273.7152-274.82112A274.58048 274.58048 0 0 1 404.5312 892.928z"
              fill="#53D4FF" p-id="2094"></path>
        </svg>
      </div>
      <div class="gender" v-else-if="info.profile.gender===2">
        <svg t="1617266270841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2233">
          <path
              d="M614.28736 76.8a342.22592 342.22592 0 0 0-267.43296 556.92288L252.16 728.2688 136.03328 612.352a34.66752 34.66752 0 0 0-49.06496 48.98304l116.12672 115.93728-116.12672 115.92192a34.6624 34.6624 0 0 0 49.06496 48.97792l116.12672-115.93728 116.1216 115.93728a34.6624 34.6624 0 1 0 49.06496-48.97792l-116.12672-115.9424 94.2848-94.1312A342.76864 342.76864 0 1 0 614.28736 76.8z m0 615.936a273.32096 273.32096 0 1 1 273.7664-273.32096 273.85344 273.85344 0 0 1-273.7664 273.32096z"
              fill="#FC8677" p-id="2234"></path>
        </svg>
      </div>
    </div>
    <div class="profile">
      <div class="line">等级：<span class="level">Lv{{ info.level }}</span></div>
      <div class="line">年龄：{{ age }}</div>
    </div>
    <div class="follow">
      <div>动态<span>{{ info.profile.eventCount }}</span></div>
      <div>关注<span>{{ info.profile.follows }}</span></div>
      <div>粉丝<span>{{ info.profile.followeds }}</span></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { getAstro } from '../utils/util';

export default {
  name: "UserCard",
  data () {
    return {
      info: null
    }
  },
  computed: {
    age () {
      return getAstro(this.info.profile.birthday)
    }
  },
  methods: {
    ...mapActions(['getUserInfo']),
    refresh () {
      this.getUserInfo(this.userId)
          .then(res => {
            this.info = res
          })
          .catch(() => {
            this.$message.error('获取用户详情失败')
          })
    }
  },
  watch: {
    userId () {
      this.refresh()
    }
  },
  props: ['userId'],
  mounted () {
    this.refresh()
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  width: 400px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  -webkit-box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);
  box-shadow: 0px 5px 40px -1px rgba(2, 10, 18, 0.1);
  padding-bottom: 30px;

  .background {
    width: 100%;
    height: 140px;
    background-size: cover;
    border-radius: 5px 5px 0 0;
  }

  .avatar-name {
    margin-top: -20px;
    padding: 0 30px;
    display: flex;
    align-items: center;

    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 3px;
      flex-shrink: 0;
    }

    .name {
      margin-left: 15px;
      font-weight: 600;
      font-size: 16px;
    }

    .gender {
      width: 15px;
      margin-left: 5px;
    }
  }

  .profile {
    margin-top: 13px;
    padding: 0 40px;

    .line {
      position: relative;
      padding-left: 15px;
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      font-size: 13px;

      .level {
        background: #e6e6e6;
        padding: 0.5px 6px;
        font-size: 9px;
        border-radius: 8px;
        font-weight: bold;
      }

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #7868e6;
        position: absolute;
        top: 6px;
        left: 0;
      }
    }
  }

  .follow {
    display: flex;
    margin: 15px 30px 0;
    padding-top: 15px;
    border-top: 1px solid #f9f9ff;

    div {
      width: 33%;
      text-align: center;
      font-size: 14px;
      color: #958ebb;

      span {
        display: block;
      }
    }
  }
}
</style>
