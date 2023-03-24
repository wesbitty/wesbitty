import React from 'react'
import {
  Badge,
  Button,
  IconArrowUpRight,
  IconFrown,
  IconShuffle,
  IconX,
  Space,
  Tabs,
  Typography,
} from '@wesbitty/ui'
import Link from 'next/link'
import { Default } from '~/Widget/Default'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Metadata } from '~/utils/Metadata'
import { Section } from '~/Widget/Section'
import Container from '~/Widget/Container'

const NotFound = () => {
  const Title = `Oops! Not Found | ${Metadata.Name}`
  const Description = 'Oops! Not Found'
  const { basePath } = useRouter()

  return (
    <>
      <NextSeo
        title={Title}
        description={Description}
        openGraph={{
          title: Title,
          description: Description,
          url: `${Metadata.Url}/404`,
          images: [
            {
              url: `${Metadata.Url}${basePath}/brand/og-image.png`,
            },
          ],
        }}
      />
      <Default hideHeader hideFooter>
        <Section>
          <Container>
            <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
              <div className="text-center">
                <p className="font-semibold text-5xl mb-4 text-indigo-600">
                  404 <IconFrown size="10" type="secondary" />
                </p>
                <h1 className="mt-4 text2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page Not Found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Go back home
                  </Link>
                  <Link
                    href="/support"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Contact support <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </main>
          </Container>
        </Section>
      </Default>
    </>
  )
}

export default NotFound
