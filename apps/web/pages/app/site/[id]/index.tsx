import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'

import BlurImage from '~/components/BlurImage'
import Layout from '~/components/app/Layout'
import LoadingDots from '~/components/app/loading-dots'
import { fetcher } from '~/lib/fetcher'
import { HttpMethod } from '~/types'

import type { Post, Site } from '@prisma/client'

interface SitePostData {
  posts: Array<Post>
  site: Site | null
}

export default function SiteIndex() {
  const [creatingPost, setCreatingPost] = useState(false)

  const router = useRouter()
  const { id: siteId } = router.query

  const { data } = useSWR<SitePostData>(
    siteId && `/api/post?siteId=${siteId}&published=true`,
    fetcher,
    {
      onSuccess: (data) => !data?.site && router.push('/'),
    }
  )

  async function createPost(siteId: string) {
    try {
      const res = await fetch(`/api/post?siteId=${siteId}`, {
        method: HttpMethod.POST,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (res.ok) {
        const data = await res.json()
        router.push(`/post/${data.postId}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl py-20 px-10 sm:px-20">
        <div className="flex flex-col items-center justify-between space-y-5 sm:flex-row sm:space-y-0">
          <h1 className="font-cal text-5xl">Posts for {data ? data?.site?.name : '...'}</h1>
          <button
            onClick={() => {
              setCreatingPost(true)
              createPost(siteId as string)
            }}
            className={`${
              creatingPost
                ? 'cursor-not-allowed border-gray-300 bg-gray-300'
                : 'border-black bg-black text-white hover:bg-white hover:text-black'
            } font-cal w-3/4 border-2 px-5 py-3 text-lg tracking-wide transition-all duration-150 ease-in-out sm:w-40`}
          >
            {creatingPost ? (
              <LoadingDots />
            ) : (
              <>
                New Post <span className="ml-2">＋</span>
              </>
            )}
          </button>
        </div>
        <div className="my-10 grid gap-y-10">
          {data ? (
            data.posts.length > 0 ? (
              data.posts.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 md:h-60 md:flex-row">
                    <div className="relative h-60 w-full md:h-auto md:w-1/3 md:flex-none">
                      {post.image ? (
                        <BlurImage
                          alt={post.title ?? 'Unknown Thumbnail'}
                          width={500}
                          height={400}
                          className="h-full object-cover"
                          src={post.image}
                        />
                      ) : (
                        <div className="absolute flex h-full w-full items-center justify-center bg-gray-100 text-4xl text-gray-500">
                          ?
                        </div>
                      )}
                    </div>
                    <div className="relative p-10">
                      <h2 className="font-cal text-3xl">{post.title}</h2>
                      <p className="line-clamp-3 my-5 text-base">{post.description}</p>
                      <a
                        className="font-cal absolute bottom-5 left-10 whitespace-nowrap rounded bg-gray-200 px-3 py-1 tracking-wide text-gray-600"
                        href={`https://${data.site?.subdomain}.wesbitty.org/${post.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data.site?.subdomain}.wesbitty.org/{post.slug} ↗
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
                    No posts yet. Click &quot;New Post&quot; to create one.
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
