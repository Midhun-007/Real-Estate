/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const tailwindScrollbarHide = require('tailwind-scrollbar-hide');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        }
      };
      addUtilities(newUtilities);
    }
  ],
};