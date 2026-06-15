import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: '/',
        component: Main
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