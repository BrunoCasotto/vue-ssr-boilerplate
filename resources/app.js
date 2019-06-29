import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Main from './Main.vue'
import { createStore } from './store'
import { createRouter } from './router'

export const createApp = () => {
  const store = createStore()
  const router = createRouter()

  sync(store, router)

  const app = new Vue({
    router,
    render: h => h(Main),
    store,
  })

  return { app, store, router }
}