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
        'my-blue' : '#2A3DFA',
      },
      fontSize: {

        clamp1: "clamp(1rem, 3.7vw, 2.2rem)",
        clamp2: "clamp(1rem, 3vw, 1.8rem)",
        clamp3: "clamp(0.8rem, 3.4vw, 1.5rem)",
        clamp4: "clamp(1.7rem,4vw ,4rem)"
      },
    },
  },
  plugins: [],
}

