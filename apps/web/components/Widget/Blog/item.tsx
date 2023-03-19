import Image from 'next/image'
import { Space, Typography } from '@wesbitty/ui'
import authors from '../../../wesbitty/data/authors.json'
import React from 'react'
import { Post } from 'wesjet/jetpack'
import { FC } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'

const ListItem: FC<{ post: Post }> = ({ post }) => {
  // @ts-ignore
  const author = post.author ? authors[post.author] : authors['wesbitty']

  return (
    <div key={post.url}>
      <Link href={post.url}>
        <div className="group inline-block min-w-full">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <div
                className={`relative mb-4 h-60 w-full overflow-auto rounded-lg border border-gray-300 shadow-sm`}
              >
                <Image
                  alt="Thumbnail"
                  src={
                    !post.thumb ? `/images/blog/blog-placeholder.png` : `/images/blog/${post.thumb}`
                  }
                  className="rounded border bg-sky-50 p-1"
                  fill
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div>
                <Typography.Title level={4} className="m-0  max-w-sm text-xl">
                  {post.title}
                </Typography.Title>
              </div>
              <Typography.Text className="text-xs text-gray-500">
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </Typography.Text>

              <Typography.Text className="m-0" type="secondary">
                <p className="mb-0 text-base">{post.description}</p>
              </Typography.Text>
            </div>
            {author && (
              <div>
                <Space size={4}>
                  {author.avatar && (
                    <Image alt="Author Avatar" src={author.avatar} className="w-10 rounded-full" />
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
