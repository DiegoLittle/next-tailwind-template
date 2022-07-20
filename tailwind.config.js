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
        'primary_gray_60': '#3C4254',
        'primary_gray_40':'#757B8C',
        'primary_gray_80':'#282C38',
        'primary_gray_20':'#E5E6ED',
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}
