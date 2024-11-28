/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'glitch': 'glitch 0.2s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-reverse': 'rotateReverse 20s linear infinite',
        'scroll': 'scroll 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch-text': 'glitchText 3s infinite',
        'ripple': 'ripple 3s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',
        'wave': 'wave 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSoft 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fall': 'fall 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        rotateReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        glitchText: {
          '0%, 100%': { transform: 'none', opacity: 1 },
          '7%': { transform: 'skew(-0.8deg, -0.7deg)', opacity: 0.75 },
          '10%': { transform: 'none', opacity: 1 },
          '27%': { transform: 'none', opacity: 1 },
          '30%': { transform: 'skew(0.6deg, -0.4deg)', opacity: 0.75 },
          '35%': { transform: 'none', opacity: 1 },
          '52%': { transform: 'none', opacity: 1 },
          '55%': { transform: 'skew(-1deg, 0.2deg)', opacity: 0.75 },
          '50%': { transform: 'none', opacity: 1 },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2)', opacity: 0 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};