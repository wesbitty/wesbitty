import Document, { Html, Head, Main, NextScript } from 'next/document'


const AnalyticsScripts = () => {
  if (process.env.NODE_ENV !== 'production') return null
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3CT19D49H" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Q3CT19D49H');
              `,
        }}
      />
    </>
  )
}


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-padding dark">
        <Head>
        <link rel="preload" href="/fonts/virgil.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <script async src="https://platform.twitter.com/widgets.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: /* js */ `
                const savedTheme = localStorage.getItem('theme') ?? 'system'

                if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
          `,
            }}
          />

          <AnalyticsScripts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument