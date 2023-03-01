/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-landing-page": "#16213E",
        "navbar-dashboard-color": "#0A2647",
        "lite-white": "rgba(255, 255, 255, 0.17)",
        "category-heading": "hsl(333deg, 100%, 52%)",
      },
      fontFamily: {
        "category-heading": ['"Lexend"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
