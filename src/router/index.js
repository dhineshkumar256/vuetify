import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/views/page-not-found'
import LoginForm from '../views/LoginForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginForm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
