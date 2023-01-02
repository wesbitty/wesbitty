import Head from 'next/head'
import { APP_NAME, DESCRIPTION } from '../@wesbitty/lib/constants'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Meta from '../@wesbitty/siteMetadata'
import '../styles/index.css'
import { post } from '../@wesbitty/lib/fetchWrapper'
import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ThemeProvider } from 'next-themes'



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

  const site_title = `We've Got Your WishList | ${APP_NAME}`
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Meta />
      <DefaultSeo
        title={site_title}
        description={DESCRIPTION}
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
      <ThemeProvider attribute="class">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  )
}
