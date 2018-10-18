import Vue from 'vue'
import Toasted from 'vue-toasted';

import 'fetch-polyfill'
import Wechat from './lib/share'
import './lib/base.css'
import App from './App.vue'
import router from './router'

Wechat.launch()

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 统计代码
  if (to.path && window._hmt) {
    window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
  }
  next();
});

router.afterEach(() => {
  window.setDetaultShareConfig()
})

Vue.use(Toasted, {
  type: 'info', 
  duration: 6000,
  position: 'top-center',
  fitToScreen: true
})

Vue.prototype.$notify = function ({message = '', type = 'info'}) {
  this.$toasted.show(message, { type })
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
