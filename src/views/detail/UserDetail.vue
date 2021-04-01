<template>
<div class="user-detail">{{userId}}</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "UserDetail",
  data(){
    return{
      userId:''
    }
  },
  methods:{
    ...mapActions(['getMyInfo'])
  },
  mounted () {
    this.userId=this.$route.query.id
    this.getMyInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
