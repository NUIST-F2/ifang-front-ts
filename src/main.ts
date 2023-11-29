import './assets/main.css'

import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import Login from './components/auth/login.vue'



const app = createApp(App).use(Antd).use(router)
app.mount('#app')

