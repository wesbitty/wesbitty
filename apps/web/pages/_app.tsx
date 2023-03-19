import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import Head from 'next/head'
import { Metadata } from '~/feed/metadata'
import { DefaultSeo } from 'next-seo'
import { cal, inter } from '~/styles/fonts'
import cx from 'classnames'
import '~/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {

  return (
    <SessionProvider session={session}>
      <main className={cx(cal.variable, inter.variable)}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </SessionProvider>
  )
}
