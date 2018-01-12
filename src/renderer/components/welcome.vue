<template>
  <div class="wrapper">
    <div class="intro container">
      <div class="intro--text">
        Welcome to dream journal. A place to record and track your dream activity. Self explanatory really.
      </div>
      <div class="intro--buttons">
        <mu-raised-button class="intro-button" label="I Have An Account" @click="navToLogin"/>
        <mu-raised-button class="intro-button" label="I Do Not Have An Account" @click="navToSignup"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'landing-page',
    components: {},
    methods: {
      navToLogin () {
        this.$router.replace('login')
      },
      navToSignup () {
        this.$router.replace('signup')
      }
    },
    mounted () {
      console.log('welcome')
    }
  }
</script>
<style lang="scss">
  .container{
    max-width: 400px;
    margin: 0 auto;
  }
  .intro--text{
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .intro--buttons{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 60px;
    .intro-button{
      margin: 12px;
    }
  }
</style>
