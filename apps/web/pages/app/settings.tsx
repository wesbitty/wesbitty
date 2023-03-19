import Layout from '~/components/app/Layout'
import toast, { Toaster } from 'react-hot-toast'
import BlurImage from '~/components/BlurImage'
import CloudinaryUploadWidget from '~/components/Cloudinary'
import LoadingDots from '~/components/app/loading-dots'
import { HttpMethod } from '~/types'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import type { UserSettings } from '~/types'

export default function AppSettings() {
  const { data: session } = useSession()

  const [saving, setSaving] = useState<boolean>(false)
  const [data, setData] = useState<UserSettings | null>(null)

  useEffect(() => {
    if (session)
      setData({
        ...session.user,
      })
  }, [session])

  async function saveSettings(data: UserSettings | null) {
    setSaving(true)
    const response = await fetch('/api/save-settings', {
      method: HttpMethod.POST,
      body: JSON.stringify({
        ...data,
      }),
    })
    if (response.ok) {
      setSaving(false)
      toast.success(`Changes Saved`)
    }
  }

  return (
    <>
      <Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 10000,
          }}
        />
        <div className="mx-auto mt-10 mb-16 max-w-screen-xl px-10 sm:px-20">
          <h1 className="font-cal mb-12 text-5xl">Settings</h1>
          <div className="mb-28 flex flex-col space-y-12">
            <div className="space-y-6">
              <h2 className="font-cal text-2xl">Name</h2>
              <div className="flex max-w-lg items-center overflow-hidden rounded-lg border border-gray-700">
                <input
                  className="font-cal w-full rounded-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                  type="text"
                  name="name"
                  placeholder="Your awesome name"
                  value={data?.name || ''}
                  onInput={(e) =>
                    setData({
                      ...data,
                      name: (e.target as HTMLTextAreaElement).value,
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-cal text-2xl">Email</h2>
              <div className="flex max-w-lg items-center overflow-hidden rounded-lg border border-gray-700">
                <input
                  className="font-cal w-full rounded-lg border-none bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                  type="email"
                  name="email"
                  placeholder="panic@thedis.co"
                  value={data?.email || ''}
                  onInput={(e) =>
                    setData({
                      ...data,
                      email: (e.target as HTMLTextAreaElement).value,
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-cal text-2xl">Display Picture</h2>
              <div
                className={`${
                  data?.image ? '' : 'h-150 animate-pulse bg-gray-300'
                } relative mt-5 w-48 rounded-md border-2 border-dashed border-gray-800`}
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

                {data?.image && (
                  <BlurImage
                    src={data.image}
                    alt="Cover Photo"
                    width={100}
                    height={100}
                    className="w-full rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <footer className="fixed inset-x-0 bottom-0 z-20 h-20 border-t border-solid border-gray-500 bg-white">
          <div className="mx-auto flex h-full max-w-screen-xl items-center justify-end px-10 sm:px-20">
            <button
              onClick={() => {
                saveSettings(data)
              }}
              disabled={saving}
              className={`${
                saving
                  ? 'cursor-not-allowed border-gray-300 bg-gray-300'
                  : 'border-black bg-black hover:bg-white hover:text-black'
              } mx-2 h-12 w-36 border-2 text-lg text-white transition-all duration-150 ease-in-out focus:outline-none`}
            >
              {saving ? <LoadingDots /> : 'Save Changes'}
            </button>
          </div>
        </footer>
      </Layout>
    </>
  )
}
