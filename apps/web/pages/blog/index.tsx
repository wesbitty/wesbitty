import type { InferGetStaticPropsType } from 'next'
import { MakeReload } from 'wesjet/hooks'
import type { FC } from 'react'
import { allPosts } from 'wesjet/static'
import { Default } from '~/widget/Default'
import { defineStaticProps } from '~/utils/next'
import ListItem from '~/widget/Blog/item'
import { Metadata } from '~/utils/Metadata'
import { Typography, Space, Tabs } from '@wesbitty/ui'
import { generateRss } from '~/utils/Rss'
import fs from 'fs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export const getStaticProps = defineStaticProps(async (context) => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const GetRss = generateRss(posts)
  fs.writeFileSync('./public/rss.xml', GetRss)

  return { props: { posts } }
})

export const BlogPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const router = useRouter()
  MakeReload()
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
              url: `https://wesbitty.org/brand/og/wesbitty-og.jpg`,
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
        <div className="mx-auto w-full max-w-screen-xl space-y-16 px-4 py-8 md:px-8 md:py-24 lg:space-y-24 lg:py-32">
          <div className="max-w-3xl space-y-8">
            <Typography.Title level={3}>{Title}</Typography.Title>
            <Typography.Text type="default">{Description}</Typography.Text>
          </div>

          <ul className="grid grid-cols-12 py-6 lg:gap-16">
            {posts.map((post, index) => (
              <ol className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 mb-16">
                <ListItem key={index} post={post} />
              </ol>
            ))}
          </ul>
        </div>
      </Default>
    </>
  )
}
