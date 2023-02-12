/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        clifford: '#da373d',
                brightred: 'hs(12, 88%, 59%)',
                gideon: 'purple',
                transparent: 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bred': 'red',
      'darksliver': '#565584',
      'milk': '#f5f6ff',
      }
    },
  },
  plugins: [],
}
