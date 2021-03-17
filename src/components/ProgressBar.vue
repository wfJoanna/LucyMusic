<template>
  <div class="progress-bar">
    <div class="progress-all" @mouseup="handleMouseUp">
      <div class="progress-hot" :style="hotWidth"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProgressBar",
  data () {
    return {}
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hotWidth () {
      return {
        width: this.percent * 400 + 'px'
      }
    }
  },
  methods: {
    handleMouseUp (e) {
      const left = e.offsetX
      this.$emit('leftChange',left)
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 400px;
  height: 5px;
  margin: 0 10px;

  .progress-all {
    width: 100%;
    height: 100%;
    background: #e6e6e6;
    cursor: pointer;

    .progress-hot {
      background: #7868e6;
      height: 100%;
    }
  }
}

</style>
