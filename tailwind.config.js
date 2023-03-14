/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class',
  theme: {
    extend: {
      fontFamily: {
        UbuntuBold: ['Ubuntu-Bold', 'sans-serif'],
        UbuntuRegular: ['Ubuntu-Regular', 'sans-serif'],
      },
    },

    transitionDuration: {
      '100': '100ms',
      '200': '200ms',
      '300': '300ms',
      '2000': '2000ms',
    },

    colors: {
      black: "#000000",
      mineShaft:"#2A2A2A",
      codGray:'#0A0A0A',
      silver:"#C4C4C4",
      gray:"#888888",
      white: "#FFFFFF",

      blueRibbon:"#3739FF"
    },
  },
  plugins: [],
}
