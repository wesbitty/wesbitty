import { format, parseISO } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote'
import renderToString from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Badge,
  Card,
  Divider,
  IconChevronLeft,
  IconFile,
  Space,
  Typography,
} from 'ui'
import authors from 'wesbitty/data/authors.json'
import { allPosts, Post } from 'wesjet/static'
import ImageGrid from '~/components/Image/ImageGrid'
import Quote from '~/components/Quote'
import CodeBlock from '~/components/codeblock/CodeBlock'
import { Default } from '~/components/widget/Default'
import { Metadata } from '~/utils/Metadata'
import { generateReadingTime } from '~/utils/helpers'
import { defineStaticProps } from '~/utils/next'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.slug)

  return {
    paths,
    fallback: false,
  }
}

const components = {
  CodeBlock,
  Quote,
  code: (post: any) => {
    return <CodeBlock {...post} />
  },
  ImageGrid,
}

export const getStaticProps = defineStaticProps(async (context) => {
  const params = context.params as unknown as Post
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  return {
    props: {
      post,
    },
  }
})

const PostLayout = ({ post }: { post: Post }) => {
  // @ts-ignore
  const author = post.author ? authors[post.author] : authors['wesbitty']
  const router = useRouter()
  const { data, content } = matter(post.body.html)

  const relatedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const slugTitle = `${post.title} - ${Metadata.Name}`
  const slugDescription = `${post.description}`

  return (
    <>
      <NextSeo
        title={slugTitle}
        description={slugDescription}
        openGraph={{
          title: slugTitle,
          description: slugDescription,
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
        <div
          className="
          bg-white dark:bg-dark-800
            container px-8 sm:px-16 xl:px-20 mx-auto
            py-16
          "
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-2 mb-2">
              {/* Back button */}
              <Typography.Text type="secondary">
                <Link
                  href={'/blog'}
                  className="hover:text-gray-900 dark:hover:text-white cursor-pointer flex items-center"
                >
                  <IconChevronLeft style={{ padding: 0 }} />
                  Back
                </Link>
              </Typography.Text>
            </div>
            <div className="col-span-12 lg:col-span-12 xl:col-span-10">
              {/* Title and description */}
              <div className="mb-16 space-y-8 max-w-5xl">
                <div className="space-y-4">
                  <Typography.Text type="success">Blog post</Typography.Text>
                  <Typography.Title>{post.title}</Typography.Title>
                  <div className="flex space-x-3">
                    <Typography.Text>
                      {format(new Date(post.date), 'MMMM dd, yyyy')}
                    </Typography.Text>
                    <Typography.Text type="secondary">•</Typography.Text>
                    <Typography.Text>
                      {generateReadingTime(post.slug)}
                    </Typography.Text>
                  </div>
                  {author && (
                    <div className="mt-6 mb-8 lg:mb-0">
                      <Space size={4}>
                        {author.avatar && (
                          <img
                            src={author.avatar}
                            className="rounded-full w-10 border dark:border-dark"
                          />
                        )}
                        <Space direction="vertical" size={0}>
                          <Typography.Text>{author.author}</Typography.Text>
                          <Typography.Text type="secondary" small>
                            {author.position}
                          </Typography.Text>
                        </Space>
                      </Space>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-12 lg:gap-16 xl:gap-8">
                {/* Content */}
                <div className="col-span-12 lg:col-span-7 xl:col-span-7">
                  {post.thumb && (
                    <img
                      src={'/images/blog/' + post.thumb}
                      className="object-cover mb-8 border dark:border-gray-600"
                      style={{ maxHeight: '520px' }}
                    />
                  )}
                  <article className="">
                    <Typography>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.body.html }}
                      />
                    </Typography>
                  </article>
                </div>
                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-5 xl:col-span-3 xl:col-start-9 space-y-8">
                  <Space
                    direction="vertical"
                    size={8}
                    className="lg:mb-16 lg:top-16 lg:sticky"
                  >
                    <div className="mb-4 lg:block">Category: {post.label}</div>
                    <div>
                      <div className="mb-4">
                        <Typography.Text type="secondary">
                          Related articles
                        </Typography.Text>
                      </div>
                      <Space direction="vertical">
                        {relatedPosts.map((post) => (
                          <Link href={post.slug} as={post.slug}>
                            <div>
                              <Typography.Text className="cursor-pointer">
                                <Space>
                                  <IconFile
                                    size={'small'}
                                    style={{ minWidth: '1.2rem' }}
                                  />
                                  <span className="hover:text-gray-900 dark:hover:text-white">
                                    {post.title}
                                  </span>
                                </Space>
                              </Typography.Text>
                              <Divider light className="mt-2" />
                            </div>
                          </Link>
                        ))}
                        <Link href={`/blog`} as={`/blog`}>
                          <div>
                            <Typography.Text type="secondary">
                              <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">
                                View all posts
                              </span>
                            </Typography.Text>
                          </div>
                        </Link>
                      </Space>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  )
}

export default PostLayout
