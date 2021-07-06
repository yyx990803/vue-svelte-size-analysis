import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      // vite-plugin-svlete compiles in hydratable mode by default
      hydratable: false
    }
  })]
})
