import axios from "axios";
import router from "./index";
router.beforeEach((to, from, next) => {
  console.log(to.meta.requiresAuth)
  console.log(hasToken())
  if (to.meta.requiresAuth && !hasToken()) {

    window.alert('您未登录，即将离开当前页面，跳转至登录页面');
    // 如果需要进行登录验证且没有 token，重定向到登录页面或其他逻辑
    next("/auth/login");
  } else {
    // 允许进入路由
    next();
  }
});

function hasToken() {
  const token = localStorage.getItem("token"); // 从 localStorage 中获取 token
  if (!token) {
    return false;
  } else {
    return true;
  }
}
export default{

  data() {
    return {
      count: 1
    }
  },
}