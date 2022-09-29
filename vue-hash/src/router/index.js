import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/vue-hash-home'
  },
  {
    path: '/vue-hash-home',
    name: 'vue-hash-home',
    component: HomeView
  },
  {
    path: '/vue-hash-about',
    name: 'vue-hash-about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

export default routes