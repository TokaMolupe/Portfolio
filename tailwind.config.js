/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleFade: {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(2)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scaleFade: 'scaleFade 0.5s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      colors: {
        darkShade: "#2C2C2F",
      }
    },
  },
  plugins: [],
}
