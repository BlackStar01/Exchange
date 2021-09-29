import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
  {
    path: '/E-change',
    name: 'E-change',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/E-change.vue')
  },

  {
    path: '/Traduction',
    name: 'Traduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/Traduction.vue')
  },

  {
    path: '/Transcription',
    name: 'Transcription',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transcription.vue')
  },

  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },

  // Redirection vers la page Admin si les coordonnées collent

  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
