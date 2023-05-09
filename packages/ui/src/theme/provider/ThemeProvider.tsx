import React, { useLayoutEffect, useMemo } from 'react'
import { createContext } from 'react'
import defaultTheme from '../default'
import { mergeDeep } from '../../utils/mergeDeep'

interface ThemeContextInterface {
  theme?: any
  // mode?: 'light' | 'dark'
  // toggleMode?: any
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
  // mode: 'light',
  // toggleMode: true,
})

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /**
   * Defines the styles used throughout the library
   */
  theme?: object
  /**
   * Defines dark mode as the default theme
   */
  // dark?: boolean
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  // usePreferences?: boolean
}

const ThemeProvider: React.FC<Props> = ({
  children,
  theme: customTheme,
  // dark,
  // usePreferences = false,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      // mode,
      // toggleMode,
    }),
    []
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
