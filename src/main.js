import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store/index.js';
import VueToast from 'vue2-toast';
import 'vue2-toast/lib/toast.css';
Vue.use(VueToast, {
  type: 'center'
})
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
