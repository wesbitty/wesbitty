import { signIn } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import LoadingDots from '~/components/layouts/Dashboard/loading-dots'
import { Metadata } from '~/utils/Metadata'

const pageTitle = 'Authentication • Wesbitty Inc'
const description = 'User Management.'

export default function Login() {
  const [loading, setLoading] = useState(false)

  // Get error message added by next/auth in URL.
  const { query } = useRouter()
  const { error } = query

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error
    errorMessage && toast.error(errorMessage)
  }, [error])

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={description}
        openGraph={{
          title: pageTitle,
          description: description,
          url: `${Metadata.Url}/login`,
          images: [
            {
              url: `${Metadata.Url}/brand/og.png`,
            },
          ],
        }}
      />
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <Image
              alt="Platform"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
              src="/brand/logo.png"
            />
            <h3 className="text-3xl font-semibold">Wesbitty Inc</h3>
            <p className="text-sm text-gray-500">
              The global commerce platform
            </p>
          </div>

          <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
            <button
              disabled={loading}
              onClick={() => {
                setLoading(true)
                signIn('github')
              }}
              className={`${
                loading
                  ? 'cursor-not-allowed border-gray-200 bg-gray-100'
                  : 'border-black bg-black text-white hover:bg-white hover:text-black'
              } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
            >
              {loading ? (
                <LoadingDots color="#808080" />
              ) : (
                <div className="text-center text-sm">Sign In With Github</div>
              )}
            </button>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  )
}
