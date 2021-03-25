<template>
  <div class="layout" :style="{backgroundImage:'url('+pic+')'}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "layout",
  data () {
    return {
      pic: require('../../assets/lucybg.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  padding-top: 70px + 20px;
  min-height: calc(100vh - 100px);
  padding-left: 70px;
  padding-right: 70px;

  background: no-repeat fixed right;
  background-size: 280px;
}
</style>
