<template>
    <div class="max-w-2xl mx-auto">
	<div
		class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
		<form @submit.prevent="onSubmit()" class="space-y-6" action="#">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Welcome 😍</h3>
			<div>
				<label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
            </div>
				<div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                </div>
                <div>
					<label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Confirm your password</label>
					<input type="password" name="password" id="confirmpassword" v-model="confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
                </div>

						<button type="submit" class="buttonfill w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Registered? <router-link :to="{name: 'login'}" href="#" class="textfill text-blue-700 hover:underline dark:text-blue-500">Log In</router-link>
						</div>
		</form>
	</div>
</div>
</template>
<script setup>

import { registro } from '../api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref();
const password = ref();
const confirmPassword = ref();
const router = useRouter()

// TODO duda
const onSubmit = async () =>{
	if (password.value === confirmPassword.value){
		const id = await registro(email.value, password.value)
		console.log(id)
		// TODO ARREGLAR EL MENSAJE
		console.log('Confirma tu cuenta en tu bandeja de email')
	}else{
		throw new Error ('Las contraseñas no coinciden')
	}

}

</script>
<style scoped>

.buttonfill{
	background-color: #212936;
}

.textfill{
	color: #8F14E1;
}
</style>