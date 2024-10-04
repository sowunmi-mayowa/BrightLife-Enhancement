/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"]
      },
      colors: {
        primaryGreen: "#77BC3F",
        primaryGray: "#ABABAB",
        lightGreen: "#F7FEF1"
      }
    },
  },
  plugins: [],
}

