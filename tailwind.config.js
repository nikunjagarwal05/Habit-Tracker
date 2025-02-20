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
      keyframes: {
        typing: {
          '0%': { width: '0ch'},
          '100%': { width: '24ch'},
        },
        cursor: {
          '50%': { borderColor: 'white'},
        },
      },
      animation: {
        'typing-cursor': 'typing 2s steps(31) forwards, cursor .5s step-end infinite alternate',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};