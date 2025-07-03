/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Obavezno za Vite projekte
    "./src/**/*.{js,jsx,ts,tsx}", // Skenira sve JS/JSX/TS/TSX fajlove u src folderu
  ],
  theme: {
    extend: {
      colors: {
        "custom-beige-dark": "#d9c098",
        "custom-beige-light": "#f9edd7",
        "custom-amber-700": "#b45309",
        "custom-amber-800": "#9a3412",
        "custom-stone-800": "#44403c",
        "custom-bg": "#faf2e6",
      },
      fontFamily: {
        // Definišite serifni font za naslove
        serif: ["Lora", "serif"],
        // Definišite sans-serif font za telo teksta
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
