import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import cliente from "./modules/cliente";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    cliente
  }
})
