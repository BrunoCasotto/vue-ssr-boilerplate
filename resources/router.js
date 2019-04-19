import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Search = resolve => require(['@modules/Search.vue'], resolve)

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/search', name:'search', component: Search },
    ]
  })
}