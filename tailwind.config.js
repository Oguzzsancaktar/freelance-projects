/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './widgets/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class',
  theme: {
    screens: {
      1000: { max: '1000px' },
    },
    extend: {
      fontFamily: {
        UbuntuBold: ['Ubuntu-Bold', 'sans-serif'],
        UbuntuRegular: ['Ubuntu-Regular', 'sans-serif'],
      },
    },

    transitionDuration: {
      100: '100ms',
      200: '200ms',
      300: '300ms',
      2000: '1500ms',
    },

    colors: {
      black: '#000000',
      mineShaft: '#2A2A2A',
      codGray: '#0A0A0A',
      silver: '#C4C4C4',
      gray: '#888888',
      white: '#FFFFFF',

      blueRibbon: '#d3f174',
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: 'calc(100vw / 1920 * 10)' },
      })
    }),
  ],
}
