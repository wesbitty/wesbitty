import { Space, Typography } from '@wesbitty/ui'
import Image from 'next/image'
import React from 'react'

interface Props {
  children: React.ReactNode
  caption: string
  Img: string
}

export default function Quote(props: Props) {
  const { children, caption, Img } = props

  return (
    <figure className="border border-gray-100 p-8 dark:border-gray-600">
      <Space direction="vertical" size={5}>
        <blockquote className="mb-4 border-none" style={{ margin: 0, padding: 0 }}>
          {children}
        </blockquote>
        <Space size={4} className="align-center">
          <Image
            alt="Avatar"
            src={'/images/blog/avatars/' + Img}
            className="h-16 w-16 rounded-full object-cover text-center"
            style={{ margin: 0 }}
          />
          <figcaption style={{ marginTop: 0 }}>
            <Typography.Text>{caption}</Typography.Text>
          </figcaption>
        </Space>
      </Space>
    </figure>
  )
}
