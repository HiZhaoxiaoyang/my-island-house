import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist', // 可改为 'island-house-dist'，如需区分
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});