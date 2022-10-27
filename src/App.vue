<template>
  <NavBar />

  <ul>
    <li>
      <router-link :to="{name: 'home'}">Home</router-link>
    </li>
    <li>
      <router-link :to="{name: 'login'}">Login</router-link>
    </li>
    <li>
      <router-link :to="{name: 'register'}">Register</router-link>
    </li>
    <!-- <li>
      <router-link :to="{name: 'intro'}">Intro</router-link>
    </li> -->
  </ul>
  <router-view></router-view>
</template>

<script setup>

import NavBar from './components/NavBar.vue';
import { useAuthStore } from './store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

if (authStore.isAuth === false){ 
  router.push({name: 'login'})
}


</script>
<style scoped>
</style>