/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "./pages/**/*.{html,js}",
  "./public/**/*.html",
  // "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
    colors: {
      black100: "#404040",
      black500: "#202020",
      gray500: "#B5B5B5",
      gray100: "#D5D5D5",
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
      danger: "#F64242",
      sucess: "#06BF18",
    },
    fontFamily: {
      poppins: [
        "Poppins",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    dropShadow: {
      qeydiyyat: "0 4px 4px rgba(53, 152, 234, 50%)",
      card: "0 4px 16px rgba(32, 32, 32, 15%)",
      cardAlt: "0 2px 4px rgba(32, 32, 32, 10%)",
      cardNew:"0 4px 16px rgba(53, 152, 234, 0.05)"
    },
    boxShadow: {
      btnShdw: "0 4px 16px rgba(53, 152, 234, 50%)",
      rectangle4: "0 4px 16px rgba(32, 32, 32, 0.15)",
      dropblack25: "0 4px 16px rgba(32, 32, 32, 25%)",
    },
    // padding: {
    //   "1/3": "33.333333%",
    //   "2/3": "66.666667%",
    // },
    keyframes: {
      moveUpDown: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
    animation: {
      wiggle: "wiggle 200ms ease-in-out",
    },
  },
  screens: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1512px",
  },
};
export const plugins = [
  "@tailwindcss/aspect-ratio",
  "require('@tailwindcss/forms')",
  require("@tailwindcss/aspect-ratio"),
  // require("flowbite/plugin"),
  require("daisyui"),
];
export const images = {
  disableStaticImages: true,
};
