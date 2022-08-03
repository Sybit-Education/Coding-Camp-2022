import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'
import UeberUns from '../views/UeberUns.vue'
import EventDetails from '../views/EventDetails.vue'

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
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails
  },
  {
    path: '/ueberuns',
    name: 'UeberUns',
    component: UeberUns
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes
})

export default router
