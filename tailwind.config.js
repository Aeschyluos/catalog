/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        primary: "var(--primary)",
      },
      fontFamily: {
        stylish: ["'Stylish'", "cursive"],
        lacquer: ["'Lacquer'", "sans-serif"],
      },
      spacing: {
        116: "29rem",
        120: "30rem",
      },
    },
  },
  plugins: [],
};
