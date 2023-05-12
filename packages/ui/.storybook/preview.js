// import css for san serif font styling
import './preview.css'
import { defaultTheme, ThemeProvider } from '../src/theme'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  },
]
