import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'

if (process.env.NODE_ENV !== 'production') require('./mock')

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

Vue.use(ElementUI)

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
