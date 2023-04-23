import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import { cal, inter } from '~/styles/fonts'
import cx from 'classnames'
import { useRouter } from 'next/router'
import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { Metadata } from '~/utils/Metadata'
import { DefaultSeo } from 'next-seo'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const { basePath } = useRouter()
  const AppTitle = `${Metadata.Description} - ${Metadata.Name}`

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        title={AppTitle}
        description={`${Metadata.Description}`}
        openGraph={{
          type: 'website',
          url: `${Metadata.Url}`,
          site_name: `${Metadata.Name}`,
          images: [
            {
              url: `${Metadata.Url}${basePath}/brand/og-image.png`,
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
        <main className={cx(cal.variable, inter.variable)}>
          <Component {...pageProps} />
        </main>
        <Analytics />
      </SessionProvider>
    </>
  )
}
