import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Guidance from '@/views/Guidance.vue'
import Challenge from '@/views/Challenge.vue'
import Finish from '@/views/Finish.vue'
import End from '@/views/End.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/guidance',
    name: 'guidance',
    component: Guidance,
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: Challenge,
  },
  {
    path: '/finish',
    name: 'finish',
    component: Finish,
  },
  {
    path: '/end',
    name: 'end',
    component: End,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
})

export default router
