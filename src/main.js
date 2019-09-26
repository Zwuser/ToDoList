/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 21:04:24
 * @LastEditTime: 2019-09-24 18:07:33
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import { routes } from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Vuerouter);
const router = new Vuerouter({
  routes,
  mode: 'history'
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
