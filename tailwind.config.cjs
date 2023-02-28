/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F99919",
        secondary: "#2D2D2F",

        navbarColor: "#141312",
        letterColor: "#838D95",
        hilightColor: "#C7C0AD",
        bgBlack: "#12181C",
        bgWhite: "#F4F4F4",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
