import { createRouter, createWebHistory } from 'vue-router'
import HomerIframe from '../components/HomerIframe.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/payments',
    name: 'Homer',
    component: HomerIframe
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
