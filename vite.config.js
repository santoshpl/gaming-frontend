import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://gaming-backend-h0fo.onrender.com/api',
        changeOrigin: true,
      },
      '/socket.io': {
        target: 'https://gaming-backend-h0fo.onrender.com/api',
        ws: true,
      },
    },
  },
})
