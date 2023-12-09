/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/js/*.js", "./src/views/*.html"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
