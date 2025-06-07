import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // 确保插件已导入

export default defineConfig({
  plugins: [react()],  // 确保插件已添加
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