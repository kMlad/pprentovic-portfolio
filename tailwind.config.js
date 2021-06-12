const defaultColors = require("tailwindcss/colors");

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
    extend: {
      backgroundImage: (theme) => ({
        "fb-icon": "url('./assets/facebook.png')",
        "ig-icon": "url('./assets/instagram.png')",
        "li-icon": "url('./assets/linkedin.png')",
        "email-icon": "url('./assets/mail.png')",
        "pp-logo": "url('./assets/pp-logo.png')",
        "burger-icon": "url('./assets/burger-menu-icon.png')",
        "x-icon": "url('./assets/x-icon.png')",
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
