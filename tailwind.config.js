/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primaryBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        accentBg: 'var(--accentBg)',
        onAccentBg: 'var(--onAccentBg)',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
