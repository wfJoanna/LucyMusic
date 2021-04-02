<template>
  <div class="progress-bar">
    <div class="progress-all" @mouseup="handleMouseUp">
      <div class="progress-hot" :style="hotWidth"></div>
      <div class="free-start" :style="startLeft"></div>
      <div class="free-end" :style="endLeft"></div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "ProgressBar",
  data () {
    return {}
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(['currentSong']),
    hotWidth () {
      return {
        width: this.percent * 400 + 'px'
      }
    },
    startLeft () {
      return {
        left: this.start / this.currentSong.duration * 400 + 'px',
        top: 0,
        display:this.getVisible()
      }
    },
    endLeft () {
      return {
        left: this.end / this.currentSong.duration * 400 + 'px',
        top: 0,
        display:this.getVisible()
      }
    }
  },
  methods: {
    handleMouseUp (e) {
      if(this.end-this.start===0){
        const left = e.offsetX
        this.$emit('leftChange', left)
      }else{
        if (e.offsetX > this.start / this.currentSong.duration * 400 && e.offsetX < this.end / this.currentSong.duration * 400) {
          const left = e.offsetX - this.start / this.currentSong.duration * 400
          this.$emit('leftChange', left)
        }
      }
    },
    getVisible(){
      if(this.end-this.start===0){
        return 'none'
      } else {
        return 'block'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 400px;
  height: 5px;
  margin: 0 10px;

  &:hover{
    height: 10px;
  }

  .progress-all {
    width: 100%;
    height: 100%;
    background: #e6e6e6;
    cursor: pointer;
    position: relative;
    border-radius: 5px;

    .progress-hot {
      background: #7868e6;
      height: 100%;
      border-radius: 5px 0 0 5px;
    }

    .free-start {
      height: 100%;
      width: 2px;
      background: white;
      position: absolute;
    }

    .free-end {
      height: 100%;
      width: 2px;
      background: white;
      position: absolute;
    }
  }
}

</style>
