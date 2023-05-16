import React, { useLayoutEffect, useMemo } from 'react'
import defaultTheme from './default'
import { mergeDeep } from '../utils/mergeDeep'
import useDarkMode from '../utils/useDarkMode'

interface ThemeContextInterface {
  theme: any
  mode?: Mode
  toggleMode?: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: defaultTheme,
})

interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /**
   * Defines the styles used throughout the library
   */
  theme?: object
  /**
   * Defines dark mode as the default theme
   */
  dark?: boolean
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  usePreferences?: boolean
}

export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: customTheme,
  dark,
  usePreferences = false,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences)

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark')
      }
      document.documentElement.classList.add(`dark`)
    }
  }, [dark])

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
