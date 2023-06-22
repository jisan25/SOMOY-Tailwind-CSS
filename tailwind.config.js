/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        midnightBlue: "#072a6c",
        forestGreen: "#04724d",
        floralWhite: "#fffcf2",
        darkGray: "rgb(51, 51, 51)",
      },
    },
  },
  plugins: [],
};
