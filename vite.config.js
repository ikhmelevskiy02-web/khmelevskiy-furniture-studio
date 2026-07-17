import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Относительные пути к ресурсам — сайт работает и в подкаталоге
  // (например, https://логин.github.io/имя-репозитория/), и на своём домене.
  base: './',
})
