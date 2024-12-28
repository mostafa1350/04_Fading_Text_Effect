/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Times New Roman','ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}