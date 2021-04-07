<template>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "TestCookie",
  computed:{
    ...mapState(['cookie'])
  },
  mounted () {
    this.$api.testCookie(encodeURIComponent(this.cookie))
  }
}
</script>

<style scoped>

</style>
