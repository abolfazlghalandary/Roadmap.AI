/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        roadMove: {
          '0%': { transform: 'translateZ(0)' },
          '100%': { transform: 'translateZ(1000px)' },
        },
      },
      animation: {
        'road-move': 'roadMove 5s linear infinite',
      },
    },
  },
  plugins: [],
}

