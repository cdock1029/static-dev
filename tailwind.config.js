const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{jsx,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ["'Playfair Display'", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
