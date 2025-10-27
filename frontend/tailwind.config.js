/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'IBM Plex Mono', 'Roboto Mono', 'Fira Mono', 'monospace'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Roboto Mono', 'Fira Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'depth-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'depth': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'depth-lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'depth-xl': '0 12px 32px rgba(0, 0, 0, 0.18)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

