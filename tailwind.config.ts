/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors:{
      Primary: '#39CCCC',
      Secondary: '#001F3F',
      Dark: '#101529',
      SuperDark: "#000000",
      OceanLight: '#D1F5FF',
      Ocean: '#0074D9',
      Light: '#FFFFFF',
      DarkGray: '#1A202C',
      Wrong: '#FF4136',
      Gray: '#D3D8DA',
      Correct: '#01FF70',
      Warning: '#FFDC00'
    },
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
    } 
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}

