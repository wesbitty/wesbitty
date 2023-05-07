import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconLogIn, IconHome, IconPackage } from '../index'
import { Button } from './Button'
import { Badge } from './Badge'
import Transition from '../lib/Transition'
import { ThemeSwitch, iMode } from '../theme/ColorScheme/index'

export const Header = () => {
  const { ThemeMode } = iMode()
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

  type HamburgerButtonProps = {
    toggleFlyOut: Function
  }

  const HamburgerButton = (props: HamburgerButtonProps) => (
    <div
      className="absolute inset-y-0 left-0 px-2 flex items-center lg:hidden"
      onClick={() => props.toggleFlyOut()}
    >
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-700"
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
        inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium text-gray-800 hover:text-gray-600
        dark:text-gray-100 cursor-pointer
      ` + props.active
      }
      onClick={props.onClick}
    >
      <>
        <span>{props.title}</span>
        <svg
          className={
            'ml-2 h-5 w-5 text-gray-600 group-hover:text-gray-600 transition ease-in-out duration-150' +
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
      <div className="sticky top-0 z-50">
        <nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-600">
          {/* <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-10 xl:px-0"> */}
          <div className="lg:container mx-auto relative flex justify-between h-16 lg:px-16 xl:px-20">
            <HamburgerButton toggleFlyOut={() => setOpen(true)} />
            <div className="flex-1 flex items-center justify-center sm:items-stretch lg:justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" as="/">
                    <a>
                      <img
                        className="w-40"
                        src={
                          ThemeMode
                            ? `/brand/logo/wesbitty-light-logo.svg`
                            : `/brand/logo/wesbitty-dark-logo.svg`
                        }
                        alt="Wesbitty"
                      />
                    </a>
                  </Link>
                </div>
                <div className="pl-4 hidden sm:ml-6 lg:flex sm:space-x-4">
                  <a
                    href="/blog"
                    className={`
                    inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium
                    text-gray-800 hover:text-gray-600 hover:border-gray-500 p-5
                    dark:text-dark-100 dark:hover:border-dark-100
                  `}
                  >
                    Blog
                  </a>
                  <a
                    href="/pricing"
                    className={`
                    inline-flex items-center px-1 border-b-2 border-transparent text-sm font-medium
                    text-gray-800 hover:text-gray-600 hover:border-gray-500 p-5
                    dark:text-dark-100 dark:hover:border-dark-100
                  `}
                  >
                    Pricing
                  </a>
                  <FlyOutNavButton
                    title={'Product'}
                    onClick={() =>
                      handleToggle(() => setOpenProduct(!openProduct))
                    }
                    active={openProduct}
                  />
                  <FlyOutNavButton
                    title={'Developers'}
                    icon={<IconPackage />}
                    onClick={() =>
                      handleToggle(() => setOpenDevelopers(!openDevelopers))
                    }
                    active={openDevelopers}
                  />
                </div>
              </div>
              <div className="inset-y-0 px-2 items-center flex">
                <ThemeSwitch />
              </div>
              <div className="hidden lg:flex items-center sm:space-x-3">
                <a href="/login">
                  <Button title="Sign In" type="primary" icon={<IconLogIn />}>
                    Sign In
                  </Button>
                </a>
              </div>
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
                  <a
                    href="/authentication"
                    className="block pl-3 pr-4 text-base font-medium text-gray-600 dark:text-white"
                  >
                    Sign in
                  </a>
                </div>
                <div className="pt-2 pb-4 space-y-1">
                  <a
                    href="/blog"
                    target="_blank"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Blog
                  </a>
                  <a
                    href="/pricing"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Pricing
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Product
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Developers
                  </a>
                  <a
                    href="/docs"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    Company
                  </a>
                  <a
                    href="https://github.com/wesbitty/wesbitty"
                    target="_blank"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white"
                  >
                    GitHub
                  </a>
                </div>
                <div className="p-3">
                  <p className="mb-6 text-sm text-gray-400">
                    Products available:
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </>
  )
}
