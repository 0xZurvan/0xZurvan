/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'green': '#38E54D',
      'darkGreen': '#306844',
      'white': '#ffff',
      'main': '#181d27',
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}