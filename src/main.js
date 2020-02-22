// 3rd party library
import Vue from 'vue'
// antd
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
// APP
import App from './App.vue'
import router from './routers'
import store from './stores'
// utils
import { comma } from './utils'

Vue.use(Antd)
Vue.filter('comma', comma)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
