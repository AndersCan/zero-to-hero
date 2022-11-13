/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {},
    fontSize: {
      xs: "1vw",
      sm: "2vw",
      base: "3vw",
      md: "5vw",
      lg: "6vw",
      xl: "8vw",
      "2xl": "10vw",
      "3xl": "6vw",
      "4xl": "7vw",
      "5xl": "8vw",
    },
  },
  plugins: [],
};
