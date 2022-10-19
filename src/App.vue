<template>
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
  </ul>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js'
// import { login, newtask } from './api'


//   TODO IDENTIFICAR EL RESULT Y RETORCAR LO QUE NOS INTERESA
// console.log(response)



// onMounted(async() => {
//   const id = await login('m.manuelaarias@gmail.com', '1234567');
//   newTask({
//     user_id: id,
//     title: 'Titulo',
//     description: 'Descripcion de otro task'
//   })

// })

</script>
<style scoped>
</style>