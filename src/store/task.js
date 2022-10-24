import { defineStore } from "pinia";
import { deleteTask, getTasks, updateTask } from "../api";

export const usTaskStore = defineStore("task", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // guardar los task que nos da supabase
      tasks: []
    };
  },
  actions: {
    async setTask (){
      this.tasks = await getTasks()
      console.log(this.task)
      //guardar en el estado las task que nos de supabase
    },

    updateTask(id, task){
        // TODO modificar el estado de la task
        // encontrar el indica de la task con ese id y cambiarle el contenido con task
    },

    deleteTask(id){
        // TODO el estado modificando esa task
        // encontrar el indica de ese id y eliminaos ese indice de la array
    },

    addTask(title,description){
        const task = {
          id: this.tasks.length + 1,
          title,
          description,
          date: new Date()
        }
        this.tasks.push(task);
    }
  },
});
