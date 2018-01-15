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
      state.signedIn = true
    }
  }
}
const actions = {
  signupAction ({commit, store}, userInfo) {
    const user = new Lean.User()
    return new Promise((resolve, reject) => {
      user.setUsername(userInfo.username)
      user.setPassword(userInfo.password)
      user.signUp()
        .then(newUser => resolve(newUser))
        .catch(err => reject(err))
    })
  },
  loginAction ({commit, store}, userInfo) {
    return new Promise((resolve, reject) => {
      Lean.User
        .logIn(userInfo.username, userInfo.password)
        .then(loggedInUser => {
          resolve(loggedInUser)
          commit(SET_CURRENT_USER, loggedInUser)
        })
        .catch(err => reject(err))
    })
  },
  getCurrentUserAction ({commit, store}) {
    const currentUser = Lean.User.current()
    console.log(currentUser)
    if (currentUser) commit(SET_CURRENT_USER, currentUser)
  }
}

export default {
  state,
  mutations,
  actions
}
