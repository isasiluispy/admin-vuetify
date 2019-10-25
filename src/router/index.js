import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
];

const router = new VueRouter({
  routes
});

export default router
