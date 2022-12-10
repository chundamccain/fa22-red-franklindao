/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // our custom colors
      background: '#161616',
      purple: "#B05EC8",
      dark_purple: "#8352D0",
      grey: "#9a9a9a",
      blue: "#77D4FB",

      // tailwind default
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red
    }
  },
  plugins: [],
}
