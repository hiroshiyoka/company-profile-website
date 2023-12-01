/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.{html,js,php}"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
