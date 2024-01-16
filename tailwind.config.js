/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      screens: {
        xxs: "0px",
        xs: "360px",
        ml: "900px",
      },
    },
  },
  plugins: [],
};
