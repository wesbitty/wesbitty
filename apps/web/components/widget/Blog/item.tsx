import authors from '../../../wesbitty/data/authors.json'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FC } from 'react'
import { Space, Typography } from 'ui'
import { Post } from 'wesjet/static'

const ListItem: FC<{ post: Post }> = ({ post }) => {
  // @ts-ignore
  const author = post.author ? authors[post.author] : authors['wesbitty']

  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <div className="group inline-block min-w-full">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <div className="relative overflow-auto w-full border dark:border-dark shadow-sm rounded-lg h-60 mb-4">
                <Image
                  alt="Thumbnail"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  src={
                    !post.thumb
                      ? `/images/blog/blog-placeholder.png`
                      : `/images/blog/${post.thumb}`
                  }
                  // width={600}
                  // height={338}

                  className="scale-100 transform duration-100 ease-in group-hover:scale-105"
                />
              </div>

              <h3 className="text-scale-1200 max-w-sm text-xl">{post.title}</h3>

              <Typography.Text type="secondary" small>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </Typography.Text>

              <Typography.Text className="m-0" type="secondary">
                <p className="text-base mb-0">{post.description}</p>
              </Typography.Text>
            </div>
            {author && (
              <div>
                <Space size={4}>
                  {author.avatar && (
                    <img
                      alt="Avatar"
                      src={author.avatar}
                      className="rounded-full w-10"
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
      </Link>
    </div>
  )
}

export default ListItem
