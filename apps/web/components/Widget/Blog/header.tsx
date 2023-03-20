import React from 'react'
import { Typography } from '@wesbitty/ui'
import { Post } from 'wesjet/jetpack'
import { FC } from 'react'

export const BlogHeader: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-dark-800 overflow-hidden pt-4 pb-4 border-b dark:border-gray-600">
      <div className="container mx-auto px-8 sm:px-16 xl:px-20">
        <div className="mx-auto">
          <Typography.Title>
            <span className="text-3xl">{post.title}</span>
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}