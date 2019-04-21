import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const Search = resolve => require(['@modules/Search.vue'], resolve)
import Search from './modules/Search.vue'

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name:'search', component: Search },
    ]
  })
}