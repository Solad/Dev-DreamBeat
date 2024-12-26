import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'src/pages/legal/terms.html'),
        privacy: resolve(__dirname, 'src/pages/legal/privacy.html'),
        cookies: resolve(__dirname, 'src/pages/legal/cookies.html'),
        status: resolve(__dirname, 'src/pages/status.html'),
      },
    },
  },
});