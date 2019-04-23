import Vue from 'vue'
import Vuex from 'vuex'
import Utils from './modules/utils'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store({
  modules: {
    Utils,
  },
})
