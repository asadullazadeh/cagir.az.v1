/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black100: "#404040",
        black500: "#202020",
        gray500: "#B5B5B5",
        gray400: "#BDBDBD",
        gray900: "#959595",
        cagiraz: "#3598EA",
        white100: "#FFFFFF",
        white200: "#EAEAEA",
        bluebckg: "#3598EA",
        darkGray: "#909090",
        footerBcg: "#848484",
        linkedin: "#0A66C2",
        fb: "#2A72E7",
        //Linear gradient colors
        gradCol1: "#515BD4",
        gradCol2: "#8134AF",
        gradCol3: "#DD2A7B",
        gradCol4: "#F58529",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        qeydiyyat: "0 4px 4px rgba(53, 152, 234, 50%)",
        card: "0 4px 16px rgba(32, 32, 32, 15%)",
      },
      boxShadow: {
        'btnShdw': '0 4px 16px rgba(53, 152, 234, 50%)',
      }
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
