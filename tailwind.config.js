/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-gray': '#1E1F25',
        'primary-light': '#F5F5F5',
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}
