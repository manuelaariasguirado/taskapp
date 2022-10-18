import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const registro = async (email, password) => {
  const result = await supabase.auth.signUp({
    email,
    password,
  });
//   TODO IDENTIFICAR EL RESULT Y RETORCAR LO QUE NOS INTERESA
console.log(response)
}

export const login = async (email,password) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return response.data.user.id
  }

export const newTask = async (task) => {
const response = await supabase.from('task')
    .insert({
    // TODO IDENTIFICAR LA RESPUESTAS Y RETORNAR LO QUE NECESITEMOS EJE. SE SE HA INSERTADO EL REGISTRO Y SALSE SI NO
    console.log(response)
})
console.log(response)
}

export const getTasks = async () => {
    const response = await supabase
      .from('task')
      .select('*')
      .order('id', { ascending: false })
    console.log(response)
    // TODO RETORNAR LA INFORMACION DE LOS TASK EJ Response.DATA
  }


export const updateTask = async (taskId, task) => {
    const { data, error } = await supabase
    .from('task')
    .update(task)
    .eq('id', 'taskId')

    //   TODO indetificar el resultaso y  retornar lo que nos interesa por ejem true si ha bien bien, flase si ha fallado
    console.log(response)
}

export const deleteTask = async (taskId) => {
    const response = await supabase
    .from('task')
    .delete()
    .eq('id', 'taskId')
    console.log(response)
}

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    // TODO identificar el resultado y retornar lo que nos interesa por ejemplo tru si ha ido bien false si ha fallado
    console.log(response)
}

