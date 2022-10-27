<template>
    <!-- BOTON NUEVA TAREA -->
    <div class="main">
        <button class="btn btn-blue addtask buttonfill" @click="onClick()" v-if="!show">Add a new task 😊 </button>
    </div>
    <!-- FORMULARIO DE AÑADIR TAREA -->
    <div v-if="show" class="max-w-2xl mx-auto ">
        <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
            <form @submit.prevent="onSubmit()" class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Let's get things done 👌
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
                    class="w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center buttonfill">
                    Save
                </button>
                <button type="submit" @click="onClick()"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 buttonfill">
                    Cancell
                </button>
            </form>
        </div>
    </div>
    <div class="fatheralltask flex items-start justify-center md:flex-row">
        <div class="alltasks">
            <button class="todo justify-self-center">To-do</button>
            <div class="columnleft grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                <!-- MOSTRAR TODAS LAS TAREAS -->
                <div v-for="task in taskStore.tasks">
                    <Task :task="task" v-if="task.isCompleted == false" class="flex justify-center" />
                </div>
            </div>
        </div>
        <div class="alltasks">
            <button class="done justify-self-center">Done</button>
            <div class="columnright grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                <!-- MOSTRAR LAS TAREAS COMPLETADAS-->
                <div v-for="task in taskStore.tasks">
                    <Task :task="task" v-if="task.isCompleted == true" class="flex justify-center" />
                </div>
            </div>
        </div>
    </div>


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
* {
    /* padding: 0;
    margin: 0; */
    box-sizing: border-box;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center,

}

.fatheralltask {
    display: flex;
    flex-direction: column;
}

.alltasks {
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.columnleft {
    /* background-color: red; */
    /* width: 50%; */
}

.columnright {
    /* background-color: blue; */
    /* width: 50%; */
}

.todo {
    border: 1px solid #9DA3AE;
    color: #212936;
    border-radius: 9px;
    padding: 10px 120px;
    margin: 20px;
    font-size: 15px;
    font-weight: 600;
}

.done {
    border: 1px solid #9DA3AE;
    color: #212936;
    border-radius: 9px;
    padding: 10px 120px;
    margin: 20px;
    font-size: 15px;
    font-weight: 500;
}

/* .btn {
    @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
} */

.addtask {
    padding: 20px 120px;
    font-size: 15px;
    font-weight: 500;
    color: white;
}

.buttonfill {
    /* padding-top: ; */
    background-color: #212936;
}

.buttonfill:hover {
    background-color: #8F14E1 !important;
}



.probando {
    background-color: red;
    display: flex;
    justify-content: center;
}

@media only screen and (min-width: 400px){
    .fatheralltask {
    flex-direction: row;
}
}
</style>
