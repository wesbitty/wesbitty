import { useState, useEffect } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

export const Default = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const { hideHeader = false, hideFooter = false, children } = props

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <>
      {!hideHeader && <Header />}
      <div className="min-h-screen bg-stone-50 dark:bg-gray-800">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer />}
    </>
  )
}
