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
    extend: {
      // https://www.esz.co.jp/blog/2766.html
      backgroundColor: {
        'gradient-dots': 'var(--b3)',
      },
      backgroundImage: {
        'gradient-dots': 'radial-gradient(hsl(var(--b1)) 1px, transparent 0)',
        'gradient-linear':
          'repeating-linear-gradient(-45deg,transparent,transparent 2px,black 4px,black 4px)',
      },
      backgroundSize: {
        'gradient-dots': '2px 2px',
      },
      backgroundPosition: {
        'gradient-dots': '0 0',
      },
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
