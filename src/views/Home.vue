<template>
  <!-- BOTON NUEVA TAREA -->
  <button @click="onClick()" v-if="!show">Add task</button>

  <!-- FORMULARIO DE AÑADIR TAREA -->
  <div v-if="show" class="max-w-2xl mx-auto">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form @submit.prevent="onSubmit()" class="space-y-6" action="#">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Add your task
        </h3>
        <div>
          <label
            for="text"
            class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >Title</label
          >
          <input
            type="text"
            name="titletask"
            id="titletask"
            v-model="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Write the title"
            required=""
          />
        </div>
        <div>
          <label
            for="text"
            class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >Description</label
          >
          <input
            type="text"
            name="descriptiontask"
            id="descriptiontask"
            v-model="description"
            placeholder="Description of the project"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required=""
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start"></div>
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        <button
          type="submit"
          @click="onClick()"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancell
        </button>
      </form>
    </div>
  </div>

  <!-- MOSTRAR TAREAS -->
  <Task v-for="task in taskStore.tasks" :task="task" />

  <!-- TAREAS YA CREADAS -->
  <div class="mx-auto container py-20 px-6">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div class="rounded">
        <div
          class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
        >
        <!-- AQUI AÑADIMOS NUESTRA CLASE  -->
          <div class="task">
            <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
            <p>
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div
              class="flex items-center justify-between text-gray-800 dark:text-gray-100"
            >
              <p class="text-sm">March 28, 2020</p>
              <button
                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="edit note"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                  ></path>
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4"
        >
          <div>
            <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
            <p class="text-gray-800 text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div class="flex items-center justify-between text-gray-800">
              <p class="text-sm">March 28, 2020</p>
              <button
                class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                aria-label="edit note"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                  ></path>
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4"
        >
          <div>
            <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
            <p class="text-gray-800 text-sm">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
              neque porro quisquam est, quid malum, sensu iudicari
            </p>
          </div>
          <div class="w-full flex flex-col items-start">
            <div
              class="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
              aria-label="Due on"
              role="contentinfo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-alarm"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="12" cy="13" r="7"></circle>
                <polyline points="12 10 12 13 14 13"></polyline>
                <line x1="7" y1="4" x2="4.25" y2="6"></line>
                <line x1="17" y1="4" x2="19.75" y2="6"></line>
              </svg>
              <p class="ml-2">7 Sept, 23:00</p>
            </div>
            <div class="flex items-center justify-between text-gray-800 w-full">
              <p class="text-sm">March 28, 2020</p>
              <button
                class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300 focus:ring-black"
                aria-label="edit note"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                  ></path>
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TODO -->
  <!-- <div v-if="show">
        <Task />
    </div> -->
    
</template>
<script setup>
import { ref } from "vue";
import Task from "../components/Task.vue";
import { newTask } from "../api/index";
import { usTaskStore } from "../store/task";

const show = ref(false);
const title = ref();
const description = ref();

const onClick = () => {
  show.value = !show.value;
};

const onSubmit = async () => {
  const response = await newTask(title.value, description.value);
  console.log(title.value);
};

const taskStore = usTaskStore();

taskStore.setTask();
</script>
<style scoped></style>
