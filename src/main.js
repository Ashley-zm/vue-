import Vue from 'vue'
import App from './App.vue'
import '@/assets/icon/iconfont.css'
// symbol 引用
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
//设置全局icon样式
import '@/assets/iconGloble.css'

import '@/assets/icons'

Vue.config.productionTip = false
// 引入路由
import router from './router'
new Vue({
  render: h => h(App),
  // 注册路由：写法省略了k：v的方式，直接写k（router小写）
  router
}).$mount('#app')
