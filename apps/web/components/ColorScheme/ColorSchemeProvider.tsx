import { createContext, useContext, useEffect, useState } from 'react'

interface ColorSchemeProps {
  ThemeMode?: boolean
  updateThemeMode: () => void
}

interface ColorSchemeProviderProps {
  children?: any
}

export const ColorSchemeContext = createContext<ColorSchemeProps>({
  ThemeMode: true,
  updateThemeMode: () => {},
})

export const IMode = () => useContext(ColorSchemeContext)

export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const [ThemeMode, setIsThemeMode] = useState(false)

  useEffect(() => {
    const key = localStorage.getItem('wesbittyThemeMode')
    setIsThemeMode(!key || key === 'true')
  }, [])

  const updateThemeMode = () => {
    setIsThemeMode(!ThemeMode)
  }

  return (
    <>
      <ColorSchemeContext.Provider
        value={{
          ThemeMode,
          updateThemeMode,
        }}
      >
        {children}
      </ColorSchemeContext.Provider>
    </>
  )
}
