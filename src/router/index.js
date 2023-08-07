import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AuthPage from '../pages/AuthPage.vue'
import MainLayout from '../layout/mainLayout.vue'
import EnterCode from '../pages/EnterCode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      meta: {
        layout: MainLayout
      },
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        layout: MainLayout
      },
      component: AuthPage
    },
    {
      path: '/entercode',
      name: 'entercode',
      meta: {
        layout: MainLayout
      },
      component: EnterCode
    }
    
  ]
})

export default router
