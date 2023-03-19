import { useState, useEffect, useRef } from 'react'
import Layout from '~/components/app/Layout'
import BlurImage from '~/components/BlurImage'
import Modal from '~/components/Modal'
import LoadingDots from '~/components/app/loading-dots'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useDebounce } from 'use-debounce'
import { fetcher } from '~/lib/fetcher'
import { HttpMethod } from '~/types'

import type { FormEvent } from 'react'
import type { Site } from 'database'

export default function AppIndex() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [creatingSite, setCreatingSite] = useState<boolean>(false)
  const [subdomain, setSubdomain] = useState<string>('')
  const [debouncedSubdomain] = useDebounce(subdomain, 1500)
  const [error, setError] = useState<string | null>(null)

  const siteNameRef = useRef<HTMLInputElement | null>(null)
  const siteSubdomainRef = useRef<HTMLInputElement | null>(null)
  const siteDescriptionRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    async function checkSubDomain() {
      if (debouncedSubdomain.length > 0) {
        const response = await fetch(`/api/domain/check?domain=${debouncedSubdomain}&subdomain=1`)
        const available = await response.json()
        if (available) {
          setError(null)
        } else {
          setError(`${debouncedSubdomain}.wesbitty.org`)
        }
      }
    }
    checkSubDomain()
  }, [debouncedSubdomain])

  const router = useRouter()

  const { data: session } = useSession()
  const sessionId = session?.user?.id

  const { data: sites } = useSWR<Array<Site>>(sessionId && `/api/site`, fetcher)

  async function createSite() {
    const res = await fetch('/api/site', {
      method: HttpMethod.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: sessionId,
        name: siteNameRef.current?.value,
        subdomain: siteSubdomainRef.current?.value,
        description: siteDescriptionRef.current?.value,
      }),
    })

    if (!res.ok) {
      alert('Failed to create site')
    }

    const data = await res.json()
    router.push(`/site/${data.siteId}`)
  }

  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setCreatingSite(true)
            createSite()
          }}
          className="inline-block w-full max-w-md overflow-hidden rounded-lg bg-white pt-8 text-center align-middle shadow-xl transition-all"
        >
          <h2 className="font-cal mb-6 text-2xl">Create a New Site</h2>
          <div className="mx-auto grid w-5/6 gap-y-5">
            <div className="flex-start flex items-center rounded-lg border border-gray-700">
              <span className="pl-5 pr-1">📌</span>
              <input
                className="w-full rounded-none rounded-r-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="name"
                required
                placeholder="Site Name"
                ref={siteNameRef}
                type="text"
              />
            </div>
            <div className="flex-start flex items-center rounded-lg border border-gray-700">
              <span className="pl-5 pr-1">🪧</span>
              <input
                className="w-full rounded-none rounded-l-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="subdomain"
                onInput={() => setSubdomain(siteSubdomainRef.current!.value)}
                placeholder="Subdomain"
                ref={siteSubdomainRef}
                type="text"
              />
              <span className="flex h-full items-center rounded-r-lg border-l border-gray-600 bg-gray-100 px-5">
                .wesbitty.org
              </span>
            </div>
            {error && (
              <p className="px-5 text-left text-red-500">
                <b>{error}</b> is not available. Please choose another subdomain.
              </p>
            )}
            <div className="flex-start items-top flex rounded-lg border border-gray-700">
              <span className="mt-3 pl-5 pr-1">✍️</span>
              <textarea
                className="w-full rounded-none rounded-r-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="description"
                placeholder="Description"
                ref={siteDescriptionRef}
                required
                rows={3}
              />
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between">
            <button
              type="button"
              className="w-full rounded-bl border-t border-gray-300 px-5 py-5 text-sm text-gray-600 transition-all duration-150 ease-in-out hover:text-black focus:outline-none focus:ring-0"
              onClick={() => {
                setError(null)
                setShowModal(false)
              }}
            >
              CANCEL
            </button>

            <button
              type="submit"
              disabled={creatingSite || error !== null}
              className={`${
                creatingSite || error
                  ? 'cursor-not-allowed bg-gray-50 text-gray-400'
                  : 'bg-white text-gray-600 hover:text-black'
              } w-full rounded-br border-t border-l border-gray-300 px-5 py-5 text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-0`}
            >
              {creatingSite ? <LoadingDots /> : 'CREATE SITE'}
            </button>
          </div>
        </form>
      </Modal>

      <div className="mx-auto max-w-screen-xl py-20 px-10 sm:px-20">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row sm:space-y-0">
          <h1 className="font-cal text-5xl">My Sites</h1>
          <button
            onClick={() => setShowModal(true)}
            className="font-cal w-3/4 border-2 border-black bg-black px-5 py-3 text-lg tracking-wide text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black sm:w-40"
          >
            New Site <span className="ml-2">＋</span>
          </button>
        </div>
        <div className="my-10 grid gap-y-10">
          {sites ? (
            sites.length > 0 ? (
              sites.map((site) => (
                <Link href={`/site/${site.id}`} key={site.id}>
                  <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 md:h-60 md:flex-row">
                    <div className="relative h-60 w-full md:h-auto md:w-1/3 md:flex-none">
                      {site.image ? (
                        <BlurImage
                          src={site.image}
                          width={500}
                          height={400}
                          className="h-full object-cover"
                          alt={site.name ?? 'Site thumbnail'}
                        />
                      ) : (
                        <div className="absolute flex h-full w-full select-none items-center justify-center bg-gray-100 text-4xl text-gray-500">
                          ?
                        </div>
                      )}
                    </div>
                    <div className="relative p-10">
                      <h2 className="font-cal text-3xl">{site.name}</h2>
                      <p className="line-clamp-3 my-5 text-base">{site.description}</p>
                      <a
                        className="font-cal absolute bottom-5 left-10 whitespace-nowrap rounded bg-gray-200 px-3 py-1 tracking-wide text-gray-600"
                        href={`https://${site.subdomain}.wesbitty.org`}
                        onClick={(e) => e.stopPropagation()}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {site.subdomain}.wesbitty.org ↗
                      </a>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 md:h-60 md:flex-row">
                  <div className="relative h-60 w-full bg-gray-300 md:h-auto md:w-1/3 md:flex-none" />
                  <div className="relative grid gap-5 p-10">
                    <div className="h-10 w-28 rounded-md bg-gray-300" />
                    <div className="h-6 w-48 rounded-md bg-gray-300" />
                    <div className="h-6 w-48 rounded-md bg-gray-300" />
                    <div className="h-6 w-48 rounded-md bg-gray-300" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-cal text-2xl text-gray-600">
                    No sites yet. Click &quot;New Site&quot; to create one.
                  </p>
                </div>
              </>
            )
          ) : (
            [0, 1].map((i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 md:h-60 md:flex-row"
              >
                <div className="relative h-60 w-full animate-pulse bg-gray-300 md:h-auto md:w-1/3 md:flex-none" />
                <div className="relative grid gap-5 p-10">
                  <div className="h-10 w-28 animate-pulse rounded-md bg-gray-300" />
                  <div className="h-6 w-48 animate-pulse rounded-md bg-gray-300" />
                  <div className="h-6 w-48 animate-pulse rounded-md bg-gray-300" />
                  <div className="h-6 w-48 animate-pulse rounded-md bg-gray-300" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  )
}
