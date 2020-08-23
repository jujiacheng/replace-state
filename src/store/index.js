import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scale: 100,
    iframeList: [
      {
        id: 1
      }
    ]
  },
  mutations: {
    newSacle (state, scale) {
      // mutate state
      state.scale = scale
    },
    newiframeList (state) {
      const list = [...state.iframeList]
      list[list.length] = { id: 13123 }
      state.iframeList = list
    }
  },
  actions: {},
  getters: {
    iframeList (state) {
      return state.iframeList
    }
  }
})
