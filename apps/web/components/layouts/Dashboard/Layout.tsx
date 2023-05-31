import Loader from './Loader'
import { Popover, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import useRequireAuth from 'lib/useRequireAuth'
import { signOut } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Fragment } from 'react'
import type { WithChildren } from 'types'
import Container from '~/components/widget/Container'
import { Section } from '~/components/widget/Section'

interface LayoutProps extends WithChildren {
  siteId?: string
}

export default function Layout({ siteId, children }: LayoutProps) {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const title = 'My Store • Home • Wesbitty'
  const description =
    'Manage your business, add new products, and find your audience with the Wesbitty app.'
  const logo = '/favicon.ico'

  const sitePage = router.pathname.startsWith('/app/site/[id]')
  const postPage = router.pathname.startsWith('/app/post/[id]')
  const rootPage = !sitePage && !postPage
  const tab = rootPage
    ? router.asPath.split('/')[1]
    : router.asPath.split('/')[3]

  const session = useRequireAuth()
  if (!session) return <Loader />

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={logo} />
        <link rel="shortcut icon" type="image/x-icon" href={logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo} />
        <meta name="theme-color" content="#7b46f6" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={logo} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wesbitty" />
        <meta name="twitter:creator" content="@wesbitty" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />
      </Head>
      <div className="absolute left-0 right-0 h-16 border-b bg-white border-gray-200">
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
          <div className="flex items-center space-x-2.5">
            <Link
              href="/"
              className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white"
            >
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.43 0.92268C11.1426 0.398115 12.1177 0.407491 12.82 0.945665L19.9928 6.44198C21.0266 7.23419 21.0266 8.78771 19.9928 9.57992L17.2573 11.6761L20.0379 13.9037C21.0493 14.7139 21.022 16.2574 19.9826 17.0315L12.62 22.5153C11.8634 23.0788 10.8134 23.0332 10.1089 22.4063L4.34789 17.2802L3.54224 16.5903C-0.0530112 13.5114 0.390183 7.84094 4.41274 5.35212L10.43 0.92268ZM16.1955 10.8254L12.8515 8.14659C12.1375 7.57457 11.1235 7.56365 10.3972 8.12017L7.92298 10.0161C6.88913 10.8084 6.88913 12.3619 7.92298 13.1541L10.4154 15.064C11.129 15.6108 12.1224 15.6108 12.836 15.064L16.1773 12.5036L19.2086 14.932C19.5457 15.2021 19.5366 15.7166 19.1901 15.9747L11.8275 21.4585C11.5753 21.6463 11.2253 21.6311 10.9905 21.4221L5.2248 16.2918L4.40495 15.5895C1.48255 13.0869 1.84941 8.47338 5.13088 6.46078L5.15471 6.44617L11.2165 1.98398C11.454 1.80913 11.779 1.81225 12.0132 1.99164L19.1859 7.48796C19.5305 7.75203 19.5305 8.26987 19.1859 8.53394L16.1955 10.8254ZM15.1155 11.653L12.0291 14.018C11.7913 14.2003 11.4601 14.2003 11.2223 14.018L8.72984 12.1081C8.38523 11.844 8.38523 11.3262 8.72984 11.0621L11.2041 9.16615C11.4462 8.98065 11.7842 8.98429 12.0222 9.17496L15.1155 11.653Z"
                  fill="#7C3AED"
                  stroke="#7C3AED"
                  strokeWidth="0.5"
                />
              </svg>
              <span className="sm:block inline-block ml-3 font-medium truncate">
                Wesbitty
              </span>
            </Link>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="h-8 w-8 inline-block rounded-full ring-2 hover:ring-4 ring-gray-300 hover:ring-sky-600 gap-x-1 overflow-hidden align-middle">
                {session.user && session.user.image && (
                  <>
                    <span>
                      <Image
                        src={session.user.image}
                        width={40}
                        height={40}
                        alt={session.user.name ?? 'User avatar'}
                      />
                    </span>
                    <ChevronDownIcon className="h-5 w-5" />
                  </>
                )}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <div className="block text-gray-600 px-4 py-2 text-sm border-b">
                      Sign in as{' '}
                      <span className="font-semibold">
                        {session.user?.name}
                      </span>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href="/"
                      className={`bg-white ${
                        tab == '' ? 'text-gray-600' : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    >
                      My stores
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      href="/settings"
                      className={`bg-white ${
                        tab == 'settings' ? 'text-gray-600' : 'text-gray-700'
                      } block px-4 py-2 text-sm`}
                    >
                      Settings
                    </Link>
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      <button
                        type="submit"
                        onClick={() => signOut()}
                        className="bg-white text-gray-600 block w-full px-4 py-2 text-left text-sm border-t"
                      >
                        Sign out
                      </button>
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {rootPage && (
        <div className="absolute left-0 right-0 top-16 flex justify-center items-center font-cal space-x-16 border-b bg-white border-gray-200">
          <Link
            href="/"
            className={`border-b-2 ${
              tab == '' ? 'border-black' : 'border-transparent'
            } py-3`}
          >
            Overview
          </Link>
          <Link
            href="/settings"
            className={`border-b-2 ${
              tab == 'settings' ? 'border-black' : 'border-transparent'
            } py-3`}
          >
            Settings
          </Link>
        </div>
      )}
      {sitePage && (
        <div className="absolute left-0 right-0 top-16 font-cal border-b bg-white border-gray-200">
          <div className="flex justify-between items-center space-x-16 max-w-screen-xl mx-auto px-10 sm:px-20">
            <Link href="/" className="md:inline-block ml-3 hidden">
              ← Overview
            </Link>
            <div className="flex justify-between items-center space-x-10 md:space-x-16">
              <Link
                href={`/site/${router.query.id}`}
                className={`border-b-2 ${
                  !tab ? 'border-black' : 'border-transparent'
                } py-3`}
              >
                Posts
              </Link>
              <Link
                href={`/site/${router.query.id}/drafts`}
                className={`border-b-2 ${
                  tab == 'drafts' ? 'border-black' : 'border-transparent'
                } py-3`}
              >
                Drafts
              </Link>
              <Link
                href={`/site/${router.query.id}/settings`}
                className={`border-b-2 ${
                  tab == 'settings' ? 'border-black' : 'border-transparent'
                } py-3`}
              >
                Settings
              </Link>
            </div>
            <div />
          </div>
        </div>
      )}
      {postPage && (
        <div className="absolute left-0 right-0 top-16 font-cal border-b bg-white border-gray-200">
          <div className="flex justify-between items-center space-x-16 max-w-screen-xl mx-auto px-10 sm:px-20">
            {siteId ? (
              <Link
                href={`/site/${siteId}`}
                className="md:inline-block ml-3 hidden"
              >
                ← All Posts
              </Link>
            ) : (
              <div>
                ←<p className="md:inline-block ml-3 hidden">All Posts</p>
              </div>
            )}

            <div className="flex justify-between items-center space-x-10 md:space-x-16">
              <Link
                href={`/post/${router.query.id}`}
                className={`border-b-2 ${
                  !tab ? 'border-black' : 'border-transparent'
                } py-3`}
              >
                Editor
              </Link>
              <Link
                href={`/post/${router.query.id}/settings`}
                className={`border-b-2 ${
                  tab == 'settings' ? 'border-black' : 'border-transparent'
                } py-3`}
              >
                Settings
              </Link>
            </div>
            <div />
          </div>
        </div>
      )}
      <div className="pt-28">{children}</div>

      <div className="mt-12 border-t dark:border-dark flex justify-center">
        <p className="mb-0 self-center text-base py-4 link-text dark:text-dark-100">
          &copy; <span>{currentYear}</span> Wesbitty, Inc.
        </p>
      </div>
    </>
  )
}
