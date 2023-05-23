/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

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
    },
    extend: {
      colors: {
        primaryBg: 'var(--primaryBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        mutedBg: 'var(--mutedBg)',
        onMutedBg: 'var(--onMutedBg)',
        accentBg: 'var(--accentBg)',
        onAccentBg: 'var(--onAccentBg)',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
