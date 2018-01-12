<template>
  <div class="wrapper">
    <div class="login--outer">
      <div class="login--title">signup</div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'signup',
    data () {
      return {
        user: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    components: {},
    methods: {
      ...mapActions({
        signupAction: 'signupAction'
      })
    },
    computed: {}
  }
</script>
<style lang="scss">
</style>
