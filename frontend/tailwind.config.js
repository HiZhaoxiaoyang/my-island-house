module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'island-primary': '#0099ff', // 自定义主色生效的关键配置
      },
    },
  },
  plugins: [], // 这里只放 Tailwind 官方/第三方插件（如 @tailwindcss/forms），当前无需额外插件
  // plugins: {
  //   '@tailwindcss/postcss': {},
  //   autoprefixer: {},
  // },
};