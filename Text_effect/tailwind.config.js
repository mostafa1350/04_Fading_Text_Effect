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
    extend: {
      keyframes:{
        wiggle:{
          '0%': { transform: 'perspective-500 rotateX(0deg) rotate(25deg)' },
          '100%': { transform: 'perspective-500 rotateX(360deg) rotate(25deg)' },
        },
        Animation:{
          wiggle: 'wiggle 25s linear infinite'
 
       },

      }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
  
}

// for using of 3-d utility, need to install "npm install -D tailwindcss-3d"