/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ret-yellow": "#fdedba",
        "ret-dark-yellow": "#e7dab1",
        "ret-purple": "#d6ceff",
        "ret-light-gray": "#e6e6e6",
        "ret-brown": "#dacbc1",
        "ret-dark-gray": "#b2b3b3",
        "ret-black": "#232324",
        "ret-green": "#def3f2",
        "ret-blossom": "#f6ccd0",
      },
    },
  },
  plugins: [],
}
