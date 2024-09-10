/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["LPMQ Isep Misbah", "sans-serif"],
      },
      colors:{
        pink: '#EC4899',
        pinkshadow: '#F3E8FF',
        pinkungu: '#9D1764'
      }
    },
  },
  plugins: [require("daisyui")],
};
