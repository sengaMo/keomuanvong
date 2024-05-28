/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "14px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        custom: {
          500: "#15827e",
          600: "#12625f",
          800: "#0b3b3a",
        },
      },
    },
  },
  plugins: [],
};
