/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'screen-navbar': 'calc(100vh - 3.9rem)'
      },
      height: {
        'screen-navbar': 'calc(100vh - 3.9rem)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
