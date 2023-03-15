import Head from 'next/head'
import React from 'react'
import { ColorSchemeProvider } from '~/components/ColorScheme/ColorSchemeProvider'
import { Metadata } from '~/wesbitty/utils/schemas/Metadata'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import cx from 'classnames'
import type { AppProps } from 'next/app'
// Import Website Fonts
import { cal, inter } from '~/styles/fonts'
// Import Website styles
import '~/styles/index.css'
import '~/styles/globals.css'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const Title = `${Metadata.Description} | ${Metadata.Name}`
  const { basePath } = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicon/apple-touch-icon.png`}
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
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <link rel="shortcut icon" href={`${basePath}/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta
          name="msapplication-config"
          content={`${basePath}/favicon/browserconfig.xml`}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${basePath}/rss.xml`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${basePath}/favicon/favicon.ico`}
        />
        <link rel="apple-touch-icon" href={`${basePath}/favicon/favicon.ico`} />
      </Head>
      <DefaultSeo
        title={Title}
        description={Metadata.Description}
        openGraph={{
          type: 'website',
          url: 'https://wesbitty.com/',
          site_name: 'Wesbitty Inc',
          images: [
            {
              url: `https://wesbitty.com${basePath}/Logo/og/wesbitty-og.jpg`,
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
      <SessionProvider session={session}>
        <ColorSchemeProvider>
          <main className={cx(cal.variable, inter.variable)}>
            <Component {...pageProps} />
            <Analytics />
          </main>
        </ColorSchemeProvider>
      </SessionProvider>
    </>
  )
}
