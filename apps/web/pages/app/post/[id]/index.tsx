import TextareaAutosize from 'react-textarea-autosize'
import toast from 'react-hot-toast'
import useSWR, { mutate } from 'swr'
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'

import Layout from '~/components/app/Layout'
import Loader from '~/components/app/Loader'
import LoadingDots from '~/components/app/loading-dots'
import { fetcher } from '~/lib/fetcher'
import { HttpMethod } from '~/types'

import type { ChangeEvent } from 'react'

import type { WithSitePost } from '~/types'

interface PostData {
  title: string
  description: string
  content: string
}

const CONTENT_PLACEHOLDER = `Write some content. Markdown supported:

# A H1 header

## A H2 header

Fun fact: You embed tweets by pasting the tweet URL in a new line:

https://twitter.com/nextjs/status/1468044361082580995

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, and **bold**. Itemized lists look like:

  * this one
  * that one
  * the other one

Ordered lists look like:

  1. first item
  2. second item
  3. third item

> Block quotes are written like so.
>
> They can span multiple paragraphs,
> if you like.

            `

export default function Post() {
  const router = useRouter()

  // TODO: Undefined check redirects to error
  const { id: postId } = router.query

  const { data: post, isValidating } = useSWR<WithSitePost>(
    router.isReady && `/api/post?postId=${postId}`,
    fetcher,
    {
      dedupingInterval: 1000,
      onError: () => router.push('/'),
      revalidateOnFocus: false,
    }
  )

  const [savedState, setSavedState] = useState(
    post
      ? `Last saved at ${Intl.DateTimeFormat('en', { month: 'short' }).format(
          new Date(post.updatedAt)
        )} ${Intl.DateTimeFormat('en', { day: '2-digit' }).format(
          new Date(post.updatedAt)
        )} ${Intl.DateTimeFormat('en', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(post.updatedAt))}`
      : 'Saving changes...'
  )

  const [data, setData] = useState<PostData>({
    title: '',
    description: '',
    content: '',
  })

  useEffect(() => {
    if (post)
      setData({
        title: post.title ?? '',
        description: post.description ?? '',
        content: post.content ?? '',
      })
  }, [post])

  const [debouncedData] = useDebounce(data, 1000)

  const saveChanges = useCallback(
    async (data: PostData) => {
      setSavedState('Saving changes...')

      try {
        const response = await fetch('/api/post', {
          method: HttpMethod.PUT,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: postId,
            title: data.title,
            description: data.description,
            content: data.content,
          }),
        })

        if (response.ok) {
          const responseData = await response.json()
          setSavedState(
            `Last save ${Intl.DateTimeFormat('en', { month: 'short' }).format(
              new Date(responseData.updatedAt)
            )} ${Intl.DateTimeFormat('en', { day: '2-digit' }).format(
              new Date(responseData.updatedAt)
            )} at ${Intl.DateTimeFormat('en', {
              hour: 'numeric',
              minute: 'numeric',
            }).format(new Date(responseData.updatedAt))}`
          )
        } else {
          setSavedState('Failed to save.')
          toast.error('Failed to save')
        }
      } catch (error) {
        console.error(error)
      }
    },
    [postId]
  )

  useEffect(() => {
    if (debouncedData.title) saveChanges(debouncedData)
  }, [debouncedData, saveChanges])

  const [publishing, setPublishing] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (data.title && data.description && data.content && !publishing) setDisabled(false)
    else setDisabled(true)
  }, [publishing, data])

  useEffect(() => {
    function clickedSave(e: KeyboardEvent) {
      let charCode = String.fromCharCode(e.which).toLowerCase()

      if ((e.ctrlKey || e.metaKey) && charCode === 's') {
        e.preventDefault()
        saveChanges(data)
      }
    }

    window.addEventListener('keydown', clickedSave)

    return () => window.removeEventListener('keydown', clickedSave)
  }, [data, saveChanges])

  async function publish() {
    setPublishing(true)

    try {
      const response = await fetch(`/api/post`, {
        method: HttpMethod.PUT,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postId,
          title: data.title,
          description: data.description,
          content: data.content,
          published: true,
          subdomain: post?.site?.subdomain,
          customDomain: post?.site?.customDomain,
          slug: post?.slug,
        }),
      })

      if (response.ok) {
        mutate(`/api/post?postId=${postId}`)
        router.push(`https://${post?.site?.subdomain}.wesbitty.org/${post?.slug}`)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setPublishing(false)
    }
  }

  if (isValidating)
    return (
      <Layout>
        <Loader />
      </Layout>
    )

  return (
    <>
      <Layout siteId={post?.site?.id}>
        <div className="mx-auto mt-10 mb-16 max-w-screen-xl px-10 sm:px-20">
          <TextareaAutosize
            name="title"
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setData({
                ...data,
                title: (e.target as HTMLTextAreaElement).value,
              })
            }
            className="font-cal mt-6 w-full resize-none border-none px-2 py-4 text-5xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
            placeholder="Untitled Post"
            value={data.title}
          />
          <TextareaAutosize
            name="description"
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setData({
                ...data,
                description: (e.target as HTMLTextAreaElement).value,
              })
            }
            className="mb-3 w-full resize-none border-none px-2 py-3 text-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
            placeholder="No description provided. Click to edit."
            value={data.description}
          />

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
          <TextareaAutosize
            name="content"
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setData({
                ...data,
                content: (e.target as HTMLTextAreaElement).value,
              })
            }
            className="mb-5 w-full resize-none border-none px-2 py-3 text-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
            placeholder={CONTENT_PLACEHOLDER}
            value={data.content}
          />
        </div>
        <footer className="z-5 fixed inset-x-0 bottom-0 h-20 border-t border-solid border-gray-500 bg-white">
          <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-10 sm:px-20">
            <div className="text-sm">
              <strong>
                <p>{post?.published ? 'Published' : 'Draft'}</p>
              </strong>
              <p>{savedState}</p>
            </div>
            <button
              onClick={async () => {
                await publish()
              }}
              title={
                disabled
                  ? 'Post must have a title, description, and content to be published.'
                  : 'Publish'
              }
              disabled={disabled}
              className={`${
                disabled
                  ? 'cursor-not-allowed border-gray-300 bg-gray-300'
                  : 'border-black bg-black hover:bg-white hover:text-black'
              } mx-2 h-12 w-32 border-2 text-lg text-white transition-all duration-150 ease-in-out focus:outline-none`}
            >
              {publishing ? <LoadingDots /> : 'Publish  →'}
            </button>
          </div>
        </footer>
      </Layout>
    </>
  )
}
