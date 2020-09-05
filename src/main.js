import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//$bus：事件总线，Vue实例也是
Vue.prototype.$bus = new Vue()

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
