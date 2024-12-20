/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        customBlue: '#003B6D',
        customLightblue:'#00AEEF',
        customDarkblue: '#06163A',
      },
      fontFamily:{
        cabin: ['Cabin', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
}

