/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black500: "#202020",
        gray500: "#B5B5B5",
        gray900: "#959595",
        cagiraz: "#3598EA",
        white200: "#EAEAEA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
