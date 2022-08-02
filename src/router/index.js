import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detailseite from '../views/Detailseite.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailpage',
    name: 'Detailseite',
    component: Detailseite
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes
})

export default router
