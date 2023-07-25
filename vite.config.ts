import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      "~": new URL('src/', import.meta.url).pathname
    }
  },
  server: {
    proxy:{
      '/api': {
        target: 'https://www.fastmock.site/mock/8eb7e7f0132d9cf1a2d2adda920a84cd/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [vue(), WindiCSS()],
})
