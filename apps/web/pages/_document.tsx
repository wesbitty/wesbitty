import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=M84NKRBNS8"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'M84NKRBNS8');
        `}
          </Script>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
