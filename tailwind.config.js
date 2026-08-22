/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B1120',
          secondary: '#111827',
          card: '#172033',
        },
        light: {
          DEFAULT: '#F7F9FC',
          secondary: '#FFFFFF',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
        inkLight: {
          DEFAULT: '#0F172A',
          muted: '#475569',
        },
        accent: {
          DEFAULT: '#38BDF8',
          soft: '#818CF8',
        },
        success: '#22C55E',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(56,189,248,0.25), 0 0 40px -10px rgba(56,189,248,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
