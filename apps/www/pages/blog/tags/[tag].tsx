import { NextSeo } from 'next-seo'
import { getSortedPosts, getAllCategories } from '../../../@wesbitty/lib/posts'

import DefaultLayout from '../../../components/Layouts/Default'
import BlogListItem from '../../../components/Blog/BlogListItem'
import PostTypes from '../../../@wesbitty/config/post'
import BlogHeader from '../../../components/Blog/BlogHeader'

export async function getStaticProps({ params }: any) {
  const posts = getSortedPosts(0, [params.tag])
  return {
    props: {
      tag: params.tag,
      blogs: posts,
    },
  }
}

export async function getStaticPaths() {
  const categories = getAllCategories()
  return {
    paths: categories.map((category: any) => ({ params: { tag: category } })),
    fallback: false,
  }
}

interface Props {
  tag: string
  blogs: PostTypes[]
}

function TagBlogsPage(props: Props) {
  const { blogs, tag } = props
  return (
    <>
      <NextSeo title="Blog" description="Latest news from the Wesbitty team." />
      <DefaultLayout>
        <BlogHeader title={`${tag} posts`} />
        <div className="mx-auto mt-12 grid max-w-lg lg:max-w-none lg:grid-cols-1">
          {blogs.map((blog: PostTypes, idx: number) => (
            <BlogListItem blog={blog} key={idx} />
          ))}
        </div>
      </DefaultLayout>
    </>
  )
}

export default TagBlogsPage
