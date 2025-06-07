module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // 替换原有的 tailwindcss: {}
    // tailwindcss: {}, // 正确加载 Tailwind
    autoprefixer: {}, // 自动前缀工具
  },
};