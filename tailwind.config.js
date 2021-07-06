const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter var", "Source code pro", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      "near-black": "#000000",
      "near-white": "#FFFFFF",
      "near-gray": "#F2F2F2",
      "near-red": {
        light: "#FFADB0",
        medium: "#FF8589",
        DEFAULT: "#FF585D",
      },
      "near-orange": {
        light: "#FFD9AD",
        medium: "#FFC685",
        DEFAULT: "#FFB259",
      },
      "near-yellow": {
        light: "#F9F8C8",
        medium: "#F5F3A3",
        DEFAULT: "#F0EC74",
      },
      "near-green": {
        light: "#99FFE2",
        medium: "#00F5AF",
        DEFAULT: "#00C08B",
      },
      "near-blue": {
        light: "#99F1FF",
        medium: "#0ADEFF",
        DEFAULT: "#00C1DE",
      },
      "near-royal": {
        light: "#99D1FF",
        medium: "#0A91FF",
        DEFAULT: "#0072CE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
