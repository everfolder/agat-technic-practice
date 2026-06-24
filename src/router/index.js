import Main from "@/pages/Main.vue";
import Catalogue from "@/pages/Catalogue.vue";
import News from "@/pages/News.vue";
import AdminTrucks from "@/components/AdminTrucks.vue";
import AdminTrucksAddPanel from "@/components/AdminTrucksAddPanel.vue";
import {createRouter, createWebHistory} from "vue-router";
import CarPage from "@/pages/CarPage.vue";
import AdminMessages from "@/pages/AdminMessages.vue";
import AdminNews from "@/components/News/AdminNews/AdminNews.vue";
import AdminNewsAddPanel from "@/components/News/AdminNews/AdminNewsAddPanel.vue";
import AdminCarEdit from "@/pages/AdminCarEdit.vue";
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
  {
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
  {
    path: '/admin-trucks/:id',
    component: AdminCarEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router