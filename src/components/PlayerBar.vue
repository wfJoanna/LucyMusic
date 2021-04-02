<template>
  <div class="player-bar">
    <div class="audio-avatar">
      <img class="avatar-image" v-if="currentSong.image" :src="currentSong.image" alt="lucymusic"
           @click="handleSongDetail">
      <div v-else>
        <svg t="1615880982818" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2830">
          <path d="M513 511.8m-497 0a497 497 0 1 0 994 0 497 497 0 1 0-994 0Z" fill="#A99BF9" p-id="2831"></path>
          <path
              d="M513 176.6c-185.1 0-335.2 150.1-335.2 335.2S327.9 847 513 847s335.2-150.1 335.2-335.2S698.1 176.6 513 176.6z m0 377.7c-23.5 0-42.5-19-42.5-42.5s19-42.5 42.5-42.5 42.5 19 42.5 42.5-19 42.5-42.5 42.5z"
              fill="#657182" p-id="2832"></path>
          <path
              d="M513 854.6c-91.6 0-177.7-35.7-242.4-100.4-64.8-64.8-100.4-150.9-100.4-242.4 0-91.6 35.7-177.7 100.4-242.4S421.4 169 513 169s177.7 35.7 242.4 100.4c64.8 64.8 100.4 150.9 100.4 242.4 0 91.6-35.7 177.7-100.4 242.4C690.7 819 604.6 854.6 513 854.6z m0-670.3c-87.5 0-169.7 34.1-231.6 95.9-61.9 61.9-95.9 144.1-95.9 231.6s34.1 169.7 95.9 231.6c61.9 61.9 144.1 95.9 231.6 95.9s169.7-34.1 231.6-95.9c61.9-61.9 95.9-144.1 95.9-231.6s-34.1-169.7-95.9-231.6c-61.9-61.9-144.1-95.9-231.6-95.9z m0 377.7c-27.7 0-50.2-22.5-50.2-50.2 0-27.7 22.5-50.2 50.2-50.2 27.7 0 50.2 22.5 50.2 50.2 0 27.7-22.5 50.2-50.2 50.2z m0-85.1c-19.2 0-34.9 15.7-34.9 34.9s15.7 34.9 34.9 34.9 34.9-15.7 34.9-34.9-15.7-34.9-34.9-34.9z"
              fill="#100F11" p-id="2833"></path>
          <path
              d="M513 383.8c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128z m0 170.5c-23.5 0-42.5-19-42.5-42.5s19-42.5 42.5-42.5 42.5 19 42.5 42.5-19 42.5-42.5 42.5z"
              fill="#E45544" p-id="2834"></path>
          <path
              d="M513 647.4c-74.8 0-135.6-60.8-135.6-135.6S438.2 376.2 513 376.2 648.6 437 648.6 511.8 587.8 647.4 513 647.4z m0-255.9c-66.3 0-120.3 54-120.3 120.3s54 120.3 120.3 120.3 120.3-54 120.3-120.3-54-120.3-120.3-120.3z m0 170.5c-27.7 0-50.2-22.5-50.2-50.2s22.5-50.2 50.2-50.2c27.7 0 50.2 22.5 50.2 50.2S540.7 562 513 562z m0-85.1c-19.2 0-34.9 15.7-34.9 34.9s15.7 34.9 34.9 34.9 34.9-15.7 34.9-34.9-15.7-34.9-34.9-34.9z"
              fill="#0F0E10" p-id="2835"></path>
          <path
              d="M789.1 414.8c-3.2 0-6.1-2-7.2-5.1-13.7-38.6-35.4-73-64.6-102.2-29.2-29.2-63.6-50.9-102.2-64.6-4-1.4-6.1-5.8-4.7-9.8s5.8-6.1 9.8-4.7c40.8 14.4 77.1 37.4 107.9 68.2 30.8 30.8 53.8 67.1 68.2 107.9 1.4 4-0.7 8.4-4.7 9.8-0.8 0.3-1.6 0.5-2.5 0.5zM739.2 424c-3.1 0-5.9-1.8-7.1-4.9-11.3-28.7-28.1-54.4-50.1-76.4-22-22-47.7-38.9-76.4-50.1-3.9-1.5-5.9-6-4.3-9.9 1.5-3.9 6-5.9 9.9-4.3 30.7 12.1 58.1 30.1 81.6 53.6 23.5 23.5 41.5 50.9 53.6 81.6 1.5 3.9-0.4 8.4-4.3 9.9-1 0.4-1.9 0.5-2.9 0.5zM695.4 432.2c-2.9 0-5.7-1.7-7-4.5-9-20.1-21.5-38.3-37.3-54.1-15.7-15.7-33.9-28.3-54.1-37.3-3.9-1.7-5.6-6.2-3.9-10.1 1.7-3.9 6.2-5.6 10.1-3.9 21.9 9.7 41.6 23.3 58.6 40.4 17.1 17.1 30.7 36.8 40.4 58.6 1.7 3.9 0 8.4-3.9 10.1-0.8 0.6-1.8 0.8-2.9 0.8zM408.3 795.6c-0.8 0-1.7-0.1-2.6-0.4-40.8-14.4-77.1-37.4-107.9-68.2-30.8-30.8-53.8-67.1-68.2-107.9-1.4-4 0.7-8.4 4.7-9.8 4-1.4 8.4 0.7 9.8 4.7 13.7 38.6 35.4 73 64.6 102.2 29.2 29.2 63.6 50.9 102.2 64.6 4 1.4 6.1 5.8 4.7 9.8-1.2 3-4.1 5-7.3 5zM417.6 745.7c-0.9 0-1.9-0.2-2.8-0.5-30.7-12.1-58.1-30.1-81.6-53.6-23.5-23.5-41.5-50.9-53.6-81.6-1.5-3.9 0.4-8.4 4.3-9.9s8.4 0.4 9.9 4.3c11.3 28.7 28.1 54.4 50.1 76.4s47.7 38.9 76.4 50.1c3.9 1.5 5.9 6 4.3 9.9-1.1 3.1-4 4.9-7 4.9zM425.8 701.9c-1 0-2.1-0.2-3.1-0.7-21.8-9.7-41.6-23.3-58.6-40.4-17.1-17.1-30.7-36.8-40.4-58.7-1.7-3.9 0-8.4 3.9-10.1 3.9-1.7 8.4 0 10.1 3.9 9 20.1 21.5 38.3 37.3 54.1 15.7 15.7 33.9 28.3 54.1 37.3 3.9 1.7 5.6 6.2 3.9 10.1-1.5 2.8-4.3 4.5-7.2 4.5z"
              fill="#F8F7F9" p-id="2836"></path>
        </svg>
      </div>
    </div>
    <div class="audio-info">
      <div class="audio-name">{{ currentSong.name }}</div>
      <div class="audio-singer">{{ currentSong.singer }}</div>
    </div>
    <div class="audio-control">
      <i class="el-icon-arrow-left icon-side" @click="handlePrev"></i>
      <i class="el-icon-video-play icon-center" v-if="!playing" @click="handleToggle(true)"></i>
      <i class="el-icon-video-pause icon-center" v-else @click="handleToggle(false)"></i>
      <i class="el-icon-arrow-right icon-side" @click="handleNext"></i>
    </div>
    <div class="audio-progress">
      <span>{{ toGetMS(currentTime) }}</span>
      <progress-bar :percent="percent" @leftChange="handleLeftChange"></progress-bar>
      <span>{{ toGetMS(currentSong.duration) }}</span>
    </div>
    <div class="audio-volume">
      <i class="el-icon-headset volume-icon"></i>
      <el-slider class="volume-progress" v-model="volume"></el-slider>
    </div>
    <div class="audio-tool">
      <div class="play-mode" @click="handleMode('loop')" v-if="checkMode('sequence')">
        <svg t="1615961450391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="860">
          <path
              d="M905.615621 524.965532c0-132.931319-65.364876-256.560237-174.885151-331.940698v-0.031008c-1.24032-0.868224-2.356608-1.922496-3.627936-2.790721l-0.248064 0.403105a30.573893 30.573893 0 0 0-18.480771-5.891522 31.256069 31.256069 0 0 0-29.953734 32.465382 30.635909 30.635909 0 0 0 14.232675 24.341284l-0.124032 0.186049a340.839996 340.839996 0 0 1 151.071002 283.289137c0 185.272833-148.559354 336.188795-332.777914 340.653948l39.194119-39.194119a30.759941 30.759941 0 0 0 11.752034-22.821892 31.225061 31.225061 0 0 0-29.953734-32.465381 30.728933 30.728933 0 0 0-23.876164 10.356673l-0.372096-0.372096-116.5901 116.652117 116.90018 113.582324 0.31008-0.31008a30.697925 30.697925 0 0 0 23.6281 13.147394 31.256069 31.256069 0 0 0 32.403366-30.015749 30.914981 30.914981 0 0 0-13.860578-26.542853l0.744192-0.7752-40.341415-39.225127c218.451398-4.434145 394.855941-183.164288 394.855941-402.669959M487.410652 184.652672l-38.139847 37.085575 0.744192 0.7752a30.759941 30.759941 0 0 0-13.860578 26.542853c0.682176 17.240451 15.162915 30.697925 32.403365 29.984741a30.697925 30.697925 0 0 0 23.628101-13.116386l0.279072 0.31008 116.869172-113.582324-116.528084-116.590101-0.372096 0.31008a30.697925 30.697925 0 0 0-23.907173-10.325665c-17.209443 0.651168-30.604901 15.193923-29.953733 32.434373a30.945989 30.945989 0 0 0 11.876066 22.883908l41.054599 41.085608C274.323638 128.373143 99.407479 306.42111 99.407479 524.99654c0 134.109624 66.450156 259.071886 177.675872 334.266299l34.728966-51.411273a340.964028 340.964028 0 0 1-150.388827-282.855026c0-182.947232 144.931417-332.343802 325.987162-340.343868"
              p-id="861"></path>
        </svg>
      </div>
      <div class="play-mode" @click="handleMode('random')" v-else-if="checkMode('loop')">
        <svg t="1615961510133" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="990">
          <path
              d="M773.597867 203.776l-0.273067 0.443733a33.621333 33.621333 0 0 0-20.343467-6.485333c-18.978133 0.785067-33.723733 16.725333-32.9728 35.771733a33.826133 33.826133 0 0 0 15.633067 26.794667l-0.1024 0.170667a375.227733 375.227733 0 0 1 166.2976 311.876266c0 207.018667-168.448 375.466667-375.466667 375.466667-27.818667 0-27.818667 0-54.340266-2.901333-90.453333-9.898667-152.610133-58.9824-155.5456-61.201067a375.330133 375.330133 0 0 1-165.5808-311.364267c0-201.4208 159.5392-365.841067 358.843733-374.647466l-41.984 40.823466 0.8192 0.853334a33.860267 33.860267 0 0 0-15.2576 29.218133c0.750933 18.978133 16.725333 33.757867 35.669333 33.041067a33.792 33.792 0 0 0 26.0096-14.472534l0.3072 0.341334 128.648534-124.996267L515.6864 34.0992l-0.4096 0.4096a33.6896 33.6896 0 0 0-26.3168-11.400533c-18.944 0.750933-33.6896 16.725333-32.9728 35.703466a33.8944 33.8944 0 0 0 13.038933 25.156267l45.226667 45.2608C275.182933 135.714133 82.602667 331.741867 82.602667 572.347733c0 147.626667 73.1136 285.149867 193.194666 366.114134 3.072 2.56 77.550933 62.190933 188.757334 74.308266 29.422933 3.208533 31.1296 3.310933 61.781333 3.310934 244.667733 0 443.733333-199.0656 443.733333-443.733334A443.392 443.392 0 0 0 773.597867 203.776"
              p-id="991"></path>
          <path
              d="M542.071467 400.827733a33.28 33.28 0 0 0-17.134934 6.075734l-0.170666-0.3072-106.8032 69.700266 0.170666 0.273067a33.9968 33.9968 0 0 0-15.837866 29.696c0.750933 18.944 16.725333 33.723733 35.669333 32.9728a33.109333 33.109333 0 0 0 17.1008-6.0416l0.2048 0.273067 53.998933-35.259734v249.856h0.034134c0 0.477867-0.238933 0.887467-0.2048 1.365334a34.2016 34.2016 0 1 0 68.4032-1.365334h0.034133v-0.170666c0-0.4096 0.2048-0.750933 0.2048-1.160534 0-0.273067-0.170667-0.477867-0.2048-0.785066V435.2c0-0.477867 0.2048-0.887467 0.2048-1.3312a34.4064 34.4064 0 0 0-35.669333-33.041067"
              p-id="992"></path>
        </svg>
      </div>
      <div class="play-mode" @click="handleMode('sequence')" v-else-if="checkMode('random')">
        <svg t="1615961551270" class="icon" viewBox="0 0 1063 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1121">
          <path
              d="M911.478154 682.653538a38.990769 38.990769 0 0 0-30.326154-13.115076c-21.897846 0.827077-38.912 19.298462-38.084923 41.196307 0.472615 11.933538 6.380308 22.055385 14.966154 28.987077l47.182769 47.222154a289.201231 289.201231 0 0 1-139.264-61.794462L331.697231 257.063385A369.388308 369.388308 0 0 0 53.956923 131.150769a39.384615 39.384615 0 1 0 0 78.769231h0.039385c83.652923 0 163.249231 36.115692 219.214769 99.879385l433.624615 468.007384 8.27077 7.483077a369.664 369.664 0 0 0 194.048 81.762462l-52.539077 51.081846 0.984615 0.945231a39.069538 39.069538 0 0 0-17.604923 33.71323c0.866462 21.897846 19.298462 38.990769 41.156923 38.124308a38.912 38.912 0 0 0 29.971692-16.699077l0.393846 0.393846 148.48-144.226461-148.046769-148.204308-0.472615 0.472615z"
              p-id="1122"></path>
          <path
              d="M911.163077 30.759385a38.990769 38.990769 0 0 0-30.011077-16.699077 39.660308 39.660308 0 0 0-41.117538 38.124307 38.990769 38.990769 0 0 0 17.604923 33.673847l-0.984616 1.024 48.600616 47.261538a366.08 366.08 0 0 0-217.481847 106.259692l-128.551384 139.34277 0.196923 0.196923a38.990769 38.990769 0 0 0-10.633846 26.505846 39.384615 39.384615 0 0 0 39.384615 39.384615 38.990769 38.990769 0 0 0 28.750769-12.878769l0.196923 0.196923 126.582154-137.294769a287.665231 287.665231 0 0 1 166.675693-82.944l-52.224 52.302769a39.108923 39.108923 0 0 0-15.044923 29.026462c-0.866462 21.897846 16.147692 40.329846 38.045538 41.196307a38.990769 38.990769 0 0 0 30.326154-13.115077l0.472615 0.433231 148.046769-148.164923-148.48-144.226462-0.393846 0.393847zM415.783385 554.889846a38.872615 38.872615 0 0 0-28.672 12.760616l-0.196923-0.157539-133.750154 144.265846A289.201231 289.201231 0 0 1 53.956923 790.843077v0.472615c-0.866462-0.039385-1.575385-0.472615-2.441846-0.472615a39.384615 39.384615 0 1 0 0 78.769231c0.866462 0 1.575385-0.472615 2.441846-0.472616v0.472616c94.562462 0 184.516923-35.721846 255.094154-102.4l135.601231-146.156308-0.196923-0.157538a38.872615 38.872615 0 0 0 10.712615-26.624 39.384615 39.384615 0 0 0-39.384615-39.384616"
              p-id="1123"></path>
        </svg>
      </div>
      <div class="play-list" v-popover:popover>
        <svg t="1615961926495" class="icon" viewBox="0 0 1220 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1252">
          <path
              d="M50.254769 94.956308a38.912 38.912 0 1 0 0-77.784616 38.912 38.912 0 0 0 0 77.784616M371.869538 94.956308v0.472615H1156.332308v-0.472615a38.912 38.912 0 0 0 0-77.863385v-0.393846H371.869538v0.393846a38.912 38.912 0 0 0 0 77.863385M50.254769 326.340923a38.912 38.912 0 1 0 0-77.784615 38.912 38.912 0 0 0 0 77.784615M371.869538 326.340923v0.472615H1156.332308v-0.472615a38.912 38.912 0 0 0 0-77.863385V248.123077H371.869538v0.393846a38.912 38.912 0 0 0 0 77.863385M50.254769 557.725538a38.912 38.912 0 1 0 0-77.784615 38.912 38.912 0 0 0 0 77.784615M371.869538 557.725538v0.472616H1156.332308v-0.472616a38.912 38.912 0 0 0 0-77.863384v-0.393846H371.869538v0.393846a38.912 38.912 0 0 0 0 77.863384M50.254769 789.110154a38.912 38.912 0 1 0 0-77.784616 38.912 38.912 0 0 0 0 77.784616M371.869538 789.110154v0.472615H1156.332308v-0.472615a38.912 38.912 0 0 0 0-77.863385v-0.393846H371.869538v0.393846a38.912 38.912 0 0 0 0 77.863385M50.254769 1020.494769a38.912 38.912 0 1 0 0-77.784615 38.912 38.912 0 0 0 0 77.784615M371.869538 1020.494769v0.472616H1156.332308v-0.472616a38.912 38.912 0 0 0 0-77.863384v-0.393847H371.869538v0.393847a38.912 38.912 0 0 0 0 77.863384"
              p-id="1253"></path>
        </svg>
      </div>
      <el-popover ref="popover" placement="top" trigger="click" title="当前播放列表">
        <div class="list-count">总共{{ sequenceList.length || 0 }}首</div>
        <div class="list-content">
          <div class="list-item" v-for="(item,index) of sequenceList" :key="item.id"
               @mouseenter="handleEnterItem(index)"
               @mouseleave="handleLeaveItem">
            <div class="item-index">
              <i class="el-icon-video-play play-icon" @click="handlePlayItem(index)"
                 v-if="(focusItem===index && !playing)||(focusItem===index && currentSong.id!==item.id)"></i>
              <i class="el-icon-video-pause play-icon" @click="handlePauseItem"
                 v-else-if="focusItem===index && playing"></i>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div class="item-info">{{ item.name }} - {{ item.singer }}</div>
          </div>
        </div>
      </el-popover>
    </div>
    <audio ref="audio" :src="url" @timeupdate="handleTimeUpdate" @ended="handleEnd"></audio>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import * as types from '../store/mutationType'
