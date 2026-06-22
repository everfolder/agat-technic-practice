import Main from "@/pages/Main.vue";
import Catalogue from "@/pages/Catalogue.vue";
import News from "@/pages/News.vue";
import AdminTrucks from "@/components/AdminTrucks.vue";
import AdminTrucksAddPanel from "@/components/AdminTrucksAddPanel.vue";
<<<<<<< HEAD
import {createRouter, createWebHistory} from "vue-router";
import CarPage from "@/pages/CarPage.vue";
=======
import { createRouter, createWebHistory } from "vue-router";
import AdminMessages from "@/pages/AdminMessages.vue";
import AdminNews from "@/components/News/AdminNews/AdminNews.vue";
import AdminNewsAddPanel from "@/components/News/AdminNews/AdminNewsAddPanel.vue";
>>>>>>> ecaea2a3091f0baff0747baeeafa99b37dd6429e
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
<<<<<<< HEAD
    path: '/catalogue/:id',
    component: CarPage,
    props: true
  },
=======
    path: '/admin-messages',
    component: AdminMessages
  },
  {
    path: '/admin-news',
    component: AdminNews
  },
  {
    path: '/admin-news-add-panel',
    component: AdminNewsAddPanel
  },

>>>>>>> ecaea2a3091f0baff0747baeeafa99b37dd6429e
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router