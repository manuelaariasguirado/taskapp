<template>
    <!-- FORMULARIO -->
<div class="max-w-2xl mx-auto">
	<div
		class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
		<form @submit.prevent="onLogin()" class="space-y-6" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Hi there!👋</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                </div>
						<button type="submit" class="buttonfill w-full text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <router-link :to="{name: 'register'}" href="#" class="textfill text-blue-700 hover:underline dark:text-blue-500">Create
								account</router-link>
						</div>
		</form>
	</div>

</div>
</template>
<script setup>


import { login } from '../api';
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const email = ref();
const password = ref();
const authStore = useAuthStore();
const router = useRouter()

const onLogin = async () =>{
    const id = await login(email.value, password.value)
	authStore.login(id)
	console.log(id)
	router.push({name: 'home'})
}

</script>
<style scoped>


</style>