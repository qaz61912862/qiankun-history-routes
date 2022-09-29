import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import startQiankun from '@/utils/registerMicroApps'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const isDev = process.env.NODE_ENV === 'development'
// 主：http://172.16.101.246:9098/test2/main/
// vue-hash：http://172.16.101.246:9098/test2/main/vue-hash/#/vue-hash-home
// vue-history：http://172.16.101.246:9098/test2/main/vue-history/vue-history-home
startQiankun([
  {
    name: 'vue-hash',
    entry: isDev ? '//localhost:8081' : '/test2/vue-hash/index.html',
    container: '#subContainer',
    activeRule: isDev ? '/vue-hash' : '/test2/main/vue-hash/',
  },
  {
    name: 'vue-history',
    entry: isDev ? '//localhost:8082' : '/test2/vue-history/index.html',
    container: '#subContainer',
    activeRule: isDev ? '/vue-history' : '/test2/main/vue-history',
  }
])