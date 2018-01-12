import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const state = {
  isLoading: false,
  isBottom: false
}

export default new Vuex.Store({
  modules,
  state,
  strict: process.env.NODE_ENV !== 'production'
})
