<template>
  <div class="wrapper">
    <div class="banner">
      <h1 class="title">dream journal</h1>
    </div>
    <dream-list></dream-list>
  </div>
</template>
<script>
  import dreamList from './home/DreamList'

  export default {
    name: 'landing-page',
    components: {
      dreamList
    },
    methods: {
      openLink (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    mounted () {
      const signedIn = this.$store.state.User.signedIn
      if (signedIn) {
        console.log(signedIn)
      } else {
        this.$router.replace('welcome')
      }
    }
  }
</script>
<style lang="scss">
  .banner {
    .title{
      color: #fff;
    }
  }
</style>
