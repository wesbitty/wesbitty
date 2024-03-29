import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Badge, IconLogIn, IconHome, IconPackage } from '@wesbitty/ui'
import FlyOut from '../UI/FlyOut'
import Transition from '~/utils/transition'
import SolutionsData from '~/data/Solutions.json'
import Solutions from './Navigation/Product'
import Developers from './Navigation/Developers'
import Announcement from './Navigation/Announcement'

const Header = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const [open, setOpen] = useState(false)

  const [openProduct, setOpenProduct] = useState(false)
  const [openDevelopers, setOpenDevelopers] = useState(false)

  React.useEffect(() => {
    if (open) {
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  function handleToggle(callback: any) {
    handleCancel()
    callback()
  }

  function handleCancel() {
    setOpenProduct(false)
    setOpenDevelopers(false)
  }

  const iconSections = Object.values(SolutionsData).map(
    (solution: any, idx: number) => {
      const { name, description, icon, label, url } = solution

      const content = (
        <div className="mb-3 flex md:h-full lg:flex-col">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-gray-800 text-white sm:h-12 sm:w-12">
              {/* <!-- Heroicon name: chart-bar --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={icon}
                />
              </svg>
            </div>
          </div>
          <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
            <div>
              <p className="text-base font-medium text-gray-900 dark:text-white space-x-2">
                <span>{name}</span>
                {label && (
                  <Badge dot color="blue">
                    {label}
                  </Badge>
                )}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-dark-100">
                {description}
              </p>
            </div>
            {url && (
              <p className="mt-2 text-sm font-medium text-brand-600 lg:mt-4">
                Learn more <span aria-hidden="true">&rarr;</span>
              </p>
            )}
          </div>
        </div>
      )
      return url ? (
        <Link
          key={`solution_${idx}`}
          href={url}
          className="-m-3 p-3 my-2 flex flex-col justify-between rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition ease-in-out duration-150"
        >
          {content}
        </Link>
      ) : (
        <div
          key={`solution_${idx}`}
          className="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150"
        >
          {content}
        </div>
      )
    }
  )

  type HamburgerButtonProps = {
    toggleFlyOut: Function
  }

  const HamburgerButton = (props: HamburgerButtonProps) => (
    <div
      className="absolute inset-y-0 right-0 px-2 flex items-center lg:hidden"
      onClick={() => props.toggleFlyOut()}
    >
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-700"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>

        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )

  const FlyOutNavButton = (props: any) => (
    <div
      className={
        `
        inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700
        dark:text-dark-100 cursor-pointer
      ` + props.active
      }
      onClick={props.onClick}
    >
      <>
        <span>{props.title}</span>
        <svg
          className={
            'ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-700 transition ease-in-out duration-150' +
            (props.active && ' transform rotate-180')
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </>
    </div>
  )

  return (
    <>
      {/*<Announcement />*/}
      <div className="sticky top-0 z-50">
        <nav className="bg-slate-100 dark:bg-gray-800 border-b dark:border-gray-600">
          {/* <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-10 xl:px-0"> */}
          <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2.5">
                <Link href="/">
                  <img
                    className="w-40"
                    src="/brand/logo/wesbitty-light-logo.svg"
                    alt="Wesbitty Logo"
                  />
                </Link>
              </div>
              <HamburgerButton toggleFlyOut={() => setOpen(true)} />
              <div className="hidden pl-8 sm:ml-6 sm:space-x-4 lg:flex">
                <Link
                  href="/blog"
                  className={`
                    flex h-8 items-center text-gray-500 rounded-md bg-transparent mx-1 m-5 px-3 text-sm font-medium leading-none hover:bg-gray-100 hover:text-gray-600
                  `}
                >
                  Blog
                </Link>
                <Link
                  href="/pricing"
                  className={`
                    flex h-8 items-center text-gray-500 rounded-md bg-transparent mx-1 m-5 px-3 text-sm font-medium leading-none hover:bg-gray-100 hover:text-gray-600
                  `}
                >
                  Pricing
                </Link>
                <Link
                  href="/developer"
                  className={`
                    flex h-8 items-center text-gray-500 rounded-md bg-transparent mx-1 m-5 px-3 text-sm font-medium leading-none hover:bg-gray-100 hover:text-gray-600
                  `}
                >
                  Developer
                </Link>
                <FlyOutNavButton
                  title={'Product'}
                  onClick={() =>
                    handleToggle(() => setOpenProduct(!openProduct))
                  }
                  active={openProduct}
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center sm:space-x-3">
              <Link href="https://app.wesbitty.org" target="_blank">
                <Button type="default" icon={<IconPackage />}>
                  Start Your Project
                </Button>
              </Link>
              <Link href="https://app.wesbitty.org/login">
                <Button title="Sign In" type="default" icon={<IconLogIn />}>
                  Sign In
                </Button>
              </Link>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div> */}
          </div>
          {/* </div> */}
          {/* Mobile Nav Menu */}
          <Transition
            appear={true}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="p-4 md:p-8 h-screen w-screen fixed bg-white transform overflow-y-scroll -inset-y-0 z-50 dark:bg-dark-700">
              <div className="absolute right-4 top-4 items-center justify-between">
                <div className="-mr-2">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 dark:bg-dark-800"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* </div> */}
              <div className="mt-6 mb-12">
                <div className="pt-2 pb-4 space-y-1">
                  <Link
                    href="https://app.wesbitty.org"
                    className="block pl-3 pr-4 text-base font-medium text-gray-600 dark:text-white"
                  >
                    Sign in
                  </Link>
                </div>
                <div className="pt-2 pb-4 space-y-1">
                  <Link
                    href="/blog"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pricing"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Product
                  </Link>
                  <Link
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Developers
                  </Link>
                  <Link
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Company
                  </Link>
                  <Link
                    href="https://github.com/wesbitty/wesbitty"
                    target="_blank"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    GitHub
                  </Link>
                </div>
                <div className="p-3">
                  <p className="mb-6 text-sm text-gray-400">
                    Products available:
                  </p>
                  {iconSections}
                </div>
              </div>
            </div>
          </Transition>
        </nav>
        <FlyOut open={openProduct} handleCancel={handleCancel}>
          <Solutions />
        </FlyOut>
        <FlyOut open={openDevelopers} handleCancel={handleCancel}>
          <Developers />
        </FlyOut>
      </div>
    </>
  )
}

export default Header
