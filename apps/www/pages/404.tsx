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
import Head from 'next/head'
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
            <Typography.Title level={2}>
              <span style={{ color: '#ffffff' }}>Oops! Page doesn't exist.</span>
            </Typography.Title>
            <Space />
            <div className="col-span-12 mt-4">
              <Typography.Title level={3}>
                <span style={{ color: '#bbbbbb' }}>
                  Sorry, the page you were looking for could not be found.
                </span>
              </Typography.Title>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default NotFound
