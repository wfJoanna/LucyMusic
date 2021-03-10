<template>
  <div class="home">
    <banner></banner>
    <personalized-list></personalized-list>
    <personalized-song></personalized-song>
  </div>
</template>

<script>
import PersonalizedList from '../../components/PersonalizedList'
import PersonalizedSong from '../../components/PersonalizedSong'
import Banner from '../../components/Banner'

export default {
  name: "home",
  components: { Banner, PersonalizedSong, PersonalizedList },
}
</script>

<style lang="scss" scoped>
</style>
