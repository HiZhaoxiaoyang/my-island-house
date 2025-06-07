import { type Config } from 'tailwindcss';

export default {
  content: ["./src/**/*.{ts,tsx}"],  // 扫描TS/TSX文件
  theme: {
    extend: {
      colors: {
        'island-primary': '#0066cc',  // 岛屿蓝
        'island-background': '#f8f9fa' // 背景色
      }
    },
  },
  plugins: [],
} satisfies Config;