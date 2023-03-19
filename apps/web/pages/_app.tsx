import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { Metadata } from '~/schemas/metadata'
import { DefaultSeo } from 'next-seo'
import '~/styles/main.css'
import '~/styles/globals.css'
import { ThemeProvider } from '~/components/ColorScheme'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import type { Session } from 'next-auth'
import { cal, inter } from '~/styles/fonts'
import cx from 'classnames'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const { basePath } = useRouter()
  const Title = `${Metadata.Description} - ${Metadata.Name}`

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/brand/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/brand/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/brand/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/brand/favicons/site.webmanifest`} />
        <link rel="shortcut icon" href={`${basePath}/brand/favicons/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta
          name="msapplication-config"
          content={`${basePath}/brand/favicons/browserconfig.xml`}
        />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/rss.xml`} />
        <link rel="icon" type="image/png" href={`${basePath}/brand/favicons/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/brand/favicons/favicon.ico`} />
      </Head>
      <DefaultSeo
        title={Title}
        description={`${Metadata.Description}`}
        openGraph={{
          type: 'website',
          url: 'https://wesbitty.com/',
          site_name: 'Wesbitty Inc',
          images: [
            {
              url: `https://wesbitty.com${basePath}/brand/og/wesbitty-og.jpg`,
              width: 800,
              height: 600,
              alt: 'Wesbitty Og Image',
            },
          ],
        }}
        twitter={{ handle: '@wesbitty', site: '@wesbitty', cardType: 'summary_large_image' }}
      />
      <ThemeProvider>
        <SessionProvider session={session}>
          <main className={cx(cal.variable, inter.variable)}>
            <Component {...pageProps} />
          </main>
          <Analytics />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
