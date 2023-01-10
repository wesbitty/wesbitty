import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Metadata } from '../@wesbitty/utils/schemas/Metadada'


class MyDocument extends Document {
  render() {
    return (
      <Html lang="{Metadata.Locale}" className="scroll-padding">
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
