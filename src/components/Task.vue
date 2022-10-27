<template>
    <div class="mx-auto container px-6 m-auto">
        <div class="sizetask grid gap-6">
            <div class="rounded">
                <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
                    :class="{chequeado: !props.task.isCompleted, completado: props.task.isCompleted}">
                    <div v-if="!show" class="task">
                        <h4 class="text-gray-800 font-bold mb-3">{{props.task.title}}</h4>
                        <p>{{props.task.description}}</p>
                    </div>
                    <form @submit.prevent="editTask()" v-else action="">
                        <input v-model="props.task.title" placeholder="" type="text" id="">
                            <textarea v-model="props.task.description" name="" id="" cols="30" rows="4"></textarea>
                            <button class="save" type="submit">Save</button>
                    </form>
                    <div>
                        <div class="fechaeicons flex items-center text-gray-800 dark:text-gray-100 gap-1">
                            <div class="flex items-center justify-between datestyle">
                                <p class="text-sm">{{date}}</p>
                            </div>
                            <div class="botoncitos flex items-center gap-1.5">
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
                                <button @click="onClick()" 
                                    class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    id="edit-note" aria-label="edit note" role="button">
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
                                <!-- <input @change="" type="color" v-model="props.task.color"> -->
                                <div class="botonColor bg1" @click="changeColor('#FCF6BD')"></div>
                                <div class="botonColor bg2" @click="changeColor('#D0F4DE')"></div>
                                <div class="botonColor bg3" @click="changeColor('#A9DEF9')"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>

import { defineProps, computed, ref } from 'vue';
import { usTaskStore } from '../store/task';
import { deleteTask, updateTask } from '../api';

const show = ref(false)

const taskStore = usTaskStore();
const props = defineProps({
    task: Object
})

const eliminar = async () => {
    const response = await deleteTask(props.task.id) // esto borra de supabase
    taskStore.deleteTask(props.task.id) // esto borra de la web
}


const checkTask = () => {
    props.task.isCompleted = !props.task.isCompleted
    updateTask(props.task.id, { isCompleted: props.task.isCompleted })
}

const editTask = () => {
    updateTask(props.task.id, {title: props.task.title, description: props.task.description})
show.value = !show.value
}

const onClick = () => {
    show.value = !show.value
}

const date = computed(() => {
    const fecha = new Date(props.task.created_at)
    return fecha.toLocaleDateString();
})

const changeColor = (color) => {
    props.task.color = color;
    updateTask(props.task.id, { color: props.task.color })
}

</script>
<style scoped>
.botonColor {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 1px solid #9DA3AE;
}

.bg1 {
    background-color: #FCF6BD;
}

.bg2 {
    background-color: #D0F4DE;
}

.bg3 {
    background-color: #A9DEF9;
}

.chequeado {
    background-color: v-bind('props.task.color');
}

/* TODO METER TODOS LOS ESTILOS QUE QUIERA AQUI */
.completado {
    background-color: v-bind('props.task.color');
    opacity: 0.4;
}

.sizetask {
    width: 350px;
}

.botoncitos {
    /* background-color: red; */
}

.fechaeicons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.datestyle {
    /* background-color: blueviolet; */
}

textarea, input{
    background-color: white;
}

</style>