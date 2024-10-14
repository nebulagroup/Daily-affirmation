/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0f172a',
        'midnight-blue': '#1e3a8a',
        'lavender': '#a78bfa',
        'sky-blue': '#60a5fa',
      },
    },
  },
  plugins: [],
};