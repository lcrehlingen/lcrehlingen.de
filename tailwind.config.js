/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("@tailwindcss/aspect-ratio")],
}
