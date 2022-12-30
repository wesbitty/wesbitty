import React from 'react'
import { Typography } from '@wesbitty/ui'

interface Props {
  title: string
}

export default function BlogHeader({ title }: Props) {
  return (
    <div className="overflow-hidden border-b bg-white py-12 dark:border-gray-600 dark:bg-dark-800">
      <div className="container mx-auto mt-16 px-8 sm:px-16 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <Typography.Title>{title}</Typography.Title>
        </div>
      </div>
    </div>
  )
}
