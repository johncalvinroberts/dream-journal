import Lean from 'leancloud-storage'
import {appId, appKey} from '../../../../app_keys'

import { LOGIN, SIGNUP, LOGOUT, SET_CURRENT_USER } from '../mutation-types' // eslint-disable-line

Lean.init({appId, appKey})

const state = {
  user: {},
  signedIn: false
}
const mutations = {
  [SET_CURRENT_USER]: (state, result) => {
    if (result) {
      state.user = result.attributes
      state.user.id = result.id
    }
  }
}
const actions = {
  signupAction ({commit, store}, userInfo) {
    const user = new Lean.User()
    user.setUsername(userInfo.username)
    user.setPassword(userInfo.password)
    user.signup()
      .then(newUser => console.log(newUser))
      .catch(console.error)
  },
  getCurrentUserAction ({commit, store}) {
    const currentUser = Lean.user.current()
    if (currentUser) commit(SET_CURRENT_USER, currentUser)
  }
}

export default {
  state,
  mutations,
  actions
}
