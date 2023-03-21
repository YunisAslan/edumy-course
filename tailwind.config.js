/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "navbarFont": ['Oswald', 'sans-serif'],
        "gloockFont": ['Gloock', 'serif'],
        "zillaFont": ['Zilla Slab', 'serif'],
        "poppinsFont": ['Poppins', 'sans-serif']   
      },
      colors: {
        "premiumColor": "rgba(25, 38, 117, 0.7)",
        "beautyGray": '#00000099',
        "myBlack": "#07122B"
      },
      screens: {
        "mm": "350px",
        "xl": "1300px"
      },
      boxShadow: {
        "customShadow": '0px 8px 16px rgba(0,0,0,0.1)',
        "customShadowHover": '0px 12px 20px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}
