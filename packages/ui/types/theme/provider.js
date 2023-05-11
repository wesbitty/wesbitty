import { jsx as _jsx } from 'react/jsx-runtime'
import { useMemo } from 'react'
import { createContext } from 'react'
import { defaultTheme } from '.'
import { mergeDeep } from '../utils/mergeDeep'
export const ThemeContext = createContext({
  theme: defaultTheme,
})
export const ThemeProvider = ({ children, theme: customTheme }) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)
  const value = useMemo(
    () => ({
      theme: mergedTheme,
    }),
    []
  )
  return _jsx(
    ThemeContext.Provider,
    Object.assign({ value: value }, { children: children })
  )
}
