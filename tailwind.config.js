/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        second: '#14532d',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

