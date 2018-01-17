<template>
  <div class="wrapper">
    <div class="banner">
      <h1 class="title">dream journal</h1>
    </div>
    <div class="home--grid">
      <dream-list></dream-list>
    </div>
  </div>
</template>
<script>
  import dreamList from './home/DreamList'
  import { mapActions } from 'vuex'

  export default {
    name: 'home',
    components: {
      dreamList
    },
    methods: {
      ...mapActions({
        getCurrentUserAction: 'getCurrentUserAction'
      }),
      openLink (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    mounted () {
      this.getCurrentUserAction()
        .then(currentUser => {
          if (!currentUser) this.$router.replace('welcome')
        })
        .catch(console.error)
    }
  }
</script>
<style lang="scss">
  .banner {
    .title{
      color: #fff;
    }
  }
  .home--grid {
    display: grid;
    grid-template-columns: 400px 1fr 1fr;
    grid-template-rows: 100%;
  }
</style>
