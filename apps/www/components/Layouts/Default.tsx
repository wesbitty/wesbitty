import { useState, useEffect } from 'react'
import Nav from '../Navigation/index'
import Footer from '../Footer/index'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { hideHeader = false, hideFooter = false, children } = props
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('wesbittyDMToggle')
    if (isDarkMode) {
      setDarkMode(isDarkMode === 'true')
      document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
    }
  }, [])

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? 'dark' : ''
    setDarkMode(isDarkMode)
  }

  return (
    <>
      {!hideHeader && <Nav darkMode={darkMode} />}
      <div className="min-h-screen bg-white dark:bg-gray-800">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer darkMode={darkMode} />}
    </>
  )
}

export default DefaultLayout
