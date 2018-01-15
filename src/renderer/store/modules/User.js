import AV from 'leancloud-storage/dist/av-es6'
import {appId, appKey} from '../../../../app_keys'

import { LOGIN, SIGNUP, LOGOUT, SET_CURRENT_USER } from '../mutation-types' // eslint-disable-line

AV.init({appId, appKey})

const state = {
  user: {}
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
    const user = new AV.User()
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
      AV.User
        .logIn(userInfo.username, userInfo.password)
        .then(loggedInUser => {
          resolve(loggedInUser)
          commit(SET_CURRENT_USER, loggedInUser)
        })
        .catch(err => reject(err))
    })
  },
  getCurrentUserAction ({commit, store}) {
    const currentUser = AV.User.current()
    if (currentUser) commit(SET_CURRENT_USER, currentUser)
    return currentUser
  }
}

export default {
  state,
  mutations,
  actions
}
