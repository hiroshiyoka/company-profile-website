/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
