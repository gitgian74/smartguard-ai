/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navy-sofisticato': '#1a365d',
        'verde-tecnologico': '#059669',
        'apple-gray': {
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#a1a1a6',
          500: '#86868b',
          600: '#6d6d70',
          700: '#515154',
          800: '#3a3a3c',
          900: '#1d1d1f',
        },
        dark: {
          DEFAULT: '#1e293b',
          light: '#334155',
          lighter: '#475569',
        }
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          lighter: '#334155',
        }
      },
      textColor: {
        dark: {
          DEFAULT: '#f8fafc',
          light: '#e2e8f0',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

