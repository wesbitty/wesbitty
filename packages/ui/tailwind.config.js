const ui = require('./src/theme/config')
const colors = require('tailwindcss/colors')

module.exports = ui({
  purge: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/*.{js,ts,jsx,tsx,html,mdx}',
    './src/theme/globalTheme.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        primary: {
          light: 'white',
          dark: '#181818',
        },
        secondary: {
          light: '#F1F5F9',
          dark: '#1f1f1f',
        },
        secondaryText: {
          light: '#71767F',
          dark: '#878787',
        },
        alt: {
          light: '#F8FAFC',
          dark: '#2a2a2a',
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
        UIbg: {
          default: {
            50: '#f3f4f6',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          primary: {
            50: '#e0f2fe',
            100: '#bae6fd',
            200: '#7dd3fc',
            300: '#38bdf8',
            400: '#60a5fa',
            500: '#0ea5e9',
            600: '#3b82f6',
            700: '#0284c7',
            800: '#2563eb',
            900: '#0369a1',
          },
          secondary: {
            50: '#fce7f3',
            100: '#fbcfe8',
            200: '#f9a8d4',
            300: '#f472b6',
            400: '#ec4899',
            500: '#f43f5e',
            600: '#db2777',
            700: '#e11d48',
            800: '#be123c',
            900: '#9f1239',
          },
          alternative: {
            50: '#82dab0',
            100: '#82dab0',
            200: '#69d3a0',
            300: '#50cb90',
            400: '#C5F1DD',
            500: '#9FE7C7',
            600: '#65D9A5',
            700: '#3ECF8E',
            800: '#24b47e',
            900: '#2c9c6a',
          },
        },

        /* typography */
        typography: {
          body: {
            light: '#4B5563',
            dark: '#eeeeee',
            secondary: {
              light: '#6B7280',
              dark: '#bbbbbb',
            },
            strong: {
              light: '#F3F4F6',
              dark: 'white',
            },
            faded: {
              light: '#9CA3AF',
              dark: '#666666',
            },
          },
        },

        // INPUT
        input: {
          value: {
            light: '#4B5563',
            dark: '#e0e0e0',
          },
          placeholder: {
            light: '#D1D5DB',
            dark: '#666666',
          },
          label: {
            light: '#4B5563',
            dark: '#e0e0e0',
          },
          border: {
            light: '#D1D5DB',
            dark: '#444444',
            hover: {
              light: '#9CA3AF',
              dark: '#666666',
            },
            focus: {
              light: '#38bdf8',
              dark: '#38bdf8',
            },
          },
        },
      },

      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
})
