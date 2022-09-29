import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/vue-history-home'
  },
  {
    path: '/vue-history-home',
    name: 'vue-history-home',
    component: HomeView
  },
  {
    path: '/vue-history-about',
    name: 'vue-history-about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

export default routes
