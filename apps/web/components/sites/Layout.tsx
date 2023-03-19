import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import Cookies from 'js-cookie'

import type { Meta, WithChildren } from '~/types'

interface LayoutProps extends WithChildren {
  meta?: Meta
  siteId?: string
  subdomain?: string
}

export default function Layout({ meta, children, subdomain }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const [closeModal, setCloseModal] = useState<boolean>(!!Cookies.get('closeModal'))

  useEffect(() => {
    if (closeModal) {
      Cookies.set('closeModal', 'true')
    } else {
      Cookies.remove('closeModal')
    }
  }, [closeModal])

  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={meta?.title} />
        <meta itemProp="description" content={meta?.description} />
        <meta itemProp="image" content={meta?.ogImage} />
        <meta name="description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:url" content={meta?.ogUrl} />
        <meta property="og:image" content={meta?.ogImage} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Vercel" />
        <meta name="twitter:creator" content="@StevenTey" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.ogImage} />
        {subdomain != 'demo' && <meta name="robots" content="noindex" />}
      </Head>
      <div
        className={`fixed w-full ${
          scrolled ? 'drop-shadow-md' : ''
        }  ease top-0 left-0 right-0 z-30 flex h-16 bg-white transition-all duration-150`}
      >
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-center space-x-5 px-10 sm:px-20">
          <Link href="/" className="flex items-center justify-center">
            {meta?.logo && (
              <div className="inline-block h-8 w-8 overflow-hidden rounded-full align-middle">
                <Image alt={meta?.title ?? 'Logo'} height={40} src={meta?.logo} width={40} />
              </div>
            )}
            <span className="ml-3 inline-block truncate font-medium">{meta?.title}</span>
          </Link>
        </div>
      </div>

      <div className="mt-20">{children}</div>

      {subdomain == 'demo' && (
        <div
          className={`${
            closeModal ? 'h-14 lg:h-auto' : 'h-60 sm:h-40 lg:h-auto'
          } sticky bottom-5 mx-5 flex max-w-screen-xl flex-col items-center justify-between space-y-3 rounded-lg border-t-4 border-black bg-white px-5 pt-0 pb-3 drop-shadow-lg transition-all duration-150 ease-in-out
          lg:flex-row lg:space-y-0 lg:pt-3 xl:mx-auto`}
        >
          <button
            onClick={() => setCloseModal(!closeModal)}
            className={`${
              closeModal ? 'rotate-180' : 'rotate-0'
            } absolute top-2 right-3 text-black transition-all duration-150 ease-in-out lg:hidden`}
          >
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="text-center lg:text-left">
            <p className="font-cal text-lg text-black sm:text-2xl">Platforms Starter Kit Demo</p>
            <p
              className={`${
                closeModal ? 'hidden lg:block' : ''
              } mt-2 text-sm text-gray-700 lg:mt-0`}
            >
              This is a demo site showcasing how to build a multi-tenant application with{' '}
              <a
                className="font-semibold text-black underline"
                href="https://platformize.co"
                rel="noreferrer"
                target="_blank"
              >
                custom domain
              </a>{' '}
              support.
            </p>
          </div>
          <div
            className={`${
              closeModal ? 'hidden lg:flex' : ''
            } flex w-full flex-col space-y-3 text-center sm:flex-row sm:space-y-0 sm:space-x-3 lg:w-auto`}
          >
            <a
              className="font-cal whitespace-no-wrap flex-auto rounded-md border border-gray-200 py-1 px-5 text-lg text-black transition-all duration-150 ease-in-out hover:border-black sm:py-3"
              href="https://app.wesbitty.org"
              rel="noreferrer"
              target="_blank"
            >
              Create your publication
            </a>
            <a
              className="font-cal whitespace-no-wrap flex-auto rounded-md border border-black bg-black py-1 px-5 text-lg text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black sm:py-3"
              href="https://vercel.com/guides/nextjs-multi-tenant-application"
              rel="noreferrer"
              target="_blank"
            >
              Clone and deploy
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
