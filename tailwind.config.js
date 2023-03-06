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

    colors: {
      // -------
      white: "#FFFFFF",
      desertStorm: "#F8F8F7",
      carara: '#F2F2EF',


      westar: "#E2E2DB",

      //darks
      heavyMetal: "#2A2B2A",
      violet: "#0F0D48",
      //blues


      //colurfuls

      //blue


      //orange
      sunsetOrange: "#FC5A40",

      //green

      //red

    },
  },
  plugins: [],
}
