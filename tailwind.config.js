/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0A0E17',
          secondary: '#121827',
          tertiary: '#1E2436',
        },
        accent: {
          blue: '#00C8FF',
          green: '#39FF14',
          purple: '#B026FF',
        },
        status: {
          success: '#00E676',
          warning: '#FFD600',
          error: '#FF3D71',
        },
        chart: {
          profit: '#00E676',
          loss: '#FF3D71',
          neutral: '#757575',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 200, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 200, 255, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};