const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  content: [
    './[Post]/**/*.{md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
        white: colors.white,
        black: colors.black,
        'gray-light': '#7B7F86',
        'gray-dark': '#7B7F86',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        brand: {
          100: 'hsl(206, 100%, 99.2%)',
          200: 'hsl(210, 100%, 98.0%)',
          300: 'hsl(209, 100%, 96.5%)',
          400: 'hsl(210, 98.8%, 94.0%)',
          500: 'hsl(209, 95.0%, 90.1%)',
          600: 'hsl(209, 81.2%, 84.5%)',
          700: 'hsl(208, 77.5%, 76.9%)',
          800: 'hsl(206, 81.9%, 65.3%)',
          900: 'hsl(206, 100%, 50.0%)',
          1000: 'hsl(208, 100%, 47.3%)',
          1100: 'hsl(211, 100%, 43.2%)',
          1200: 'hsl(211, 100%, 15.0%)',
        },
        slate: {
          100: 'hsl(206, 30.0%, 98.8%)',
          200: 'hsl(210, 16.7%, 97.6%)',
          300: 'hsl(209, 13.3%, 95.3%)',
          400: 'hsl(209, 12.2%, 93.2%)',
          500: 'hsl(208, 11.7%, 91.1%)',
          600: 'hsl(208, 11.3%, 88.9%)',
          700: 'hsl(207, 11.1%, 85.9%)',
          800: 'hsl(205, 10.7%, 78.0%)',
          900: 'hsl(206, 6.0%, 56.1%)',
          1000: 'hsl(206, 5.8%, 52.3%)',
          1100: 'hsl(206, 6.0%, 43.5%)',
          1200: 'hsl(206, 24.0%, 9.0%)',
        },
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
          50: '#f9fafb',
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
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontFamily: {
        default: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        cal: ['var(--font-cal)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
        mono: ['Consolas', ...defaultTheme.fontFamily.mono],
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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Cal Sans',
            },
            h2: {
              fontFamily: 'Cal Sans',
            },
            h3: {
              fontFamily: 'Cal Sans',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          'flash-code': {
            '0%': { backgroundColor: 'rgba(63, 207, 142, 0.1)' },
            '100%': { backgroundColor: 'transparent' },
          },
          '15%': { transform: 'translateX(-6px) rotate(-6deg)' },
          '30%': { transform: 'translateX(9px) rotate(6deg)' },
          '45%': { transform: 'translateX(-9px) rotate(-3.6deg)' },
          '60%': { transform: 'translateX(3px) rotate(2.4deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-1.2deg)' },
        },
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
      }),
      animation: {
        wiggle: 'wiggle 0.8s both',
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function ({ addUtilities, addVariant }) {
      addUtilities({
        // prose (tailwind typography) helpers
        // useful for removing margins in prose styled sections
        '.prose--remove-p-margin p': {
          margin: '0',
        },
      })
    },
  ],
}
