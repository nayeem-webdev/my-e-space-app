/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        marsHero:
          "url('http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486265119EDR_S0481570NCAM00546M_.JPG')",
      },
      colors: {
        bodyBg: "rgba(13, 27, 42, 1)",
        cardColor: " #778da9",
        highlightColor: "#1b263b",
        accentColor: "#415a77",
        accentColor2: "rgb(253, 58, 24)",
        accentColorHover: "rgb(253, 89, 58)",
        textColor: "rgba(224, 225, 221, 1)",
      },
    },
  },
  plugins: [],
};
