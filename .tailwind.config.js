import forms from "@tailwindcss/forms";

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["focus"],
    },
  },
  plugins: [forms],
};
