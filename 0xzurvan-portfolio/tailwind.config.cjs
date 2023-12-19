/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'green': '#38E54D',
      'darkGreen': '#306844',
      'white': '#ffff',
      'main': '#0E0E10',
      'red': '#E21818'
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
