/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    return `rgba(var(${variableName}), ${opacityValue || 1})`
  }
}

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
        primaryBg: withOpacity('--primaryBg'),
        onPrimaryBg: withOpacity('--onPrimaryBg'),
        mutedBg: withOpacity('--mutedBg'),
        onMutedBg: withOpacity('--onMutedBg'),
        accentBg: withOpacity('--accentBg'),
        onAccentBg: withOpacity('--onAccentBg'),
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
