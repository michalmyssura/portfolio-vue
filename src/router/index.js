import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name:'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')

  },
  {
    path: '/CV',
    name:'CV',
    component: () => import(/* webpackChunkName: "about" */ '../views/CV.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
