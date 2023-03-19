import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import { ColorSchemeProvider } from 'components/ColorScheme'
import Head from 'next/head'
import { Metadata } from '~/feed/metadata'
import { DefaultSeo } from 'next-seo'
import { cal, inter } from '~/styles/fonts'
import cx from 'classnames'
import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const { basePath } = useRouter()
  const Title = `${Metadata.Description} - ${Metadata.Name}`

  return (
    <>
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
            width: 800, height: 600, alt: 'Wesbitty Og Image',
          },
        ],
      }}
      twitter={{
        handle: '@wesbitty', site: '@wesbitty', cardType: 'summary_large_image',
      }} />
         <ColorSchemeProvider attribute="class" defaultTheme={Metadata.Theme}>
        <SessionProvider session={session}>
        <main className={cx(cal.variable, inter.variable)}>
          <Component {...pageProps} />
        </main>
        <Analytics />
      </SessionProvider>
      </ColorSchemeProvider>
      </>
  )
}
