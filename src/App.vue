<template>
  <div id="app">
    <navBar class="navBar"></navBar>
    <div class="article" style="position: relative;">
      <indexPage></indexPage>
      <introPage></introPage>
      <historyPage></historyPage>
      <memoryPage>?</memoryPage>
      <problemPage></problemPage>
      <endPage></endPage>
    </div>

  </div>
</template>
<script>
  import navBar from "@/views/navBar/index"
  import indexPage from '@/views/Index/index'
  import introPage from '@/views/intro/index'
  import historyPage from '@/views/history/index'
  import memoryPage from '@/views/memory/index'
  import problemPage from '@/views/problem/index'
  import endPage from '@/views/end/index'
  export default {
    name: "App",
    components: {
      navBar,
      indexPage,
      introPage,
      historyPage,
      memoryPage,
      problemPage,
      endPage
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    margin: 0 auto;
    width: 70%;
    height: 100vh;
    min-width: 768px;
    font-family: SimHei;

  }

</style>
