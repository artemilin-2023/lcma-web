/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neonPurple: '#B388FF',
        neonPink: '#FF9EDA',
        neonBlue: '#8EBBFF',
        darkPurple: '#37248F',
        darkBlue: '#1A092D',
        accentPink: '#E880FC',
      },
      boxShadow: {
        neon: '0 0 5px var(--neon-purple), 0 0 10px var(--neon-purple)',
        neonHover: '0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'neon-pulse': 'neonPulse 3s infinite',
        'neon-flicker': 'neonFlicker 3s infinite alternate',
        'floating': 'floatingAnimation 3s ease-in-out infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px #B388FF) drop-shadow(0 0 4px #B388FF)' },
          '50%': { filter: 'drop-shadow(0 0 5px #B388FF) drop-shadow(0 0 10px #B388FF)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 5px #B388FF, 0 0 10px #B388FF, 0 0 20px #B388FF',
          },
          '20%, 24%, 55%': { textShadow: 'none' },
        },
        floatingAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropFilter: {
        'blur-sm': 'blur(5px)',
      },
    },
  },
  plugins: [],
} 