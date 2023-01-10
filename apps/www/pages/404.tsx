import React from 'react'
import {
  Badge,
  Button,
  IconArrowUpRight,
  IconShuffle,
  IconX,
  Space,
  Tabs,
  Typography,
} from '@wesbitty/ui'
import Link from 'next/link'
import DefaultLayout from '../components/Layouts/Default'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

type Props = {}

const NotFound = ({}: Props) => {
  const { basePath } = useRouter()

  return (
    <>
      <NextSeo title="404 - Page Not Found" description="404 - Page Not Found" />
      <DefaultLayout hideHeader hideFooter>
        <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
              <h1 className="font-bold text-3xl md:text-3xl tracking-tight mb-10 text-black dark:text-white">
                Oops! Page Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-10">
                Why show a generic 404 when I can make it sound mysterious? It seems you've found
                something that used to exist, or you spelled something wrong. I'm guessing you
                spelled something wrong. Can you double check that URL?
              </p>
              <Link
                href="/"
                className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default NotFound
