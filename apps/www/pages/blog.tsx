import { generateRss } from '../@wesbitty/utils/schemas/generate-rss'
import { Metadata } from '../@wesbitty/utils/schemas/Metadata'
import fs from 'fs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { getSortedPosts, getAllCategories } from '../@wesbitty/lib/posts'
import authors from '../@wesbitty/data/authors.json'
import DefaultLayout from '../components/Layouts/Default'
import { Typography, Tabs } from '@wesbitty/ui'
import { PostTypes } from '../@wesbitty/types/post'
import BlogListItem from '../components/Blog/BlogListItem'
import { allPostsFields, PostsField } from 'wesjet/jetpack'


export async function getStaticProps() {
  const allPostsData = getSortedPosts('[blog]')
  const categories = getAllCategories('[blog]')
  const GetRss = generateRss(allPostsData)
  // create a rss feed in schemas directory
  fs.writeFileSync('./public/rss.xml', GetRss)

  return {
    props: {
      blogs: allPostsData,
      categories,
    },
  }
}

const Title = `Blog - ${Metadata.Name}`
const pageTitle =
  "The Wesbitty Blog | Updates, Ideas, Tips, Trends to help developers build application's."
const Description =
  "The Wesbitty Blog | Updates, Ideas, Tips, Trends to help developers build application's."

function Blog(props: any) {
  const [category, setCategory] = useState('all')
  const [blogs, setBlogs] = useState(props.blogs)

  const router = useRouter()

  useEffect(() => {
    // contruct an array of blog posts
    // not inluding the first blog post
    const shiftedBlogs = [...props.blogs]
    shiftedBlogs.shift()

    setBlogs(
      category === 'all'
        ? shiftedBlogs
        : props.blogs.filter((post: any) => {
            const found = post.tags.includes(category)
            return found
          })
    )
  }, [category])

  useEffect(() => {
    return props.categories.unshift('all')
  }, [])

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={Description}
        openGraph={{
          title: Title,
          description: Description,
          url: `https://wesbitty.com/${router.pathname}`,
          images: [
            {
              url: `https://wesbitty.com/images/og/og-image.jpg`,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            href: `https://wesbitty.com/rss.xml`,
          },
        ]}
      />
      <DefaultLayout>
        <div className="bg-white dark:bg-dark-800 overflow-hidden py-12">
          <div className="container mx-auto px-8 sm:px-16 xl:px-20 mt-16">
            <div className="mx-auto ">
              {props.blogs.slice(0, 1).map((blog: any, idx: any) => {
                return FeaturedThumb(blog)
              })}
            </div>
          </div>
        </div>

        <div className="border-t dark:border-dark">
          <div className="container mx-auto px-8 sm:px-16 xl:px-20 mt-16">
            <div className="mx-auto ">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-12">
                  <Tabs scrollable size="medium" onChange={setCategory} defaultActiveId={'all'}>
                    {props.categories.map((categoryId: string) => (
                      <Tabs.Panel id={categoryId} label={categoryId}>
                        {/* <p>{categoryId}</p> */}
                        <></>
                      </Tabs.Panel>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>

            <ol className="grid grid-cols-12 py-16 lg:gap-16">
              {blogs.map((blog: PostTypes, idx: number) => (
                <div className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 mb-16">
                  <BlogListItem blog={blog} key={idx} />
                </div>
              ))}
            </ol>
          </div>{' '}
        </div>
      </DefaultLayout>
    </>
  )
}

function FeaturedThumb(blog: PostTypes) {
  // @ts-ignore
  const author = blog.author ? authors[blog.author] : authors['wesbitty']

  return (
    <div key={blog.slug} className="cursor-pointer w-full">
      <a href={`/blog/${blog.url}`}>
        <a className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <img
            className="h-96 w-full object-cover border dark:border-dark rounded-lg"
            src={`/images/blog/` + (blog.thumb ? blog.thumb : blog.image)}
          />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <Typography.Text type="secondary">{blog.date}</Typography.Text>
              <Typography.Text type="secondary">•</Typography.Text>
              <Typography.Text type="secondary">{blog.readingTime}</Typography.Text>
            </div>

            <div>
              <Typography.Title level={2}>{blog.title}</Typography.Title>
              <Typography.Text className="m-0" type="secondary">
                <span className="text-xl">{blog.description}</span>
              </Typography.Text>
            </div>

            {author && (
              <div className="flex space-x-3 items-center">
                {author.avatar && (
                  <img src={author.avatar} className="rounded-full w-10" />
                )}
                <div className="flex flex-col">
                  <Typography.Text>{author.author}</Typography.Text>
                  <Typography.Text type="secondary" small>
                    {author.position}
                  </Typography.Text>
                </div>
              </div>
            )}
          </div>
        </a>
      </a>
    </div>
  )
}

export default Blog
