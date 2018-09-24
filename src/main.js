import Vue from 'vue'
import 'fetch-polyfill'

// import Wechat from './lib/share'
import './lib/base.css'
import App from './App.vue'
import router from './router'

// Wechat.launch()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
