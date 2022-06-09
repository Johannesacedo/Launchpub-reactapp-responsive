/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'] 
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#27AADF',
      'white': '#ffffff',
      'blue-violet': '#110939',
      'violet': '#2c0d3a',
      'blue-transparent' : '#1e7fa760',
      'violet-transparent' : '#40144D',
      'pink': '#AD3AAD',
      'gray': '#9b9696',
    },
  },
  plugins: [],
}
