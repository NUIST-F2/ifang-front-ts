import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import Login from 'src/components/auth/login.vue'
const app = createApp(App)
const login = createApp(Login)
login.use(Antd)
app.use(router)

app.mount('#app')
