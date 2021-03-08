<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ChangeTheme from './utils/ChangeTheme.js'

export default {
  methods: {
    handleLoad () {
      ChangeTheme.initCss().then(() => {
        ChangeTheme.changeTheme('#4a47a3');
      }).catch()
    }
  },
  created () {
    window.addEventListener('load', this.handleLoad)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
