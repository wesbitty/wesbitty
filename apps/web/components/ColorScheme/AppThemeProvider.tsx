import { createContext, useContext, useEffect, useState } from 'react'

interface UseThemeProps {
  AppMode?: boolean
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children?: any
}

export const ThemeContext = createContext<UseThemeProps>({
  AppMode: true,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [AppMode, setAppMode] = useState(false)

  useEffect(() => {
    const key = localStorage.getItem('wesbittyAppMode')
    // Default to dark mode if no preference config
    setAppMode(!key || key === 'true')
  }, [])

  const toggleTheme = () => {
    setAppMode(!AppMode)
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          AppMode,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  )
}
