<template>
    <div class="mx-auto container py-20 px-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="rounded">
                <div
                    class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div class="task">
                        <h4 class="text-gray-800 font-bold mb-3">{{props.task.title}}</h4>
                        <p>{{props.task.description}}</p>
                    </div>
                    <div>
                        <p class="text-sm">{{date}}</p>
                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                            <!-- CHECK DONE -->
                            <button @click="checkTask()" id="check-note"
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                aria-label="check note" role="button">
                                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                                        fill="white"></path>
                                </svg> </button>
                            <!-- MODIFICAR -->
                            <button
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" id="edit-note"
                                aria-label="edit note" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                </svg>
                            </button>
                            <!-- BORRAR -->
                            <button @click="eliminar()"
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                aria-label="delete note" role="button">
                                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        fill="white"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>

import { defineProps, computed } from 'vue';
import { usTaskStore } from '../store/task';
import { deleteTask } from '../api';

const taskStore = usTaskStore();
const props = defineProps({
    task: Object
})

const eliminar = async () =>{
    const response = await deleteTask(props.task.id) // esto borra de supabase
    taskStore.deleteTask(props.task.id) // esto borra de la web
}

const checkTask = () =>{
    const checkBoton = document.querySelector('.w-full')
    checkBoton.classList.toggle('chequeado')
}

    const editar = () =>{

    }
const date = computed(() => props.task.created_at.toLocaleString())
</script>
<style scoped>

.chequeado{
    background-color: blueviolet;
}

</style>