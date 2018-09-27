import Vue from 'vue'
import Notify from 'vue-notifyjs'
import 'vue-notifyjs/themes/material.css'
import 'fetch-polyfill'
import Wechat from './lib/share'
import './lib/base.css'
import App from './App.vue'
import router from './router'

Wechat.launch()

Vue.config.productionTip = false

router.afterEach(() => {
  window.setDetaultShareConfig()
})

Vue.use(Notify, {
  type: 'primary', 
  timeout: 2000,
  horizontalAlign: 'center',
  verticalAlign: 'top'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
