import Head from 'next/head'
import { Metadata } from '../@wesbitty/lib/Metadata'
import Meta from '../@wesbitty/lib/favicon'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { post } from '../@wesbitty/lib/fetchWrapper'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { ClientReload } from '../components/ClientReload'
import Analytics from '../@wesbitty/analytics'
// Import Website styles
import '../styles/index.css'


const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function telemetry() {
    return post(`https://wesbitty.com/platform/telemetry/page`, {
      referrer: document.referrer,
      title: document.title,
    })
  }

  useEffect(() => {
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!router.asPath.includes('?')) {
      telemetry()
    }
  }, [])

  useEffect(() => {
    function handleRouteChange() {
      telemetry()
    }

    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const { basePath } = useRouter()

  return (
    <>
    <ThemeProvider attribute="class" defaultTheme={Metadata.Theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
       <Analytics />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
