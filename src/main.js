import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueGtag from "vue-gtag";

createApp(App).use(router).use(VueGtag, {
    config: {id: 'G-FW8QJFV82L'}
}, router).mount('#app')
