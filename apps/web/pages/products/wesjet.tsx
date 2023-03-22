import { Default } from '~/Widget/Default'
import Container from '~/Widget/Container'
import { Hero } from '~/components/Features/Hero'
import { useRouter } from 'next/router'
import { Metadata } from '~/utils/Metadata'
import { NextSeo } from 'next-seo'

const WesjetPage = () => {
  const router = useRouter()
  const pageTitle = `Product • Wesjet • ${Metadata.Name}`
  const Description = 'Get Wesjet documentation here.'

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={Description}
        openGraph={{
          title: pageTitle,
          description: Description,
          url: `${Metadata.Url}/${router.pathname}`,
          images: [
            {
              url: `${Metadata.Url}/brand/og-image.png`,
            },
          ],
        }}
      />
      <Default></Default>
    </>
  )
}

export default WesjetPage
