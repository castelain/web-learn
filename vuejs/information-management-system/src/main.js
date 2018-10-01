// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import App from './App'
import MyUl from '@/components/Common/My-Ul/My-Ul'
import MyLi from '@/components/Common/My-Li/My-Li'
import NavBar from '@/components/Common/NavBar/NavBar'
import Comment from '@/components/Common/Comment/Comment'
import Moment from 'moment'
import VuePreview from 'vue-preview'
import { Toast, Indicator } from 'mint-ui'

Vue.config.productionTip = false
Vue.use(MintUI)

Vue.component('my-ul', MyUl)
Vue.component('my-li', MyLi)
Vue.component('nav-bar', NavBar)
Vue.component('comment', Comment)

// 配置拦截器
Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP = true
Vue.http.interceptors.push(function (request, next) {
  console.log('正在请求')
  Indicator.open('加载中...')
  next(function (response) {
    // console.log(response.data)
    console.log('响应完成')
    Indicator.close()
  })
})

/* 定义用于格式化时间的全局过滤器使用的moment方法 */
// Vue.prototype.$moment = moment
Vue.use(Moment)
Moment.locale('zh-cn')
Vue.filter('formatTime', function (time, formatStr) {
  return Moment(time).format(formatStr)
})
Vue.filter('beforeTime', function (time) {
  return Moment(time).fromNow()
})

Vue.use(VuePreview)

Vue.prototype.$toast = Toast

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
