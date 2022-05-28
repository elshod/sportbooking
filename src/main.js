import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

createApp(App).use( VueSplide ).use(store).use(router).mount('#app')
