module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "rgba(var(--base-color))",
        header: "rgba(var(--header-color))"
      }
    },
  },
  plugins: [],
};
