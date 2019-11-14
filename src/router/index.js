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
    path: '/proveedores',
    name: 'proveedorList',
    component: () => import('../views/ProveedorList.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/proveedores/nuevo',
    name: 'proveedorCreate',
    component: () => import('../views/ProveedorEdit.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/reactivos',
    name: 'reactivoList',
    component: () => import('../views/ReactivoList.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/reactivos/nuevo',
    name: 'reactivoCreate',
    component: () => import('../views/ReactivoEdit.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/movimientos',
    name: 'movimientoList',
    component: () => import('../views/MovimientoList.vue'),
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
