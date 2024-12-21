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
        customGrey: '#8B8B8B',
        customlightestBlue: '#EFF8FF',
      },
      fontFamily:{
        cabin: ['Cabin', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
}

