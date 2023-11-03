/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '196': '59rem',
        '197': '63rem'
      },
      colors: {
        'aliceblue': '#F0F8FF'
      }
    },
  }
}

