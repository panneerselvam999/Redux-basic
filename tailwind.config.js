/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        'sm': { 'max': '639px' },
        'md': { 'max': '767px' },

      },
    },
  },
  plugins: [],
}