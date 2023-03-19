import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import useSWR, { mutate } from 'swr'
import BlurImage from '~/components/BlurImage'
import CloudinaryUploadWidget from '~/components/Cloudinary'
import DomainCard from '~/components/Cards/AppDomainCard'
import Layout from '~/components/app/Layout'
import LoadingDots from '~/components/app/loading-dots'
import Modal from '~/components/Modal'

import { fetcher } from '~/lib/fetcher'
import { HttpMethod } from '~/types'

import type { Site } from '@prisma/client'

interface SettingsData
  extends Pick<
    Site,
    | 'id'
    | 'name'
    | 'description'
    | 'font'
    | 'subdomain'
    | 'customDomain'
    | 'image'
    | 'imageBlurhash'
  > {}

export default function SiteSettings() {
  const router = useRouter()
  const { id } = router.query
  const siteId = id

  const { data: settings } = useSWR<Site | null>(siteId && `/api/site?siteId=${siteId}`, fetcher, {
    onError: () => router.push('/'),
    revalidateOnFocus: false,
  })

  const [saving, setSaving] = useState(false)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState<any | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deletingSite, setDeletingSite] = useState(false)

  const [data, setData] = useState<SettingsData>({
    id: '',
    name: null,
    description: null,
    font: 'font-cal',
    subdomain: null,
    customDomain: null,
    image: null,
    imageBlurhash: null,
  })

  useEffect(() => {
    if (settings) setData(settings)
  }, [settings])

  async function saveSiteSettings(data: SettingsData) {
    setSaving(true)

    try {
      const response = await fetch('/api/site', {
        method: HttpMethod.PUT,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentSubdomain: settings?.subdomain ?? undefined,
          ...data,
          id: siteId,
        }),
      })

      if (response.ok) {
        setSaving(false)
        mutate(`/api/site?siteId=${siteId}`)
        toast.success(`Changes Saved`)
      }
    } catch (error) {
      toast.error('Failed to save settings')
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  async function deleteSite(siteId: string) {
    setDeletingSite(true)

    try {
      const response = await fetch(`/api/site?siteId=${siteId}`, {
        method: HttpMethod.DELETE,
      })

      if (response.ok) router.push('/')
    } catch (error) {
      console.error(error)
    } finally {
      setDeletingSite(false)
    }
  }
  const [debouncedSubdomain] = useDebounce(data?.subdomain, 1500)
  const [subdomainError, setSubdomainError] = useState<string | null>(null)

  useEffect(() => {
    async function checkSubdomain() {
      try {
        const response = await fetch(`/api/domain/check?domain=${debouncedSubdomain}&subdomain=1`)

        const available = await response.json()

        setSubdomainError(available ? null : `${debouncedSubdomain}.wesbitty.org`)
      } catch (error) {
        console.error(error)
      }
    }

    if (
      debouncedSubdomain !== settings?.subdomain &&
      debouncedSubdomain &&
      debouncedSubdomain?.length > 0
    )
      checkSubdomain()
  }, [debouncedSubdomain, settings?.subdomain])

  async function handleCustomDomain() {
    const customDomain = data.customDomain

    setAdding(true)

    try {
      const response = await fetch(`/api/domain?domain=${customDomain}&siteId=${siteId}`, {
        method: HttpMethod.POST,
      })

      if (!response.ok)
        throw {
          code: response.status,
          domain: customDomain,
        }
      setError(null)
      mutate(`/api/site?siteId=${siteId}`)
    } catch (error) {
      setError(error)
    } finally {
      setAdding(false)
    }
  }

  return (
    <Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 10000,
        }}
      />
      <div className="mx-auto mt-20 mb-16 max-w-screen-xl px-10 sm:px-20">
        <h1 className="font-cal mb-12 text-5xl">Site Settings</h1>
        <div className="mb-28 flex flex-col space-y-12">
          <div className="flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Name</h2>
            <div className="flex max-w-lg items-center overflow-hidden rounded-lg border border-gray-700">
              <input
                className="font-cal w-full rounded-none border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="name"
                onInput={(e) =>
                  setData((data) => ({
                    ...data,
                    name: (e.target as HTMLTextAreaElement).value,
                  }))
                }
                placeholder="Untitled Site"
                type="text"
                value={data.name || ''}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Description</h2>
            <div className="flex max-w-lg items-center overflow-hidden rounded-lg border border-gray-700">
              <textarea
                className="font-cal w-full rounded-none border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="description"
                onInput={(e) =>
                  setData((data) => ({
                    ...data,
                    description: (e.target as HTMLTextAreaElement).value,
                  }))
                }
                placeholder="Lorem ipsum forem dimsum"
                rows={3}
                value={data?.description || ''}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Font</h2>
            <div className="flex max-w-lg items-center overflow-hidden rounded-lg border border-gray-700">
              <select
                onChange={(e) =>
                  setData((data) => ({
                    ...data,
                    font: (e.target as HTMLSelectElement).value,
                  }))
                }
                value={data?.font || 'font-cal'}
                className="font-cal w-full rounded-none border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
              >
                <option value="font-cal">Cal Sans</option>
                <option value="font-lora">Lora</option>
                <option value="font-work">Work Sans</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Subdomain</h2>
            <div className="flex max-w-lg items-center rounded-lg border border-gray-700">
              <input
                className="font-cal w-1/2 rounded-none rounded-l-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                name="subdomain"
                onInput={(e) =>
                  setData((data) => ({
                    ...data,
                    subdomain: (e.target as HTMLTextAreaElement).value,
                  }))
                }
                placeholder="subdomain"
                type="text"
                value={data.subdomain || ''}
              />
              <div className="font-cal flex h-12 w-1/2 items-center justify-center rounded-r-lg border-l border-gray-600 bg-gray-100">
                wesbitty.org
              </div>
            </div>
            {subdomainError && (
              <p className="px-5 text-left text-red-500">
                <b>{subdomainError}</b> is not available. Please choose another subdomain.
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Custom Domain</h2>
            {settings?.customDomain ? (
              <DomainCard data={data} />
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  await handleCustomDomain()
                }}
                className="flex max-w-lg items-center justify-start space-x-3"
              >
                <div className="flex-auto overflow-hidden rounded-lg border border-gray-700">
                  <input
                    autoComplete="off"
                    className="font-cal w-full rounded-none border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                    name="customDomain"
                    onInput={(e) => {
                      setData((data) => ({
                        ...data,
                        customDomain: (e.target as HTMLTextAreaElement).value,
                      }))
                    }}
                    pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
                    placeholder="mydomain.com"
                    value={data.customDomain || ''}
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className="font-cal w-28 rounded-md border border-solid border-black bg-black px-5 py-3 text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black focus:outline-none"
                >
                  {adding ? <LoadingDots /> : 'Add'}
                </button>
              </form>
            )}
            {error && (
              <div className="mt-5 flex w-full max-w-2xl items-center space-x-2 text-left text-sm text-red-500">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                  style={{ color: '#f44336' }}
                >
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path d="M12 8v4" stroke="#f44336" />
                  <path d="M12 16h.01" stroke="#f44336" />
                </svg>
                {error.code == 403 ? (
                  <p>
                    <b>{error.domain}</b> is already owned by another team.
                    <button
                      className="ml-1"
                      onClick={async (e) => {
                        e.preventDefault()
                        await fetch(`/api/request-delegation?domain=${error.domain}`).then(
                          (res) => {
                            if (res.ok) {
                              toast.success(
                                `Requested delegation for ${error.domain}. Try adding the domain again in a few minutes.`
                              )
                            } else {
                              alert(
                                'There was an error requesting delegation. Please try again later.'
                              )
                            }
                          }
                        )
                      }}
                    >
                      <u>Click here to request access.</u>
                    </button>
                  </p>
                ) : (
                  <p>
                    Cannot add <b>{error.domain}</b> since it&apos;s already assigned to another
                    project.
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="relative flex flex-col space-y-6">
            <h2 className="font-cal text-2xl">Thumbnail Image</h2>
            <div
              className={`${
                data.image ? '' : 'h-150 animate-pulse bg-gray-300'
              } relative mt-5 w-full rounded-md border-2 border-dashed border-gray-800`}
            >
              <CloudinaryUploadWidget
                callback={(e) =>
                  setData({
                    ...data,
                    image: e.secure_url,
                  })
                }
              >
                {({ open }) => (
                  <button
                    onClick={open}
                    className="absolute z-10 flex h-full w-full flex-col items-center justify-center rounded-md bg-gray-200 opacity-0 transition-all duration-200 ease-linear hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                    </svg>
                    <p>Upload another image</p>
                  </button>
                )}
              </CloudinaryUploadWidget>

              {data.image && (
                <BlurImage
                  alt="Cover Photo"
                  blurDataURL={data.imageBlurhash ?? undefined}
                  className="w-full rounded-md object-cover"
                  height={500}
                  placeholder="blur"
                  src={data.image}
                  width={800}
                />
              )}
            </div>
            <div className="h-10 w-full" />
            <div className="flex max-w-lg flex-col space-y-6">
              <h2 className="font-cal text-2xl">Delete Site</h2>
              <p>
                Permanently delete your site and all of its contents from our platform. This action
                is not reversible – please continue with caution.
              </p>
              <button
                onClick={() => {
                  setShowDeleteModal(true)
                }}
                className="font-cal max-w-max rounded-md border border-solid border-red-500 bg-red-500 px-5 py-3 text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-red-500 focus:outline-none"
              >
                Delete Site
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            await deleteSite(siteId as string)
          }}
          className="inline-block w-full max-w-md overflow-hidden rounded-lg bg-white pt-8 text-center align-middle shadow-xl transition-all"
        >
          <h2 className="font-cal mb-6 text-2xl">Delete Site</h2>
          <div className="mx-auto grid w-5/6 gap-y-5">
            <p className="mb-3 text-gray-600">
              Are you sure you want to delete your site? This action is not reversible. Type in the
              full name of your site (<b>{data.name}</b>) to confirm.
            </p>
            <div className="flex-start flex items-center overflow-hidden rounded-lg border border-gray-700">
              <input
                className="w-full rounded-none rounded-r-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                type="text"
                name="name"
                placeholder={data.name ?? ''}
                pattern={data.name ?? 'Site Name'}
              />
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between">
            <button
              type="button"
              className="w-full rounded-bl border-t border-gray-300 px-5 py-5 text-sm text-gray-400 transition-all duration-150 ease-in-out hover:text-black focus:outline-none focus:ring-0"
              onClick={() => setShowDeleteModal(false)}
            >
              CANCEL
            </button>

            <button
              type="submit"
              disabled={deletingSite}
              className={`${
                deletingSite
                  ? 'cursor-not-allowed bg-gray-50 text-gray-400'
                  : 'bg-white text-gray-600 hover:text-black'
              } w-full rounded-br border-t border-l border-gray-300 px-5 py-5 text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-0`}
            >
              {deletingSite ? <LoadingDots /> : 'DELETE SITE'}
            </button>
          </div>
        </form>
      </Modal>

      <footer className="fixed inset-x-0 bottom-0 z-20 h-20 border-t border-solid border-gray-500 bg-white">
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-end px-10 sm:px-20">
          <button
            onClick={() => {
              saveSiteSettings(data)
            }}
            disabled={saving || subdomainError !== null}
            className={`${
              saving || subdomainError
                ? 'cursor-not-allowed border-gray-300 bg-gray-300'
                : 'border-black bg-black hover:bg-white hover:text-black'
            } mx-2 h-12 w-36 rounded-md border-2 text-lg text-white transition-all duration-150 ease-in-out focus:outline-none`}
          >
            {saving ? <LoadingDots /> : 'Save Changes'}
          </button>
        </div>
      </footer>
    </Layout>
  )
}
