const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './[blog]/**/*.{md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './wesbitty/lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      dark: theme('colors.gray.600', 'currentColor'),
    }),
    divideColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      dark: theme('colors.gray.600', 'currentColor'),
    }),
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        current: 'currentColor',
        success: '#0070f3',
        cyan: '#79FFE1',
        'gray-light': '#7B7F86',
        'gray-dark': '#7B7F86',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        brand: colors.blue,
        dark: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
        gray: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
      },
      width: {
        1536: '1536px',
      },
      lineHeight: {
        tight: 1.2,
      },
      height: {
        150: '37.5rem',
      },
      margin: {
        30: '7.5rem',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        default: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        cal: ['var(--font-cal)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
        sans: [
          'custom-font',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['Source Code Pro', 'Menlo', 'monospace'],
      },
      stroke: (theme) => ({
        white: theme('colors.white'),
        black: theme('colors.black'),
      }),
      boxShadow: {
        'light-small': '0px 4px 8px 2px rgba(107, 114, 128, 0.08)',
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        override: '0px 0px 0px rgba(0, 0, 0, 0)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }),
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          '15%': { transform: 'translateX(-6px) rotate(-6deg)' },
          '30%': { transform: 'translateX(9px) rotate(6deg)' },
          '45%': { transform: 'translateX(-9px) rotate(-3.6deg)' },
          '60%': { transform: 'translateX(3px) rotate(2.4deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-1.2deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.8s both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
