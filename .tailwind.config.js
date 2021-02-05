import forms from "@tailwindcss/forms";

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        mxl: "192em",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus", "disabled"],
      backgroundColor: ["active", "disabled"],
      opacity: ["disabled"],
      cursor: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [forms],
};
