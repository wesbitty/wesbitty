import React from 'react'
import {
  Button,
  IconMail,
  IconArrowRight,
  IconHome,
  IconFrown,
  IconLink2,
  IconLink,
  IconPause,
} from '@wesbitty/ui'
import Link from 'next/link'
import { Default } from '~/widget/Default'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Metadata } from '~/utils/Metadata'

type Props = {}

const ErrorPage = ({}: Props) => {
  const PageMeta = {
    title: `Oops! Not Found | ${Metadata.Name}`,
    description: 'Oops! Not Found',
  }

  return (
    <>
      <NextSeo
        title={PageMeta.title}
        description={PageMeta.description}
        openGraph={{
          title: PageMeta.title,
          description: PageMeta.description,
          url: `${Metadata.Url}/404`,
          images: [
            {
              url: `${Metadata.Url}${Metadata.Og}`,
            },
          ],
        }}
      />
      <Default hideHeader hideFooter>
        <div className="flex h-screen bg-slate-100">
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center">
              <h1 className="font-bold text-5xl text-slate-1200">404</h1>
              <IconLink2
                size="xxxlarge"
                strokeWidth={2}
                className={'text-center text-sky-600 ml-4'}
              />
            </div>

            <div className="flex max-w-screen-xs mt-10">
              <h2 className="text-gray-500 font-medium text-2xl">
                This page could not be found{' '}
              </h2>
              <IconFrown
                size="xlarge"
                strokeWidth={2}
                className={'text-center text-sky-600 ml-4'}
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://wesbitty.org"
                prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
                className="text-slate-1200 underline hover:text-gray-500 transition-all"
              >
                Go back home
              </Link>
              <p className="text-black">·</p>
              <Link
                href="/support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-1200 underline hover:text-gray-500 transition-all"
              >
                Report Isues
              </Link>
            </div>
          </div>
        </div>
      </Default>
    </>
  )
}

export default ErrorPage
