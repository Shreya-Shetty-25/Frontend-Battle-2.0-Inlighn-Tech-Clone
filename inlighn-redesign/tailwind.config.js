/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
  keyframes: {
  waveChar: {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
  slideBg: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "100% center" },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        drop: {
      '0%': { transform: 'translateY(-100px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
},

animation: {
  waveChar: 'waveChar 0.6s ease',
  slideBg: "slideBg 2.5s ease forwards",
    'slide-lottie': 'slide 40s ease-in-out infinite',
    'drop-in': 'drop 1s ease-out forwards',
    'spin-slow': 'spin 2s linear infinite',
}

}
,
  },
  plugins: [],
}

