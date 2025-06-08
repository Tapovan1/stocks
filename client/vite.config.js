import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0', // required for external access
    port: 5173,
    allowedHosts: ['stocks.tapovanvidhyamandirsankul.com'], // 👈 add your domain here
  },
  
  plugins: [
    react(),
    
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})