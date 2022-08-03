import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favourite from '../views/Favourite.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourite',
    name: 'Favoriten',
    component: Favourite
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes
})

export default router
