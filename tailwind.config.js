/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'aladin': ['Aladin'],
      'oswald': ['OSwald'],
      'roboto-slab': ['Roboto Slab'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}