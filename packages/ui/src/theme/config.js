const deepMerge = require('deepmerge')
const customFormsPlugin = require('@tailwindcss/forms')
const colors = require('tailwindcss/colors')

const defaultcolors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: colors.black,
  white: colors.white,
  cyan: colors.cyan,
  teal: colors.teal,
  gray: colors.gray,
  emerald: colors.emerald,
  indigo: colors.indigo,
  yellow: colors.yellow,
  pink: colors.pink,
  red: colors.red,
  fuchsia: colors.fuchsia,
  rose: colors.rose,
  brown: colors.stone,
  slate: {
    50: '#f8fafc',
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
  lime: colors.lime,
  amber: colors.amber,
  orange: colors.orange,
  violet: colors.violet,
  green: colors.green,
  neutral: colors.neutral,
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
  'cool-gray': {
    50: '#fbfdfe',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cfd8e3',
    400: '#97a6ba',
    500: '#64748b',
    600: '#475569',
    700: '#364152',
    800: '#27303f',
    900: '#1a202e',
  },
}

const backgroundOpacity = (theme) => ({
  10: '0.1',
  ...theme('opacity'),
})

const maxHeight = (theme) => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
})

const windmillConfig = {
  darkMode: 'class',
  purge: {
    content: ['./stories/theme/globalTheme.ts'],
  },
  theme: {
    defaultcolors,
    backgroundOpacity,
    maxHeight,
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'odd', 'dark'],
    display: ['responsive', 'dark'],
    textColor: [
      'responsive',
      'focus',
      'focus-within',
      'hover',
      'active',
      'dark',
    ],
    placeholderColor: ['responsive', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    divideColor: ['responsive', 'dark'],
    boxShadow: ['responsive', 'hover', 'focus', 'dark'],
    margin: ['responsive', 'last'],
  },
  plugins: [customFormsPlugin],
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc
    return [...acc, cur]
  }, [])
}

/**
 * Merge Wesbitty and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }
  return deepMerge({ ...tailwindConfig, purge }, windmillConfig, {
    arrayMerge: arrayMergeFn,
  })
}

module.exports = wrapper
