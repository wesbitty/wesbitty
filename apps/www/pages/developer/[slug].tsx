import { useEffect } from 'react'
import fs from 'fs'
import path from 'path'

import Head from 'next/head'
// import styles from "../styles/Home.module.css";
// import Introduction from "./../_posts/Introduction.mdx";
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { getAllPostSlugs, getPostdata } from '../../@wesbitty/lib/developer'

// import Heading from "~/../../components/heading";
// import Header from "~/../../components/Header";
import DefaultLayout from '../../components/Developer/DefaultLayout'

import { Button, IconAlertCircle, IconEdit, IconGitHub, Space, Typography } from '@wesbitty/ui'

// import { getPostdata } from "../lib/posts";
import ComponentIndex from '../../components/Developer/ComponentIndex'
import CodeSample from '../../components/Developer/CodeSample'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ComponentProps from '../../components/Developer/ComponentProps'
import BlogPostPage from 'pages/blog/[year]/[month]/[day]/[slug]'

// import ButtonSample from "../../_components/button/sample";

const components = { CodeSample, ComponentProps, ...ComponentIndex }

export default function Home({ source, frontmatter, toc }: any) {
  const gfm = require('remark-gfm')

  const content = hydrate(source, { components })

  const TableOfContents = toc && (
    <div className="toc">
      <Typography.Title level={5}>Contents</Typography.Title>
      <ReactMarkdown plugins={[gfm]}>{toc.content}</ReactMarkdown>
    </div>
  )

  useEffect(() => {
    if (typeof document !== undefined && document) {
      const container = document.querySelector('main')
      container?.scroll(0, 0)
    }
  })

  return (
    <DefaultLayout>
      <div className="container mx-auto grid grid-cols-12 px-0 lg:gap-16 lg:py-8">
        <article className="col-span-12 lg:col-span-9 xl:col-span-7">
          <Typography.Title>{frontmatter.title}</Typography.Title>
          {/* <Typography.Title level={3}>
            {frontmatter.description}
          </Typography.Title> */}
          <Typography.Text>
            <div className="my-8 text-sm">
              <div className="flex flex-col  space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-3">
                <a
                  href={`https://github.com/supabase/ui/tree/master/../../components/Field/${frontmatter.title}/${frontmatter.title}.tsx`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="default" iconRight={<IconGitHub />}>
                    View source
                  </Button>
                </a>

                <a
                  href="https://github.com/supabase/ui/issues/new/choose"
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="default" iconRight={<IconAlertCircle />}>
                    Report an issue
                  </Button>
                </a>

                <a
                  href={`https://github.com/wesbitty/wesbitty/tree/master/apps/www/_developer/${frontmatter.title.toLowerCase()}/index.mdx`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button type="dashed" iconRight={<IconEdit />}>
                    Edit this page
                  </Button>
                </a>
              </div>
            </div>
          </Typography.Text>
          {/* <Header img={frontmatter.img} /> */}
          <div className="py-0">
            <Typography>{content}</Typography>
          </div>
        </article>
        <div className="col-start-11 hidden lg:col-span-3 lg:block xl:col-span-2">
          {TableOfContents}
        </div>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs('_developer')
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  // plugins for next-mdx-remote
  const gfm = require('remark-gfm')
  const slug = require('rehype-slug')

  // table of contents extractor
  const toc = require('markdown-toc')

  //Finding directory named "blog" from the current working directory of Node.
  const filePath = `${params.slug}/index`
  const postDirectory = path.join(process.cwd(), '_developer')
  const fullPath = path.join(postDirectory, `${filePath}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  const mdxSource: any = await renderToString(content, {
    components,
    scope: data,
    mdxOptions: {
      remarkPlugins: [gfm],
      rehypePlugins: [slug],
    },
  })

  return {
    props: {
      source: mdxSource,
      frontmatter: {
        ...data,
      },
      toc: toc(content, { maxdepth: 2 }),
    },
  }
}
