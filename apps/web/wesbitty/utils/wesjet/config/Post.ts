import { defineDocumentType, defineNestedType, makeSource } from 'wesjet/preset'
import { contentDirPath, urlFromFilePath } from '../utils'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true },
  },
}))

const Thumbnail = defineNestedType(() => ({
  name: 'Thumbnail',
  fields: {
    url: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    width: { type: 'number', required: true },
    height: { type: 'number', required: true },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    label: {
      type: 'string',
    },
    authorURL: {
      type: 'string',
    },
    excerpt: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    author: {
      type: 'string',
      of: Author,
      required: true,
    },
  },
  computedFields: {
    url_path: {
      type: 'string',
      resolve: urlFromFilePath,
    },
    slug: {
      type: 'string',
      resolve: (post) => urlFromFilePath(post).replace('blog/', ''),
    },
  },
}))
