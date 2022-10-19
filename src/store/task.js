import { defineStore } from "pinia";
import { deleteTask, updateTask } from "../api";

export const useTaskSote = defineStore("task", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // guardar los task que nos da supabase
      task: []
    };
  },
  actions: {
    setTask(){
    // TODO guardar en el estado las task que nos de supabase
    },

    updateTask(id, task){
        // TODO modificar el estado de la task
        // encontrar el indica de la task con ese id y cambiarle el contenido con task
    },

    deleteTask(id){
        // TODO el estado modificando esa task
        // encontrar el indica de ese id y eliminaos ese indice de la array
    },

    addTask(task){
        // TODO modificar el estado de task haciendo un push de la task
        // comprobar que tenemos el id al insertar el registro en caso de no tenerlo tendriamos que hacer e gettask
    }
  },
});
