import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import {Types as authTypes} from './store/modules/auth/types'

Vue.config.productionTip = false;

store.dispatch(authTypes.actions.SET_TOKEN);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
