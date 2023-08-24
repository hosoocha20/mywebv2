/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-white' : '#fcfcfe',
        'my-yellow' : '#fae72a',
      },
    },
  },
  plugins: [],
}

