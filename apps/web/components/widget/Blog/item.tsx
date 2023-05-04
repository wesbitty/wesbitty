import Image from 'next/image'
import { Space, Typography } from '@wesbitty/ui'
import authors from '~/data/authors.json'
import React from 'react'
import { Post } from 'wesjet/static'
import { FC } from 'react'
import { format } from 'date-fns'
import Link from 'next/link'

const ListItem: FC<{ post: Post }> = ({ post }) => {
  // @ts-ignore
  const author = post.author ? authors[post.author] : authors['wesbitty']

  return (
    <div>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block min-w-full group"
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-3">
            <div
              className={`border-slate-30000 relative mb-4 h-60 w-full overflow-auto rounded-lg border shadow-sm`}
            >
              <Image
                alt="Thumbnail"
                src={
                  !post.thumbnail
                    ? `/images/blog/blog-placeholder.png`
                    : `/images/blog/${post.thumbnail}`
                }
                className="slate-100 transform duration-100 ease-in group-hover:scale-105"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <h3 className="text-slate-1200 max-w-sm text-xl">{post.title}</h3>
            <p className="text-slate-1100 text-xs">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </p>
            <p className="text-slate-1100 max-w-sm text-base">
              {post.description}
            </p>
          </div>
          {author && (
            <div>
              <Space size={4}>
                {author.avatar && (
                  <div className="dark:ring-slate-200 w-10 rounded-full ring-2 ring-white">
                    <Image
                      alt={author.avatar}
                      height={40}
                      className="dark:border-dark rounded-full border"
                      src={author.avatar}
                      width={40}
                    />
                  </div>
                )}
                <span className="inline-block ml-3 text-slate-1100 text-base truncate">
                  {author.author}
                </span>
              </Space>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ListItem
