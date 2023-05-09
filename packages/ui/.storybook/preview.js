// import css for san serif font styling
import './preview.css'
import { ThemeProvider } from '../src/theme/provider'
import defaultTheme from '../src/theme/default'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
