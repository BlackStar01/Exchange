import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-vue'
import Vuealidate from '../node_modules/vuelidate'

Vue.config.productionTip = false
Vue.use(Vuealidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


