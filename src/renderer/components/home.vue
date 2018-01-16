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
</style>
