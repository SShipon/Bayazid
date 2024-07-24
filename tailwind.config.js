/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colorBg:'#27d3ca',
    extend: {},
  },
  plugins: [require("daisyui")],
}

