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
    <div key={post.slug}>
      <Link href={post.slug}>
        <div className="inline-block min-w-full group">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <div
                className={`relative overflow-auto w-full border dark:border-dark shadow-sm rounded-lg mb-4`}
              >
                <Image
                  alt="Thumbnail"
                  src={
                    !post.thumb ? `/images/blog/blog-placeholder.png` : `/images/blog/${post.thumb}`
                  }
                  className="p-1 bg-sky-50 border rounded max-w-sm"
                  width={452}
                  height={240}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div>
                <Typography.Title level={3} className="m-0">
                  {post.title}
                </Typography.Title>
              </div>
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
                  {author.avatar && <img src={author.avatar} className="rounded-full w-10" />}
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
