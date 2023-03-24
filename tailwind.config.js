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
        "premiumColor": "rgba(25, 38, 117, 0.5)",
        "beautyGray": '#00000099',
        "myBlack": "#07122B",
        "softBlue": "#D0E2F5",
        "navbarGradientFrom": "rgba(20, 65, 102, 1)"
      },
      screens: {
        "mm": "350px",
        "xl": "1300px"
      },
      boxShadow: {
        "customShadow": '0px 8px 16px rgba(0,0,0,0.1)',
        "customShadowHover": '0px 12px 20px rgba(0,0,0,0.2)',
        "dropdownShadow": "-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)",
        "barShadow": 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        'clayShadow': '35px 35px 68px 0px rgba(208, 226, 245, 0.5), inset -12px -12px 16px 0px rgba(208, 226, 245, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)',
        'clayShadow2': '0px 15px 25px 0px rgba(16, 16, 73, 0.3), inset 0px -3px 16px 0px rgba(16, 16, 73, 0.4), inset 0px 5px 14px 0px rgb(255, 255, 255)',
       
      }
    },
  },
  plugins: [],
}
