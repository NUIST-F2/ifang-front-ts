<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/auth/login.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/auth/login">Login</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
