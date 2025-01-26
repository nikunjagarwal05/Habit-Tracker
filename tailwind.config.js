module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'tl-50-100': '50% 100%',
        'tr-50-100': '50% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};