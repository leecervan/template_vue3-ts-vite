import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@views': path.resolve(__dirname, 'src', 'views'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@assets/css/index.scss";',
      },
    },
  },
  server: {
    port: 8080,
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
