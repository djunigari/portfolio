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
        base: 'var(--base)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        inverted: 'var(--inverted)',
        vivid: 'var(--vivid)',
        primary: 'var(--primary)',
        second: 'var(--second)',
        fill: 'var(--fill)',
        cancel: 'var(--cancel)',
        reset: 'var(--reset)',
        submit: 'var(--submit)',
        warning: 'var(--warning)',
        alert: 'var(--alert)',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
