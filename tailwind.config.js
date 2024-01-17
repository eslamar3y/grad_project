/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mainColor': '#D9D9D9',
        'secondColor': '#585EC7',
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      screens: {
        xxs: "0px",
        xs: "360px",
        ml: "900px",
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')],
};
