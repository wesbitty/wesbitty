import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import BlogCard from '~/components/Cards/BlogCard'
import BlurImage from '~/components/BlurImage'
import Examples from '~/components/mdx/Examples'
import Layout from '~/components/sites/Layout'
import Loader from '~/components/sites/Loader'
import { prisma } from "database";
import Tweet from '~/components/mdx/Tweet'
import { replaceExamples, replaceLinks, replaceTweets } from '~/lib/remark-plugins'

import type { AdjacentPost, Meta, _SiteSlugData } from '~/types'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { ParsedUrlQuery } from 'querystring'
import { placeholderBlurhash, toDateString } from '~/lib/utils'

const components = {
  a: replaceLinks,
  BlurImage,
  Examples,
  Tweet,
}

interface PathProps extends ParsedUrlQuery {
  site: string
  slug: string
}

interface PostProps {
  stringifiedData: string
  stringifiedAdjacentPosts: string
}

export default function Post({ stringifiedAdjacentPosts, stringifiedData }: PostProps) {
  const router = useRouter()
  if (router.isFallback) return <Loader />

  const data = JSON.parse(stringifiedData) as _SiteSlugData & {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
  }
  const adjacentPosts = JSON.parse(stringifiedAdjacentPosts) as Array<AdjacentPost>

  const meta = {
    description: data.description,
    logo: '/logo.png',
    ogImage: data.image,
    ogUrl: `https://${data.site?.subdomain}.wesbitty.org/${data.slug}`,
    title: data.title,
  } as Meta

  return (
    <Layout meta={meta} subdomain={data.site?.subdomain ?? undefined}>
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto w-full text-center md:w-7/12">
          <p className="m-auto my-5 w-10/12 text-sm font-light text-gray-500 md:text-base">
            {toDateString(data.createdAt)}
          </p>
          <h1 className="font-cal mb-10 text-3xl font-bold text-gray-800 md:text-6xl">
            {data.title}
          </h1>
          <p className="text-md m-auto w-10/12 text-gray-600 md:text-lg">{data.description}</p>
        </div>
        <a
          // if you are using Github OAuth, you can get rid of the Twitter option
          href={
            data.site?.user?.username
              ? `https://twitter.com/${data.site.user.username}`
              : `https://github.com/${data.site?.user?.gh_username}`
          }
          rel="noreferrer"
          target="_blank"
        >
          <div className="my-8">
            <div className="relative inline-block h-8 w-8 overflow-hidden rounded-full align-middle md:h-12 md:w-12">
              {data.site?.user?.image ? (
                <BlurImage
                  alt={data.site?.user?.name ?? 'User Avatar'}
                  height={80}
                  src={data.site.user.image}
                  width={80}
                />
              ) : (
                <div className="absolute flex h-full w-full select-none items-center justify-center bg-gray-100 text-4xl text-gray-500">
                  ?
                </div>
              )}
            </div>
            <div className="text-md ml-3 inline-block align-middle md:text-lg">
              by <span className="font-semibold">{data.site?.user?.name}</span>
            </div>
          </div>
        </a>
      </div>
      <div className="md:h-150 relative m-auto mb-10 h-80 w-full max-w-screen-lg overflow-hidden md:mb-20 md:w-5/6 md:rounded-2xl lg:w-2/3">
        {data.image ? (
          <BlurImage
            alt={data.title ?? 'Post image'}
            width={1200}
            height={630}
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL={data.imageBlurhash ?? placeholderBlurhash}
            src={data.image}
          />
        ) : (
          <div className="absolute flex h-full w-full select-none items-center justify-center bg-gray-100 text-4xl text-gray-500">
            ?
          </div>
        )}
      </div>

      <article
        className="prose prose-md sm:prose-lg m-auto w-11/12 sm:w-3/4"
        suppressHydrationWarning={true}
      >
        <MDXRemote {...data.mdxSource} components={components} />
      </article>

      {adjacentPosts.length > 0 && (
        <div className="relative mt-10 mb-20 sm:mt-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">Continue Reading</span>
          </div>
        </div>
      )}
      {adjacentPosts && (
        <div className="mx-5 mb-20 grid max-w-screen-xl grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:mx-12 xl:grid-cols-3 2xl:mx-auto">
          {adjacentPosts.map((data, index) => (
            <BlogCard key={index} data={data} />
          ))}
        </div>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      // you can remove this if you want to generate all sites at build time
      site: {
        subdomain: 'demo',
      },
    },
    select: {
      slug: true,
      site: {
        select: {
          subdomain: true,
          customDomain: true,
        },
      },
    },
  })

  return {
    paths: posts.flatMap((post) => {
      if (post.site === null || post.site.subdomain === null) return []

      if (post.site.customDomain) {
        return [
          {
            params: {
              site: post.site.customDomain,
              slug: post.slug,
            },
          },
          {
            params: {
              site: post.site.subdomain,
              slug: post.slug,
            },
          },
        ]
      } else {
        return {
          params: {
            site: post.site.subdomain,
            slug: post.slug,
          },
        }
      }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostProps, PathProps> = async ({ params }) => {
  if (!params) throw new Error('No path parameters found')

  const { site, slug } = params

  let filter: {
    subdomain?: string
    customDomain?: string
  } = {
    subdomain: site,
  }

  if (site.includes('.')) {
    filter = {
      customDomain: site,
    }
  }

  const data = (await prisma.post.findFirst({
    where: {
      site: {
        ...filter,
      },
      slug,
    },
    include: {
      site: {
        include: {
          user: true,
        },
      },
    },
  })) as _SiteSlugData | null

  console.log(data)

  if (!data) return { notFound: true, revalidate: 10 }

  const [mdxSource, adjacentPosts] = await Promise.all([
    getMdxSource(data.content ?? ''),
    prisma.post.findMany({
      where: {
        site: {
          ...filter,
        },
        published: true,
        NOT: {
          id: data.id,
        },
      },
      select: {
        slug: true,
        title: true,
        createdAt: true,
        description: true,
        image: true,
        imageBlurhash: true,
      },
    }),
  ])

  return {
    props: {
      stringifiedData: JSON.stringify({
        ...data,
        mdxSource,
      }),
      stringifiedAdjacentPosts: JSON.stringify(adjacentPosts),
    },
    revalidate: 3600,
  }
}

async function getMdxSource(postContents: string) {
  // Serialize the content string into MDX
  const mdxSource = await serialize(postContents, {
    mdxOptions: {
      remarkPlugins: [replaceTweets, () => replaceExamples(prisma)],
    },
  })

  return mdxSource
}
