import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guide',
      name: 'guide',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GuideView.vue')
    },
    {
      path: '/accept',
      name: 'accept',
      component: () => import('../views/AcceptcCallengeView.vue')
    },
    {
      path: '/complete/:id?',
      name: 'complete',
      component: () => import('../views/CompleteView.vue')
    }
  ]
})

export default router
