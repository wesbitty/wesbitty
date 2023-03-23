const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')

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
        gray: colors.gray,
        brand: colors.green,
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
      },
      width: {
        1536: '1536px',
      },
      height: {
        150: '37.5rem',
      },
      margin: {
        30: '7.5rem',
      },
      fontFamily: {
        default: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        cal: ['var(--font-cal)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
        mono: ['Consolas', ...defaultTheme.fontFamily.mono],
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
            '--tw-prose-body': theme('colors.slate[700]'),
            '--tw-prose-headings': theme('colors.slate[900]'),
            '--tw-prose-lead': theme('colors.slate[600]'),
            '--tw-prose-links': theme('colors.slate[900]'),
            '--tw-prose-bold': theme('colors.slate[900]'),
            '--tw-prose-counters': theme('colors.slate[500]'),
            '--tw-prose-bullets': theme('colors.slate[300]'),
            '--tw-prose-hr': theme('colors.slate[200]'),
            '--tw-prose-quotes': theme('colors.slate[900]'),
            '--tw-prose-quote-borders': theme('colors.slate[200]'),
            '--tw-prose-captions': theme('colors.slate[500]'),
            '--tw-prose-code': theme('colors.slate[900]'),
            '--tw-prose-pre-code': theme('colors.slate[200]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[300]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            '--tw-prose-invert-body': theme('colors.slate[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.slate[400]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate[400]'),
            '--tw-prose-invert-bullets': theme('colors.slate[600]'),
            '--tw-prose-invert-hr': theme('colors.slate[700]'),
            '--tw-prose-invert-quotes': theme('colors.slate[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.slate[700]'),
            '--tw-prose-invert-captions': theme('colors.slate[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.slate[300]'),
            '--tw-prose-invert-pre-bg': theme('rgb(0 0 0 / 50%)'),
            '--tw-prose-invert-th-borders': theme('colors.slate[600]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[700]'),
            // the following are typography overrides
            // reset all header font weights
            'h1, h2, h3, h4, h5': {
              fontWeight: '400',
              fontFamily: 'Cal Sans',
            },
            h2: {
              fontWeight: '400',
              fontFamily: 'Cal Sans',
            },
            p: {
              fontWeight: '400',
              fontFamily: 'Cal Sans',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
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
              backgroundColor: 'var(--colors-scale7)',
              content: '""',
            },
            ol: {
              paddingLeft: '1rem',
              counterReset: 'item',
              listStyleType: 'none',
            },
            'ol li': { display: 'block', position: 'relative', paddingLeft: '1rem' },
            'ol li::before': {
              position: 'absolute',
              top: '0.25rem',
              left: '-1rem',
              height: '1.2rem',
              width: '1.2rem',
              borderRadius: '0.25rem',
              backgroundColor: theme('colors.slate[300]'),
              border: '1px solid ' + theme('colors.slate[500]'),
              content: 'counter(item) "  "',
              counterIncrement: 'item',
              fontSize: '12px',
              color: theme('colors.slate[900]'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            'p img': {
              border: '1px solid ' + theme('colors.slate[400]'),
              borderRadius: '4px',
              overflow: 'hidden',
            },
            iframe: {
              border: '1px solid ' + theme('borderColor.DEFAULT'),
              borderRadius: theme('borderRadius.lg'),
            },
            td: {
              borderBottom: '1px solid ' + theme('colors.slate[400]'),
            },
            code: {
              fontWeight: '400',
              padding: '0.2rem 0.4rem',
              backgroundColor: theme('colors.slate[400]'),
              border: '1px solid ' + theme('colors.slate[500]'),
              borderRadius: theme('borderRadius.lg'),
              wordBreak: 'break-all',
            },
            a: {
              position: 'relative',
              transition: 'color 0.3s ease-in-out',
              paddingBottom: '2px',
              fontWeight: '400',
              color: theme('colors.slate[900]'),
              textDecorationLine: 'underline',
              textDecorationColor: theme('colors.brand[700]'),
              textDecorationThickness: '1px',
              textUnderlineOffset: '4px',
            },
            'a:hover': {
              textDecorationColor: theme('colors.brand[900]'),
            },
          },
        },
      }),
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
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
        'flash-code': {
          '0%': { backgroundColor: 'rgba(63, 207, 142, 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
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
    require('@tailwindcss/line-clamp'),
  ],
}
