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
import { NextSeo } from 'next-seo'

export const getStaticProps = defineStaticProps(async (context) => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const GetRss = generateRss(posts)
  fs.writeFileSync('./public/rss.xml', GetRss)

  return { props: { posts } }
})

const Blog: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  MakeReload()
  const PageMeta = {
    title: `Blog - ${Metadata.Name}`,
    description: `The Wesbitty Blog | Updates, Ideas, Tips, Trends to help developers build application's.`,
  }
  const Title = 'The Wesbitty Blog'
  const Description =
    "Updates, Ideas, Tips, Trends to help developers build application's."

  return (
    <>
      <NextSeo
        title={PageMeta.title}
        description={PageMeta.description}
        openGraph={{
          title: PageMeta.title,
          description: PageMeta.description,
          url: `${Metadata.Url}/blog`,
          images: [
            {
              url: `${Metadata.Url}${Metadata.Og}`,
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

          <ul className="grid grid-cols-12 py-8 lg:gap-16">
            {posts.map((post, index) => (
              <li
                className="col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4"
                key={index}
              >
                <ListItem post={post} />
              </li>
            ))}
          </ul>
        </div>
      </Default>
    </>
  )
}

export default Blog
