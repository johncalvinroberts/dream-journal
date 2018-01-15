<template>
  <div class="wrapper">
    <div class="signup--outer">
      <div class="login--title">sign up</div>
      <div class="signup--form">
        <form>
          <mu-text-field v-model="user.username"
                        hintText="create a username"
                        :errorText="errors.usernameError"/><br/>
          <mu-text-field v-model="user.password"
                          hintText="create a password"
                          :errorText="errors.passwordError"/><br/>
          <mu-raised-button class="intro-button" label="sign me up" @click="submitSignup"/>
          <mu-raised-button class="intro-button" label="get current user" @click="checkCurrentUser"/>
        </form>
      </div>
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
          password: ''
        },
        errors: {
          passwordError: '',
          usernameError: ''
        }
      }
    },
    components: {},
    methods: {
      ...mapActions({
        signupAction: 'signupAction',
        loginAction: 'loginAction',
        getCurrentUserAction: 'getCurrentUserAction'
      }),
      submitSignup () {
        this.signupAction(this.user)
          .then(res => this.loginAction(this.user))
          .then(res => console.log(res))
          .catch(console.error)
      },
      checkCurrentUser () {
        this.getCurrentUserAction()
      }
    },
    computed: {}
  }
</script>
<style lang="scss">
.signup--outer{
  color: #fff;
}
</style>
