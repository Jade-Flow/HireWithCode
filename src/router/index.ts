import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/App.vue'
import Guidance from '@/views/Guidance.vue'
import Challenge from '@/views/Challenge.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/guidance',
    name: 'Guidance',
    component: Guidance,
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: Challenge,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
})

export default router
