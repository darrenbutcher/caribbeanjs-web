module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
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
