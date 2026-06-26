import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Catalogue from "@/pages/Catalogue.vue";
import News from "@/pages/News.vue";
import AdminCarEdit from "@/pages/AdminCarEdit.vue";
import AdminTrucks from "@/components/AdminPanels/AdminCatalogue/AdminTrucks.vue";
import AdminTrucksAddPanel from "@/components/AdminPanels/AdminCatalogue/AdminTrucksAddPanel.vue";
import CarPage from "@/pages/CarPage.vue";
import AdminMessages from "@/components/AdminPanels/AdminMessages/AdminMessages.vue";
import AdminNews from "@/components/AdminPanels/AdminNews/AdminNews.vue";
import AdminNewsAddPanel from "@/components/AdminPanels/AdminNews/AdminNewsAddPanel.vue";
import AdminPanel from "@/pages/AdminPanel.vue";
import About from "@/pages/About.vue";
import Contacts from "@/pages/Contacts.vue";
import Service from "@/pages/Service.vue";

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
  },
  {
    path: '/admin-panel',
    component: AdminPanel
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/service',
    component: Service
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