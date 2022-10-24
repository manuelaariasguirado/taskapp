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
        // encontrar el indica de ese id y eliminaos ese indice de la array
        const i = this.tasks.findIndex(task => task.id == id)
        this.tasks.splice(i, 1);
        // llamar a supabase para que borre

    },

    addTask(title,description){
      this.setTask()
    }
  }
})
