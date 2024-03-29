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
      animation:{
        'task-click':'task-click 1s cubic-bezier(0.075, 0.82, 0.165, 1)',
        'accordian-open':'rotate180 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite',
        // 'second':'1s'
      },
      keyframes:{
        'task-click':{
          'from':{
            'transform':'scale(1)'
          },
          'to':{
            'transform':'scale(0.98)'
          }
        },
        'rotate180':{
          'to':{
            'transform':'rotate(180deg)'
          }
        }
      }
    },
  },
  plugins: [],
};