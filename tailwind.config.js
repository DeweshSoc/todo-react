/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        "primary-text": "#393E46",
      },
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
      keyframes:{
        'shimmer': {
          'to': {
              'background-position-x': '0%'
          }
        }
      }
    },
  },
  plugins: [],
};