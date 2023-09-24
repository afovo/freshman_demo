import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import store from './store'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import '@/assets/font/font.css'
// import '@arco-themes/vue-zhicheng'



const app = createApp(App);
app.use(store);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
axios.defaults.baseURL = 'http://localhost:8000/api'