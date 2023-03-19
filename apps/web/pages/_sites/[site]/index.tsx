import Layout from '~/components/sites/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BlurImage from '~/components/BlurImage'
import BlogCard from '~/components/Cards/BlogCard'
import Loader from '~/components/sites/Loader'
import { prisma } from "database";

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { _SiteData, Meta } from '~/types'
import type { ParsedUrlQuery } from 'querystring'
import { placeholderBlurhash, toDateString } from '~/lib/utils'

interface PathProps extends ParsedUrlQuery {
  site: string
}

interface IndexProps {
  stringifiedData: string
}

export default function Index({ stringifiedData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <Loader />

  const data = JSON.parse(stringifiedData) as _SiteData

  const meta = {
    title: data.name,
    description: data.description,
    logo: '/logo.png',
    ogImage: data.image,
    ogUrl: data.customDomain ? data.customDomain : `https://${data.subdomain}.wesbitty.org`,
  } as Meta

  return (
    <Layout meta={meta} subdomain={data.subdomain ?? undefined}>
      <div className="mb-20 w-full">
        {data.posts.length > 0 ? (
          <div className="mx-auto w-full max-w-screen-xl md:mb-28 lg:w-5/6">
            <Link href={`/${data.posts[0].slug}`}>
              <div className="sm:h-150 group relative mx-auto h-80 w-full overflow-hidden lg:rounded-xl">
                {data.posts[0].image ? (
                  <BlurImage
                    alt={data.posts[0].title ?? ''}
                    blurDataURL={data.posts[0].imageBlurhash ?? placeholderBlurhash}
                    className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                    width={1300}
                    height={630}
                    placeholder="blur"
                    src={data.posts[0].image}
                  />
                ) : (
                  <div className="absolute flex h-full w-full select-none items-center justify-center bg-gray-100 text-4xl text-gray-500">
                    ?
                  </div>
                )}
              </div>
              <div className="mx-auto mt-10 w-5/6 lg:w-full">
                <h2 className="font-cal my-10 text-4xl md:text-6xl">{data.posts[0].title}</h2>
                <p className="w-full text-base md:text-lg lg:w-2/3">{data.posts[0].description}</p>
                <div className="flex w-full items-center justify-start space-x-4">
                  <div className="relative h-8 w-8 flex-none overflow-hidden rounded-full">
                    {data.user?.image ? (
                      <BlurImage
                        alt={data.user?.name ?? 'User Avatar'}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                        src={data.user?.image}
                      />
                    ) : (
                      <div className="absolute flex h-full w-full select-none items-center justify-center bg-gray-100 text-4xl text-gray-500">
                        ?
                      </div>
                    )}
                  </div>
                  <p className="ml-3 inline-block whitespace-nowrap align-middle text-sm font-semibold md:text-base">
                    {data.user?.name}
                  </p>
                  <div className="h-6 border-l border-gray-600" />
                  <p className="m-auto my-5 w-10/12 text-sm font-light text-gray-500 md:text-base">
                    {toDateString(data.posts[0].createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <BlurImage
              src="/empty-state.png"
              alt="No Posts"
              width={613}
              height={420}
              placeholder="blur"
              blurDataURL={placeholderBlurhash}
            />
            <p className="font-cal text-2xl text-gray-600">No posts yet.</p>
          </div>
        )}
      </div>

      {data.posts.length > 1 && (
        <div className="mx-5 mb-20 max-w-screen-xl lg:mx-24 2xl:mx-auto">
          <h2 className="font-cal mb-10 text-4xl md:text-5xl">More stories</h2>
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {data.posts.slice(1).map((metadata, index) => (
              <BlogCard key={index} data={metadata} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const [subdomains, customDomains] = await Promise.all([
    prisma.site.findMany({
      // you can remove this if you want to generate all sites at build time
      where: {
        subdomain: 'demo',
      },
      select: {
        subdomain: true,
      },
    }),
    prisma.site.findMany({
      where: {
        NOT: {
          customDomain: null,
        },
        // you can remove this if you want to generate all sites at build time
        customDomain: 'platformize.co',
      },
      select: {
        customDomain: true,
      },
    }),
  ])

  const allPaths = [
    ...subdomains.map(({ subdomain }) => subdomain),
    ...customDomains.map(({ customDomain }) => customDomain),
  ].filter((path) => path) as Array<string>

  return {
    paths: allPaths.map((path) => ({
      params: {
        site: path,
      },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<IndexProps, PathProps> = async ({ params }) => {
  if (!params) throw new Error('No path parameters found')

  const { site } = params

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

  const data = (await prisma.site.findUnique({
    where: filter,
    include: {
      user: true,
      posts: {
        where: {
          published: true,
        },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      },
    },
  })) as _SiteData

  if (!data) return { notFound: true, revalidate: 10 }

  return {
    props: {
      stringifiedData: JSON.stringify(data),
    },
    revalidate: 3600,
  }
}
