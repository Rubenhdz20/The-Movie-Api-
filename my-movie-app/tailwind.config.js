/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'text-color': '#131313',
      'background-button': '#1CE783',
      'white': '#FFFFFF',
      'background': '#0B0C0F',
    },
    fontFamily: {
      serif: ["Rubik", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

