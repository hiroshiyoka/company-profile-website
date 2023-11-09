/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
