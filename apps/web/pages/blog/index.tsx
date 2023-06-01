import fs from 'fs'
import type { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Typography, Space, Tabs } from 'ui'
import { URL } from 'url'
import { MakeReload } from 'wesjet/hooks'
import { allPosts } from 'wesjet/static'
import ListItem from '~/components/widget/Blog/item'
import { Default } from '~/components/widget/Default'
import { Metadata } from '~/utils/Metadata'
import { generateRss } from '~/utils/Rss'
import { defineStaticProps } from '~/utils/next'

export const getStaticProps = defineStaticProps(async (context) => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const GetRss = generateRss(posts)
  fs.writeFileSync('./public/rss.xml', GetRss)

  return { props: { posts } }
})

const BlogPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  MakeReload()
  const router = useRouter()

  const pageTitle = `Blog - ${Metadata.Name}`
  const pageDescription =
    "The Wesbitty Blog | Updates, Ideas, Tips, Trends to help developers build application's."
  const Title = 'The Wesbitty Blog'
  const Description =
    "Updates, Ideas, Tips, Trends to help developers build application's."

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: `https://wesbitty.org/${router.pathname}`,
          images: [
            {
              url: `https://wesbitty.org/brand/og.png`,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            href: `https://wesbitty.org/rss.xml`,
          },
        ]}
      />
      <Default>
        <div className="container mx-auto px-8 sm:px-16 xl:px-20 mt-16">
          <div className="max-w-3xl space-y-8">
            <Typography.Title level={3}>{Title}</Typography.Title>
            <Typography.Text type="default">{Description}</Typography.Text>
          </div>

          <ol className="grid grid-cols-12 py-16 gap-8 lg:gap-16">
            {posts.map((post, index) => (
              <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 mb-16">
                <ListItem key={index} post={post} />
              </div>
            ))}
          </ol>
        </div>
      </Default>
    </>
  )
}

export default BlogPage
