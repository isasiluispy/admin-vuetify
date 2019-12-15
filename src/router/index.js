import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/clientes',
    name: 'clienteList',
    component: () => import('../views/cliente/ClienteList.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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

router.beforeEach((to, from, next) => {
  if (!store.getters['isAuthenticated'] && ['login'].indexOf(to.name) === -1) next({name: 'login'});
  else if (store.getters['isAuthenticated'] && ['login'].indexOf(to.name) > -1) next({name: 'dashboard'});
  else next();
});

export default router
