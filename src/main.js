import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import http from './axios/http'
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import {Toast} from 'vant'
Vue.use(Vant);

Vue.prototype.$http=http
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
