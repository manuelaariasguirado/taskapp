<template>
  <ul>
    <!-- TODO ESTO LO TENGO QUE BORRAR CUANDO TERMINE -->
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

// import { onMounted } from 'vue';
// import { useRouter } from 'vue-router';

// const router = useRouter()

// onMounted(async() => {
//   router.push({name: 'login'})
// }

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