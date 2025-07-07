
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   plugins: [tailwindcss(),
    react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})