<template>
<div class="user-detail">{{userId}}</div>
</template>

<script>
export default {
  name: "UserDetail",
  data(){
    return{
      userId:''
    }
  },
  mounted () {
    this.userId=this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>

</style>
