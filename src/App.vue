<template>
  <h1>task app</h1>
  <ul>
    <li>
      <router-link :to="{name: 'home'}">Home</router-link>
    </li>
    <li>
      <router-link :to="{name: 'login'}">Login</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.VITE_SUPABASE_URL, import.meta.VITE_SUPABASE_KEY)
console.log(supabase)

</script>
<style scoped>
</style>