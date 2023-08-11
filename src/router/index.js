import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AuthPage from '../pages/AuthPage.vue'
import MainLayout from '../layout/mainLayout.vue'
import SignUp from '../pages/SignUp.vue'

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
      path: '/signup',
      name: 'signup',
      meta: {
        layout: MainLayout
      },
      component: SignUp
    },
    
    
    
  ]
})

export default router
