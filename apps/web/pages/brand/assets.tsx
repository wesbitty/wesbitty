import Container from '~/components/widget/Container'
import { Default } from '~/components/widget/Default'
import { Button, Typography, IconDownload } from '@wesbitty/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Section } from '~/components/widget/Section'
import { NextSeo } from 'next-seo'
import { Metadata } from '~/utils/Metadata'
import Image from 'next/image'

type Props = {}

const BrandAssetPage = ({}: Props) => {
  const router = useRouter()

  const { Title, Text } = Typography
  const pageTitle = `Brand Assets - ${Metadata.Name}`
  const Description = 'Get Wesbitty Brand assets here.'

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
                <h1 className="text-gray-700 text-5xl">Brand assets</h1>
                <p className="text-gray-500 text-2xl">
                  Download official Wesbitty logos
                </p>
                <p className="text-gray-500 text-sm">
                  All Wesbitty trademarks, logos, or other brand elements can
                  never be modified or used for any other purpose other than to
                  represent Wesbitty Inc.
                </p>
              </div>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-12 border dark:border-gray-600 rounded-lg shadow-small">
              <div className="col-span-12 lg:col-span-5">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Image
                    alt="Brand Assets"
                    src={`/brand/logo-preview.jpg`}
                    fill
                    className="object-cover h-full rounded-l-lg"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 flex items-center">
                <div className="p-16">
                  <div>
                    <h1 className="text-gray-700 text-4xl">Wesbitty logos</h1>
                    <p className="text-gray-500 text-sm">
                      <p>
                        Download Wesbitty official logos, including as SVG's, in
                        both light and dark theme.
                      </p>
                      <p>Do not use any other color for the wordmark.</p>
                    </p>
                    <form
                      method="get"
                      action={`/brand/assets/wesbitty-logos.zip`}
                    >
                      <Button
                        htmlType="submit"
                        type="default"
                        iconRight={<IconDownload />}
                      >
                        Download logo kit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </Default>
    </>
  )
}

export default BrandAssetPage
