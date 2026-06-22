import Main from "@/pages/Main.vue";
import Catalogue from "@/pages/Catalogue.vue";
import News from "@/pages/News.vue";
import AdminTrucks from "@/components/AdminTrucks.vue";
import AdminTrucksAddPanel from "@/components/AdminTrucksAddPanel.vue";
import {createRouter, createWebHistory} from "vue-router";
import CarPage from "@/pages/CarPage.vue";
const routes = [
    {
        path: '/',
        component: Main
    },
    {
      path: '/catalogue',
      component: Catalogue
    },
    {
        path: '/news',
        component: News
    },
  {
    path: '/admin-trucks',
    component: AdminTrucks
  },
  {
    path: '/admin-trucks-add-panel',
    component: AdminTrucksAddPanel
  },
  {
    path: '/catalogue/:id',
    component: CarPage,
    props: true
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router