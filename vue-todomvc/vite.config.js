import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    // dropping options API can further reduce Vue baseline size
    // __VUE_OPTIONS_API__: false
  }
})
