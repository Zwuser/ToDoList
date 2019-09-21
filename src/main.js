/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 21:04:24
 * @LastEditTime: 2019-09-20 14:54:22
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import { routes } from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(router);
const Router = new router({
  routes: routes
})

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
