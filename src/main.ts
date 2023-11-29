import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import Login from './components/auth/login.vue'
import page from './components/auth/page.vue'

const pages = createApp(page).use(Antd).use(router)
const app = createApp(App).use(Antd).use(router)
pages.mount('#app')

