/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#E0F2F1',
          100: '#B2DFDB',
          400: '#26A69A',
          600: '#00897B',
          700: '#00695C',
          800: '#004D40',
          900: '#002B22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
