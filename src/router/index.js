import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails
  }
]

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes
})

export default router
