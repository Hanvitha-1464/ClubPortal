import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Ensures correct asset paths
  build: {
    outDir: 'dist',  // Make sure this matches what you deployed
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://clubportal-3s4b.onrender.com/',
        changeOrigin: true,
      }
    },
    watch: {
      usePolling: true,  // Ensures file changes are detected
    }
  }
});
