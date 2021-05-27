const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['text-red-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-purple-500', 'text-pink-500'], 
    }
  }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite'
       },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)',
          },
          '50%': {
            transform: 'translatey(-20px)',
          },
          '100%': {
            transform: 'translatey(0px)',
          },
        },
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [],
}
