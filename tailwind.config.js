/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CBE2EF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#EAF3F9",
          500: "#CBE2EF",
          600: "#A0CAE2",
          700: "#75B2D5",
          800: "#4A9AC7",
          900: "#337DA6",
          950: "#2D6D91",
        },
      },
    },
  },
  plugins: [],
};
