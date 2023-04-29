import { Preview } from '@storybook/react'
import './preview.css'
import { ThemeProvider } from './../src/theme/Provider'
import globalTheme from '../src/theme/globalTheme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
{
  decorators: {
    ;(Story) => {
      return
      ThemeProvider: globalTheme
    }
  }
}

export default preview
