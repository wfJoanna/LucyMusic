<template>
  <div id="app">
    <my-header v-if="!$route.meta.isLogin"></my-header>
    <router-view/>
    <player-bar v-if="!$route.meta.isLogin"></player-bar>
    <my-footer v-if="!$route.meta.isLogin"></my-footer>
  </div>
</template>

<script>
import ChangeTheme from './utils/ChangeTheme.js'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import PlayerBar from './components/PlayerBar'

export default {
  components: { PlayerBar, MyFooter, MyHeader },
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
@import './styles/iconfont.css';

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
