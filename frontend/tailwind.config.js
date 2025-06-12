module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"  // 修正为根目录下的 index.html
  ],
  theme: {
    extend: {
      colors: {
        'island-primary': '#0099ff',
        // 保留默认颜色配置
        blue: {
          50: '#eff6ff',
          // ... 其他默认渐变层级
        }
      }
    },
  },
  plugins: [],
};
