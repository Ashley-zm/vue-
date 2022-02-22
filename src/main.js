import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由
import router from './router'
new Vue({
  render: h => h(App),
  // 注册路由：写法省略了k：v的方式，直接写k（router小写）
  router
}).$mount('#app')
