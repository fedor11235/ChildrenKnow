// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import VueRouter from 'vue-router'
import router from '@/router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  router,
  template: '<App/>'
})
