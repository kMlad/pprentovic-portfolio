const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      startGradient: "#313132",
      endGradient: "#161618",
      powerPurple: "#B700EA",
      ...defaultColors,
    },
    fontSize: {
      footerSmall: "7px",
      ...defaultTheme.fontSize,
    },
    screens: {
      xxs: "350px",
      xs: "448px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: (theme) => ({
        "fb-icon": "url('./assets/facebook.png')",
        "ig-icon": "url('./assets/instagram.png')",
        "li-icon": "url('./assets/linkedin.png')",
        "email-icon": "url('./assets/mail.png')",
        "pp-logo": "url('./assets/pp-logo.png')",
        "burger-icon": "url('./assets/burger-menu-icon.png')",
        "x-icon": "url('./assets/x-icon.png')",
        "spike-mobile": "url('./assets/spike-mobile.png')",
        "circle-triangle": "url('./assets/circle-triangle.png')",
      }),
    },
    fontFamily: {
      sans: ["Montserrat", "system-ui"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
