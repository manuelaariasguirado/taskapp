<template>
    <!-- BOTON NUEVA TAREA -->
    <div class="main">
        <button class="btn btn-blue addtask" @click="onClick()" v-if="!show">Add a new task :)</button>
    </div>
    <div class="container">
        <div class="columnleft">
            <button class="todo" @click="onClick()">To-do</button>
        </div>
        <div class="columnright">
            <button class="done">Done</button>
        </div>
    </div>

    <!-- FORMULARIO DE AÑADIR TAREA -->
    <div v-if="show" class="max-w-2xl mx-auto">
        <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form @submit.prevent="onSubmit()" class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Add your task
                </h3>
                <div>
                    <label for="text"
                        class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Title</label>
                    <input type="text" name="titletask" id="titletask" v-model="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white limpiarinput"
                        placeholder="Write the title" required="" />
                </div>
                <div>
                    <label for="text"
                        class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                    <input type="text" name="descriptiontask" id="descriptiontask" v-model="description"
                        placeholder="Description of the project"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required="" />
                </div>
                <div class="flex items-start">
                    <div class="flex items-start"></div>
                </div>
                <button type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pinkbutton">
                    Save
                </button>
                <button type="submit" @click="onClick()"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Cancell
                </button>
            </form>
        </div>
    </div>

    
    <!-- MOSTRAR TAREAS -->
    <Task v-for="task in taskStore.tasks" :task="task" />


</template>
<script setup>
import { ref } from "vue";
import Task from "../components/Task.vue";
import { newTask } from "../api/index";
import { usTaskStore } from "../store/task";

const show = ref(false);
const title = ref();
const description = ref();
const taskStore = usTaskStore();

const onClick = () => {
    show.value = !show.value;
};

const onSubmit = async () => {
    const response = await newTask(title.value, description.value);
    console.log(title.value, description.value);
    taskStore.addTask(title.value, description.value);
    title.value = '',
        description.value = ''
}

taskStore.setTask();


</script>
<style scoped>

.main {
    display: flex;
    justify-content: center;
    align-items: center,

}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.columnleft {
    background-color: red;
}

.columnright {
    background-color: blue;
}

.todo{
    border:3px solid #FF99C8;
    border-radius: 9px;
    padding: 20px 120px;
    margin-top: 20px;
    font-size: 20px;
}

.done{
    border:3px solid #FF99C8;
    border-radius: 9px;
    padding: 20px 120px;
    margin-top: 20px;
    font-size: 20px;
}

/* .secondary {
    display: flex;
    justify-content: space-around;
} */


.btn {
    @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.addtask {
    background-color: #FF99C8;
    padding: 20px 120px;
    font-size: 20px;
    font-weight: 500;
}

.addtask:hover {
    background-color: #FF5CA8 !important;
}

.btn-blue:hover {
    @apply bg-blue-700;
}
</style>
