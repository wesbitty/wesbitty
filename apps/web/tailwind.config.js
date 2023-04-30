const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  content: [
    './[Post]/*.{md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.slate3'),
      dark: theme('colors.slate12', 'currentColor'),
    }),
    divideColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.slate3', 'currentColor'),
      dark: theme('colors.slate6', 'currentColor'),
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
        brand1: 'hsl(193, 100%, 98.8%)',
        brand2: 'hsl(193, 100%, 97.3%)',
        brand3: 'hsl(193, 99.0%, 94.7%)',
        brand4: 'hsl(193, 91.4%, 91.4%)',
        brand5: 'hsl(194, 82.0%, 86.6%)',
        brand6: 'hsl(194, 74.1%, 79.5%)',
        brand7: 'hsl(194, 72.3%, 69.6%)',
        brand8: 'hsl(193, 77.9%, 53.9%)',
        brand9: 'hsl(193, 98.0%, 70.0%)',
        brand10: 'hsl(193, 87.0%, 66.5%)',
        brand11: 'hsl(195, 100%, 31.5%)',
        brand12: 'hsl(195, 100%, 13.0%)',
        brandDark1: 'hsl(205, 45.0%, 8.6%)',
        brandDark2: 'hsl(202, 71.4%, 9.6%)',
        brandDark3: 'hsl(201, 74.6%, 12.2%)',
        brandDark4: 'hsl(201, 77.4%, 14.4%)',
        brandDark5: 'hsl(200, 80.3%, 16.5%)',
        brandDark6: 'hsl(200, 84.1%, 18.9%)',
        brandDark7: 'hsl(199, 90.2%, 22.1%)',
        brandDark8: 'hsl(198, 100%, 26.1%)',
        brandDark9: 'hsl(193, 98.0%, 70.0%)',
        brandDark10: 'hsl(192, 100%, 77.0%)',
        brandDark11: 'hsl(192, 85.0%, 55.8%)',
        brandDark12: 'hsl(198, 98.0%, 95.8%)',
        slate1: 'hsl(206, 30.0%, 98.8%)',
        slate2: 'hsl(210, 16.7%, 97.6%)',
        slate3: 'hsl(209, 13.3%, 95.3%)',
        slate4: 'hsl(209, 12.2%, 93.2%)',
        slate5: 'hsl(208, 11.7%, 91.1%)',
        slate6: 'hsl(208, 11.3%, 88.9%)',
        slate7: 'hsl(207, 11.1%, 85.9%)',
        slate8: 'hsl(205, 10.7%, 78.0%)',
        slate9: 'hsl(206, 6.0%, 56.1%)',
        slate10: 'hsl(206, 5.8%, 52.3%)',
        slate11: 'hsl(206, 6.0%, 43.5%)',
        slate12: 'hsl(206, 24.0%, 9.0%)',
        slateDark1: 'hsl(200, 7.0%, 8.8%)',
        slateDark2: 'hsl(195, 7.1%, 11.0%)',
        slateDark3: 'hsl(197, 6.8%, 13.6%)',
        slateDark4: 'hsl(198, 6.6%, 15.8%)',
        slateDark5: 'hsl(199, 6.4%, 17.9%)',
        slateDark6: 'hsl(201, 6.2%, 20.5%)',
        slateDark7: 'hsl(203, 6.0%, 24.3%)',
        slateDark8: 'hsl(207, 5.6%, 31.6%)',
        slateDark9: 'hsl(206, 6.0%, 43.9%)',
        slateDark10: 'hsl(206, 5.2%, 49.5%)',
        slateDark11: 'hsl(206, 6.0%, 63.0%)',
        slateDark12: 'hsl(210, 6.0%, 93.0%)',
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
      letterSpacing: {
        tighter: '-.04em',
      },
      fontFamily: {
        default: ['var(--font-inter)', ...fontFamily.sans],
        cal: ['var(--font-cal)', ...fontFamily.sans],
        title: ['var(--font-title)', ...fontFamily.sans],
        sans: [
          'custom-font',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: ['Office Code Pro', 'Source Code Pro', 'Menlo', 'monospace'],
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
            'h1, h2, h3, h4, h5': {
              fontWeight: '400',
            },
            h2: {
              fontWeight: '400',
            },
            p: {
              fontWeight: '400',
            },
            pre: {
              background: 'none',
              padding: 0,
              marginBottom: '32px',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '1rem',
            },
            'ul li': {
              position: 'relative',
            },
            'ul li::before': {
              position: 'absolute',
              top: '0.75rem',
              left: '-1rem',
              height: '0.125rem',
              width: '0.5rem',
              borderRadius: '0.25rem',
              backgroundColor: colors.slate7,
              content: '""',
            },
            ol: {
              paddingLeft: '1rem',
              counterReset: 'item',
              listStyleType: 'none',
            },
            'ol li': {
              display: 'block',
              position: 'relative',
              paddingLeft: '1rem',
            },
            'ol li::before': {
              position: 'absolute',
              top: '0.25rem',
              left: '-1rem',
              height: '1.2rem',
              width: '1.2rem',
              borderRadius: '0.25rem',
              backgroundColor: colors.slate3,
              border: `1px solid ${colors.slate5}`,
              content: 'counter(item) "  "',
              counterIncrement: 'item',
              fontSize: '12px',
              color: colors.slate9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          },
        },
      }),
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
