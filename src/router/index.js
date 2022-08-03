import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  },
  {
    path: '/ueber-uns',
    name: 'Über uns',
    component: 'Über uns'
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes
})

export default router
