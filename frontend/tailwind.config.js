/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appgray': '#282c34',
      },
      keyframes: {
        'fade-backdrop': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.75',
          },
        },
      },
      animation: {
        'fade-backdrop': 'fade 1s both'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}