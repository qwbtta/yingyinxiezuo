import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Checkbox,Radio} from 'element-ui';


Vue.use(Checkbox)
Vue.use(Radio)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
