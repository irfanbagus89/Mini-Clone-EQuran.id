/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["LPMQ Isep Misbah", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
