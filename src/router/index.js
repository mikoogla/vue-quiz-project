import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "../views/ContactPage.vue";
import LandingPage from "../views/LandingPage.vue";
import MainPage from "../views/MainPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/landing" },
    { path: "/landing", component: LandingPage },
    { path: "/quiz", component: MainPage },
    { path: "/contact", component: ContactPage },
    { path: "/:notFound(.*)", component: NotFoundPage },
  ],
});

export default router;
