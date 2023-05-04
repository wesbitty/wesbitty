import { useState, useEffect } from 'react'
import { Header } from './Header'
import Footer from './Footer/index'
import { SearchProvider } from './Header/SearchContext'

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
      <SearchProvider>
        {!hideHeader && <Header />}
        <div className="flex min-h-screen flex-col justify-between bg-slate-200">
          <main
            className="relative pt-16"
            style={{ scrollPaddingTop: '150px' }}
          >
            {children}
          </main>
          {!hideFooter && <Footer />}
        </div>
      </SearchProvider>
    </>
  )
}
