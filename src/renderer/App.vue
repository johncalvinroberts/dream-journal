<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'dream-journal'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import "./assets/muse-theme-overrides";
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing:antialiased;
  }

  .wrapper {
    background: linear-gradient(rgba(50, 24, 92, 0.8) 0%, rgba(141, 115, 185, 1) 60%);
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    resize: vertical;
    overflow: auto;
  }
</style>
