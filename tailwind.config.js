/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/navbar/**/*.{html,js}",
  ],
  theme: {
    colors: {
      primaryColor: "#000",
      secondaryColor: "#fcae04",
      darkGray: "#1f2937",
      lightGray: "#e5e7eb",
      white: "#fff",
      current: "currentColor",
      gray_600: "#4b5563",
      gray_300: "#cbd5e1",
      gray_400: "#94a3b8",
    },
    extend: {},
  },
  plugins: [],
};
