import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import Login from './components/auth/login.vue'
import page from './components/auth/page.vue'
import 'ant-design-vue/dist/reset.css'
import b from './router/navigationGuards'

const a = b;//激活导航守卫
const app = createApp(App).use(Antd).use(router)
app.mount('#app')

