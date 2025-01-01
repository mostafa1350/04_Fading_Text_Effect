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

// for using of 3-d utility, need to install "npm install -D tailwindcss-3d"