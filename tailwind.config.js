/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1A73E8',
          darkBlue: '#0D47A1',
          lightBlue: '#4285F4'
        },
        secondary: {
          gray: '#3C4043',
          silver: '#E8EAED',
          darkGray: '#202124',
          lightGray: '#5F6368'
        },
        accent: {
          green: '#34A853',
          purple: '#8A2BE2'
        }
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.8s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        'slide-in': {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}