/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "navbarFont": ['Oswald', 'sans-serif'],
        "gloockFont": ['Gloock', 'serif']
      },
      colors: {
        "premiumColor": "rgba(25, 38, 117, 0.7)"
      },
      screens: {
        "mm": "350px",
        "xl": "1300px"
      }
    },
  },
  plugins: [],
}
