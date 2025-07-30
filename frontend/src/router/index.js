import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import serverlist from '@/views/serverlist.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/servers",
      name: "serverlist",
      component: serverlist
    }
  ],
})

export default router
