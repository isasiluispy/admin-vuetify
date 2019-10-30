import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import store from '../store'
import {AUTH_IS_AUTHENTICATED} from "../store/types/auth"; // your vuex store

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters[AUTH_IS_AUTHENTICATED]) {
    next();
    return
  }
  next({name: 'dashboard'})
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters[AUTH_IS_AUTHENTICATED]) {
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
