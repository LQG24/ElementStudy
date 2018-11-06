import Vue from 'vue';
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

import { Button, Select } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
