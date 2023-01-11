import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Metadata } from '../@wesbitty/utils/schemas/Metadata'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Metadata.Locale} className="dark">
        <Head>
          <script async src="https://platform.twitter.com/widgets.js" />
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
