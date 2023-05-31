import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Typography } from 'ui'
import Container from '~/components/widget/Container'
import { Default } from '~/components/widget/Default'
import { Section } from '~/components/widget/Section'
import { Metadata } from '~/utils/Metadata'

const { Title, Text } = Typography

const WesjetPage = () => {
  const router = useRouter()
  const pageTitle = `Product • Wesjet • ${Metadata.Name}`
  const Description = 'Wesjet Documentation'

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
      <Default>
        <Container>
          <Section className="pb-0 md:pb-0 lg:pb-0">
            <div className="grid lg:grid-cols-2">
              <div>
                <Title>Wesjet</Title>
                <Title level={3}>Wesjet Api documentation.</Title>
                <Text>
                  Wesjet is a content preprocessor that validates and transforms
                  your content into type-safe JSON you can easily import into
                  your application.
                </Text>
              </div>
            </div>
          </Section>
        </Container>
      </Default>
    </>
  )
}

export default WesjetPage
