import '@/styles/main.scss'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";

import {IMaskComponent, IMaskDirective} from "vue-imask";

const app = createApp(App)
app.use(router)
app.component('imask-input', IMaskComponent)
app.directive('mask', IMaskDirective)

Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  dragToClose: false,
})

app.mount("#app")