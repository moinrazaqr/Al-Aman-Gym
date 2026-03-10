export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-black': '#0a0a0a',
        'gym-red':   '#e31b23',
        'gym-red-dark': '#b8151b',
        'gym-white': '#ffffff',
        'gym-gray':  '#1a1a1a',
        'gym-gray-2': '#242424',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'pulse-ring': 'pulseRing 1.5s ease-out infinite',
        'float':      'float 3s ease-in-out infinite',
        'count-up':   'countUp 1s ease-out forwards',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'red-sm':  '0 0 12px rgba(227, 27, 35, 0.3)',
        'red-md':  '0 0 24px rgba(227, 27, 35, 0.4)',
        'red-lg':  '0 0 40px rgba(227, 27, 35, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}