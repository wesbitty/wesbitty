import Head from 'next/head'
import { useRouter } from 'next/router'


const siteMetadata = () => {
  const { basePath } = useRouter()
  return (
    <Head> 
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
      <meta name="msapplication-config" content={`${basePath}/favicon/browserconfig.xml`} />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f0f2f5" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1E1E1E" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <link rel="icon" type="image/png" href={`${basePath}/favicon/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${basePath}/favicon/favicon.ico`} />
    </Head>
  )
}

export default siteMetadata