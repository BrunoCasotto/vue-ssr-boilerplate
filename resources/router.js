import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Search = () => import('@modules/Search.vue')

export const createRouter = () => {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      { path: '/', name:'home', component: Search },
    ]
  })
}