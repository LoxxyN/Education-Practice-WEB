import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/profile', name: 'UserProfilePage', component: () => import('../pages/UserProfilePage.vue') },
  ],
})

export default router
