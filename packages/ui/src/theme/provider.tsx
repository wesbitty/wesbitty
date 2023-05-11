import React, { useLayoutEffect, useMemo } from 'react'
import { createContext, useContext } from 'react'
import { defaultTheme } from '.'
import { mergeDeep } from '../utils/mergeDeep'

interface ThemeContextInterface {
  darkMode?: boolean
  theme?: any
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
})

export const useTheme = () => useContext(ThemeContext)
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  theme?: object
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme: customTheme,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme)

  const value = useMemo(
    () => ({
      theme: mergedTheme,
    }),
    []
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
