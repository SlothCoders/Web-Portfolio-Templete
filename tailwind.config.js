/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    minWidth: {
      '300': '300px',
    },
    width: {
      'full-300': 'calc(100% - 316px)',

    },
    minHeight: {
      'card': 'calc(100vh - 4rem)',
    }


  },
  plugins: [],
}