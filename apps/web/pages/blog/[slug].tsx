import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'wesjet/static'
import { defineStaticProps } from '~/utils/next'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.slug)
  return {
    paths,
    fallback: false,
  }
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
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  )
}

export default PostLayout
