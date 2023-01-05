import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import { Metadata } from '../@wesbitty/utils/Meta/Metadata'
import { ThemeProvider } from 'next-themes'
import { post } from '../@wesbitty/lib/fetchWrapper'
import Head from 'next/head'

// Import Website styles
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
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

  const siteTitle = `${Metadata.Description} | ${Metadata.siteName}`
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicons/site.webmanifest`} />
        <link rel="shortcut icon" href={`${basePath}/favicons/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta name="msapplication-config" content={`${basePath}/favicons/browserconfig.xml`} />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <link rel="icon" type="image/png" href={`${basePath}/favicons/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/favicons/favicon.ico`} />
      </Head>
      <DefaultSeo
        title={siteTitle}
        description={Metadata.Description}
        openGraph={{
          type: 'website',
          url: 'https://wesbitty.com/',
          site_name: 'Wesbitty',
          images: [
            {
              url: `https://wesbitty.com${basePath}/images/og/og-image.jpg`,
              width: 800,
              height: 600,
              alt: 'Wesbitty Og Image',
            },
          ],
        }}
        twitter={{
          handle: '@wesbitty',
          site: '@wesbitty',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider attribute="class" defaultTheme={Metadata.Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
