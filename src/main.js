import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import toast from "components/common/toast"

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

//$bus：事件总线，Vue实例也是
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);

FastClick.attach(document.body)

Vue.use(VueLazyload)

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app');
