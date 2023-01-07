import Head from 'next/head'
import { useRouter } from 'next/router'

const iMeta = () => {
  const { basePath } = useRouter()
  return (
    <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicons/apple-touch-icon.png`}
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
          href={`${basePath}/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicons/site.webmanifest`} />
        <link rel="shortcut icon" href={`${basePath}/favicons/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta name="msapplication-config" content={`${basePath}/favicons/browserconfig.xml`} />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <link rel="icon" type="image/png" href={`${basePath}/favicons/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${basePath}/favicons/favicon.ico`} />
    </Head>
  )
}

export default iMeta