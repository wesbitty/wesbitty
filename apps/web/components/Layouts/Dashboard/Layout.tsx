import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { signOut } from 'next-auth/react'
import Loader from './Loader'
import useRequireAuth from '~/lib/useRequireAuth'
import type { WithChildren } from '~/types'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'

interface LayoutProps extends WithChildren {
  siteId?: string
}

export default function Layout({ siteId, children }: LayoutProps) {
  const title = 'My Store • Home • Wesbitty'
  const description =
    'Manage your business, add new products, and find your audience with the Wesbitty app.'
  const logo = '/favicon.ico'
  const router = useRouter()
  const sitePage = router.pathname.startsWith('/app/site/[id]')
  const postPage = router.pathname.startsWith('/app/post/[id]')
  const rootPage = !sitePage && !postPage
  const tab = rootPage ? router.asPath.split('/')[1] : router.asPath.split('/')[3]

  const session = useRequireAuth()
  if (!session) return <Loader />

  return (
    <>
      <div>
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
          <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto px-10 sm:px-20">
            <div className="flex space-x-4">
              <Link href="/" className="flex justify-center items-center">
                {session.user && session.user.image && (
                  <div className="h-8 w-8 inline-block rounded-full overflow-hidden align-middle">
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      alt={session.user.name ?? 'User avatar'}
                    />
                  </div>
                )}
                <span className="sm:block inline-block ml-3 font-medium truncate">
                  {session.user?.name}
                </span>
              </Link>
              <div className="h-8 border border-gray-300" />
              <button
                className="text-gray-500 hover:text-gray-700 transition-all ease-in-out duration-150"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="h-8 w-8 inline-block rounded-full overflow-hidden align-middle">
                {session.user && session.user.image && (
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      alt={session.user.name ?? 'User avatar'}
                    />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                        Sign in as: {session.user?.name}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          My sites
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/settings"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            onClick={() => signOut()}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
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
              className={`border-b-2 ${tab == '' ? 'border-black' : 'border-transparent'} py-3`}
            >
              My Sites
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
                ← All Sites
              </Link>
              <div className="flex justify-between items-center space-x-10 md:space-x-16">
                <Link
                  href={`/site/${router.query.id}`}
                  className={`border-b-2 ${!tab ? 'border-black' : 'border-transparent'} py-3`}
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
                <Link href={`/site/${siteId}`} className="md:inline-block ml-3 hidden">
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
                  className={`border-b-2 ${!tab ? 'border-black' : 'border-transparent'} py-3`}
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
      </div>
    </>
  )
}
