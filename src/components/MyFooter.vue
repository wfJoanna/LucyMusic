<template>
  <div class="my-footer">
    <div class="foot-title">Lucy Music</div>
    <div class="source-code"><a href="https://github.com/wfJoanna/LucyMusic"><i class="iconfont icon-github"></i></a></div>
    <div class="copyright">Copyright © 2021 <a href="https://github.com/wfJoanna">wfJoanna</a></div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style lang="scss" scoped>
.my-footer {
  background: #161e27;
  height: 172px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  color: #6D7685;
  font-size: smaller;

  .foot-title{
    margin-bottom: 9px;
  }

  .source-code {
    margin-bottom: 9px;
    a {
      color: #6D7685;
      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  }

  .copyright {
    text-align: center;

    a {
      color: #6D7685;
      text-decoration: none;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
