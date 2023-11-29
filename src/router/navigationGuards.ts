import axios from "axios";
import router from "./index";

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !hasToken()) {
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
