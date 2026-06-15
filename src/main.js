import '@/styles/main.scss'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";

Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  dragToClose: false,
  Panzoom: {
    touch: false,
  },
})

createApp(App)
    .use(router)
    .mount('#app')


