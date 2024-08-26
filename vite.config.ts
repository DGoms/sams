import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
// import vueDevTools from 'vite-plugin-vue-devtools'

import './listDir'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // vueDevTools(),
      vuetify({ autoImport: true }) // Enabled by default
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: command == 'build' ? './' : '/',
    build: {
      outDir: 'docs/'
    }
  }
})
