import Vue from 'vue';
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

import { Button, Select } from 'element-ui';
import VueRouter from 'vue-router'
import routers from './routers'


Vue.use(VueRouter);
//2. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode:"history", //去除#
  routes:routers  
})


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router, //3. 创建和挂载根实例。
}).$mount('#app')
