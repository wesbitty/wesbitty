import Container from 'components/Widget/Container'
import { createClient } from '@supabase/supabase-js'
import { Default } from '../components/Widget/Default'
import { Button, Typography, IconDownload } from '@wesbitty/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Section } from '../components/Widget/Section'
import { NextSeo } from 'next-seo'
import { Metadata } from '~/utils/Metadata'
import Image from "next/image";

const { Title, Text } = Typography

const BrandPage = () => {
  // base path for images
  const router = useRouter()

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
              url: `${Metadata.Url}/brand/og-image.jpg`,
            },
          ],
        }}
      />
      <Default>
        <Container>
          <Section className="pb-0 md:pb-0 lg:pb-0">
            <div className="grid lg:grid-cols-2">
              <div>
                <Title>Brand assets</Title>
                <Title level={3}>Download official Wesbitty logos</Title>
                <Text>
                  All Wesbitty trademarks, logos, or other brand elements can never be modified or
                  used for any other purpose other than to represent Wesbitty Inc.
                </Text>
              </div>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-12 border dark:border-gray-600 rounded-lg shadow-small">
              <div className="col-span-12 lg:col-span-5">
                <img
                  src={`/brand/logo-preview.jpg`}
                  width="100%"
                  className="object-cover h-full rounded-l-lg"
                />
              </div>
              <div className="col-span-12 lg:col-span-7 flex items-center">
                <div className="p-16">
                  <div>
                    <Typography.Title level={2}>Wesbitty Inc logos</Typography.Title>
                    <Typography.Text>
                      <p>
                        Download Wesbitty official logos, including as SVG's, in both light and dark
                        theme.
                      </p>
                      <p>Do not use any other color for the wordmark.</p>
                    </Typography.Text>
                    <form method="get" action={`/assets/wesbitty-logos.zip`}>
                      <Button htmlType="submit" type="default" iconRight={<IconDownload />}>
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

export default BrandPage
