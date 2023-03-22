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
import { ErrorWidget } from '~/Widget/Error'
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
      <ErrorWidget>
        <div className="errorWrap">
          <h3>
            404{' '}
            <span>
              <IconFrown size="140" type="secondary" />
            </span>
          </h3>
          <h4>There&#39;s nothing here!</h4>
          <p>Sorry, the page you were looking for in this site does not exist.</p>
          <Link className="homepage" href="/">
            Go to Home Page
          </Link>
        </div>
      </ErrorWidget>
    </>
  )
}

export default NotFound
