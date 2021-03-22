<template>
  <div class="banner">
    <el-carousel v-if="bannersInit" :interval="4000" type="card">
      <el-carousel-item v-for="item in banners" :key="item.imageUrl">
        <img :src="item.imageUrl" :alt="item.typeTitle"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Banner",
  data () {
    return {
      banners: []
    }
  },
  computed: {
    bannersInit () {
      return this.banners.length
    }
  },
  methods: {
    ...mapActions(['getBanners']),
    getBanner () {
      this.getBanners()
          .then(res => {
            this.banners = res.banners
          })
          .catch(() => this.$message.error('获取轮播图出错'))
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
