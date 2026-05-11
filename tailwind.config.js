/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        premium: {
          bg: '#050000', // Deep Onyx
          card: '#120202', // Darker card background
          accent: '#FF0000', // Pure Red
          primary: '#DC2626', // Red-600
          secondary: '#991B1B', // Red-800
          muted: '#450a0a', // Very dark red
          text: '#FCA5A5', // Light red for text
        },
        neon: {
          blue: '#00d4ff',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          green: '#10b981',
          pink: '#ec4899',
        },
        dark: {
          600: '#475569',
        },
        glass: {
          dark: 'rgba(15, 23, 42, 0.7)',
          light: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
          to: { textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
        'neon-lg': '0 0 40px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
}
