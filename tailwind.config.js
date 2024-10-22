/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "rgba(13, 27, 42, 1)",
        cardColor: " #778da9",
        highlightColor: "#1b263b",
        accentColor: "#415a77",
        accentColor2: "rgb(253, 58, 24)",
        textColor: "rgba(224, 225, 221, 1)",
      },
    },
  },
  plugins: [],
};
