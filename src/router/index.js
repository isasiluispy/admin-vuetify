import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import store from '../store'
import {Types as authTypes} from "../store/modules/auth/types"; // your vuex store

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters[authTypes.getters.IS_AUTENTICATED]) {
    next();
    return
  }
  next({name: 'dashboard'})
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters[authTypes.getters.IS_AUTENTICATED]) {
    next();
    return
  }
  next({name: 'login'})
};

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '*',
    redirect: {name: 'dashboard'}
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
