/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : 'var(--primary)' ,
        primaryHover : 'var(--primaryHover)' ,
        grayText : 'var(--grayText)' ,
        dark : 'var(--dark)' ,
        pure : 'var(--pure)'
      }
    },
  },
  plugins: [],
}

