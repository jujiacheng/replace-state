import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scale: 100
  },
  mutations: {
    newSacle (state, scale) {
      // mutate state
      state.scale = scale
    }
  },
  actions: {}
})
