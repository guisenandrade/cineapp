/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'titulo' : ["Luckiest Guy", "cursive"],
      'normal' : ["Alatsi", "sans-serif"]
    },
    extend: {
      colors: {
        'primary-sena' : '#4C4C4C',
        'secondary-sena' : '#1E1E1E',
        'terciary-sena' : '#2A2A2A',
        'quarter-sena' : '#838383'
      }
      
    },
  },
  plugins: [],
}