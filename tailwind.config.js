/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#EA157F',
      'secondary': '#000000',
      'white': '#ffffff',
      'red-dark': '#eb5757'
    },
  },
  plugins: [],
}

