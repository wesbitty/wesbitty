import { useEffect } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

export const Default = (props: Props) => {
  const { hideHeader = false, hideFooter = false, children } = props

  useEffect(() => {
    const key = localStorage.getItem('wesbittyAppMode')
    if (!key) {
      // Default to dark mode if no preference config
      document.documentElement.className = 'dark'
    } else {
      document.documentElement.className = key === 'true' ? 'dark' : ''
    }
  }, [])

  return (
    <>
      {!hideHeader && <Header />}
      <div className="min-h-screen bg-white dark:bg-gray-800">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer />}
    </>
  )
}
