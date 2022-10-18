import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // carpeta donde creara el build
  build: { outDir: 'docs' },
  // comprobamos si estamos en producción y la base es el nombre del repositorio si no es la raiz
  // condicion ? 'nombre-repositorio' : '/'
  // produccion es lo que se puede ver desde cualquier sitio, lo que está en pages
  base: process.env.NODE_ENV === 'production' ? '/taskapp/' : '/'
  // base: process.env.NODE_ENV === 'development' ? '/taskapp/' : '/'
})
