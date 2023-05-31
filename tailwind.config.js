/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const daisyuiThemes = require('./src/json/themes/themes.json')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
      sm: '675px',
    },
  },

  daisyui: {
    themes: daisyuiThemes.themes,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },

  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
