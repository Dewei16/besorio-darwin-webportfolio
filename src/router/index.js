import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlogProjects from "../views/BlogProjects.vue";
import BlogProject from "../views/BlogProject.vue"; // if you created it

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog-projects", name: "BlogProjects", component: BlogProjects },
  { path: "/blog-projects/:slug", name: "BlogProject", component: BlogProject, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  // ✅ makes hash links work across pages
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
