/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-landing-page": "#16213E",
        "navbar-dashboard-color": "#0A2647",
        "lite-white": "rgba(255, 255, 255, 0.17)",
      }
    },
  },
  plugins: [],
}