/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '.75rem',
          sm: '1rem',
          lg: '2.5rem',
          xl: '4.5rem',
          '2xl': '7rem',
        },
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        'purple-blue': {
          100: '#EAE8FF',
          200: '#D6D3FF',
          300: '#B9B0FF',
          400: '#9683FF',
          500: '#591ff9', // primary color
          600: '#551CE5',
          700: '#4817C0',
          800: '#3C159D',
          900: '#220A6B',
        },
        // Other colors...
        primary: "#591ff9",
        success: "#00B574",
        warning: "#FFB547",
        error: "#E31A1A",
        'primary-grey': "#E0E5F2",
        'placeholder-grey': "#8F9BBA",
      },
      boxShadow: {
        main: '0px 32px 64px -12px rgba(85, 105, 135, 0.13);',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
