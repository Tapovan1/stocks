import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Docker external access
    port: 5173,
    allowedHosts: ['stocks.tapovanvidhyamandirsankul.com'],
    proxy: {
      '/api': {
        target: 'http://server:5000',  // or 'http://localhost:5000' if running locally outside Docker
        changeOrigin: true,
        rewrite: (path) => path // usually optional, but explicit
      },
    },
  },
})
