import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // nos indica si el usuario esta autenticado
      isAuth: false,
      // guardamos el id de supabase que nos dara al hacer login
      id: undefined,
    };
  },
  actions: {
    login() {
      // TODO cambiar el estado de autenticacion e id del usuario
    },

    logout() {
      // TODO cambiar el estado de autenticacion e id del usuario
    },
  },
});
