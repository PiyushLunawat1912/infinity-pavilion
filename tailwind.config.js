/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#F7EEDB",
        charcoal: "#111111",
        gold: "#D9A441",
        mutedbronze: "#B8944E",
      },
    },
  },
  plugins: [],
};
