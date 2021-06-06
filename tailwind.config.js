module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "fb-icon": "url('./assets/facebook.png')",
        "ig-icon": "url('./assets/instagram.png')",
        "li-icon": "url('./assets/linkedin.png')",
        "email-icon": "url('./assets/mail.png')",
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
