import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Forward /api/* requests to the local Express dev server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
});