import { getMS, shuffle } from '../utils/util'
import ProgressBar from './ProgressBar';
import { playMode } from '../utils/constant';

export default {
  name: "PlayerBar",
  components: { ProgressBar },
  data () {
    return {
      volume: 100,
      focusItem: -1,
      url: '',
      freeStart:0
    }
  },
  computed: {
    ...mapState(['playList', 'sequenceList', 'currentIndex', 'playing', 'mode', 'currentTime']),
    ...mapGetters(['currentSong']),
    percent () {
      if (this.currentSong.id) {
        return this.currentTime / this.currentSong.duration
      } else {
        return 1
      }
    }
  },
  watch: {
    currentSong (newSong, oldSong) {
      if (newSong.id == oldSong.id || !newSong.id) {
        return
      }
      this.freeStart=0
      this.url = ''
      this.getSongUrl(newSong.id)
          .then(res => {
            if (res.data[0].freeTrialInfo) {
              this.freeStart=res.data[0].freeTrialInfo.start
              this.$notify.info({
                title: '试听',
                dangerouslyUseHTMLString: true,
                message: '正在试听《' + this.currentSong.name + '》从' + res.data[0].freeTrialInfo.start + '秒到' + res.data[0].freeTrialInfo.end + '秒的片段<br><br>开通vip畅听完整版',
                position: 'bottom-right'
              })
            }
            if(!res.data[0].url){
              if(res.data[0].code==-110){
                this.$notify.info({
                  title:'购买',
                  message:'版权方要求，当前专辑需单独付费，购买数字专辑即可无限畅享',
                  position: 'bottom-right'
                })
              }else{
                this.$notify.error({
                  title:'下架',
                  message:'因合作方要求，《'+this.currentSong.name+'》暂时下架 >_<',
                  position: 'bottom-right'
                })
              }
            }
            this.url = res.data[0].url
            this.$nextTick(() => {
              const audio = this.$refs.audio
              audio.play()
            })
          })
          .catch(() => {
            this.$message.error('获取音乐url失败')
          })
    },
    playing (newStatus) {
      this.$nextTick(() => {
        const audio = this.$refs.audio
        newStatus ? audio.play() : audio.pause()
      })
    },
    volume (newVal) {
      this.$refs.audio.volume = newVal / 100
    }
  },
  methods: {
    ...mapActions(['selectPlay', 'pausePlay', 'getSongUrl']),
    ...mapMutations({
      toSetPlayingState: types.SET_PLAYING_STATE,
      toSetCurrentIndex: types.SET_CURRENT_INDEX,
      toSetPlayMode: types.SET_PLAY_MODE,
      toSetPlaylist: types.SET_PLAYLIST,
      toSetCurrentTime: types.SET_CURRENT_TIME
    }),
    handleToggle (status) {
      if (this.currentSong.id) {
        this.toSetPlayingState(status)
      }
    },
    handlePrev () {
      if (this.currentSong.id) {
        let index = this.currentIndex - 1
        if (index === -1) {
          index = this.playList.length - 1
        }
        this.toSetCurrentIndex(index)
        this.toSetPlayingState(true)
      }
    },
    handleNext () {
      if (this.currentSong.id) {
        let index = this.currentIndex + 1
        if (index === this.playList.length) {
          index = 0
        }
        this.toSetCurrentIndex(index)
        this.toSetPlayingState(true)
      }
    },
    toGetMS (time) {
      return getMS(time)
    },
    handleTimeUpdate (e) {
      this.toSetCurrentTime(e.target.currentTime+this.freeStart)
    },
    handleLeftChange (left) {
      if (this.currentSong.id) {
        let seek = left / 400 * this.currentSong.duration
        this.$refs.audio.currentTime = seek
      }
    },
    handleEnd () {
      if (this.mode === playMode.loop) {
        this.$refs.audio.currentTime = 0
        this.$refs.audio.play()
      } else {
        this.handleNext()
      }
    },
    handleMode (mode) {
      this.toSetPlayMode(playMode[mode])
      let list = null
      if (mode === 'random') {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      let index = list.findIndex(item => {
        return item.id == this.currentSong.id
      })
      this.toSetCurrentIndex(index)
      this.toSetPlaylist(list)
    },
    checkMode (mode) {
      return this.mode === playMode[mode];
    },
    handlePlayItem (index) {
      this.selectPlay({
        list: this.sequenceList,
        index
      })
    },
    handlePauseItem () {
      this.pausePlay()
    },
    handleEnterItem (index) {
      this.focusItem = index
    },
    handleLeaveItem () {
      this.focusItem = -1
    },
    handleSongDetail () {
      this.$router.push('song-detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.player-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 72px;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  .audio-avatar {
    flex-shrink: 0;
    width: 60px;
    height: 60px;

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .audio-info {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .audio-name {
      font-weight: bolder;
      margin-bottom: 7px;
    }

    .audio-singer {
      font-size: small;
    }
  }

  .audio-control {
    display: flex;
    align-items: center;
    color: #7868e6;

    .icon-side {
      font-size: 30px;
      cursor: pointer;
    }

    .icon-center {
      font-size: 40px;
      cursor: pointer;
      margin: 0 10px;
    }
  }

  .audio-progress {
    display: flex;
    align-items: center;
    font-size: small;
  }

  .audio-volume {
    display: flex;
    align-items: center;

    .volume-icon {
      margin: 0 20px;
      font-size: large;
    }

    .volume-progress {
      width: 100px;
    }
  }

  .audio-tool {
    display: flex;
    align-items: center;
    width: 60px;
    justify-content: space-between;
    margin: 0 20px;

    .play-mode {
      width: 18px;
      cursor: pointer;
    }

    .play-list {
      width: 18px;
      cursor: pointer;
    }
  }
}

.list-count {
  font-size: smaller;
  color: #909399;
}

.list-content {
  max-height: 600px;
  overflow: scroll;

  .list-item {
    margin: 20px 15px;
    display: flex;

    .item-index {
      width: 40px;
      text-align: center;

      .play-icon {
        font-size: larger;
        color: #7868e6;
        cursor: pointer;
      }
    }

    .item-info {
      margin-left: 15px;
      max-width: 600px;
    }
  }
}


::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, .5);
  background-color: rgba(240, 240, 240, .5);
}
</style>
