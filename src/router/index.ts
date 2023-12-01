import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/auth/login.vue";
import pages from "../components/auth/page.vue";
import shop from "../components/auth/shopping-page.vue"



const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: Login,
    },
    {
      path:"/user/profile",
      name:"profile",
      component:pages,
      meta: { requiresAuth: true }
    },
    {
      path:"/shop/shopping",
      name:"shopping page",
      component:shop,
      meta: { requiresAuth: true }
    }

  ],
});

export default router;
