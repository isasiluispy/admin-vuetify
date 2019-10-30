import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import axios from 'axios'


const baseAxios = axios.create({
  baseURL: 'http://localhost:8000',
});

Vue.prototype.$http = baseAxios;

Vue.config.productionTip = false;

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
