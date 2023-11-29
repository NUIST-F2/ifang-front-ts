<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Login from "./components/auth/login.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/auth/login">login</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
