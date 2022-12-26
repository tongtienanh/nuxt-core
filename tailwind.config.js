module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      strokeWidth: {
        '2': '12px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
