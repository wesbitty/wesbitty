import { defineDocumentType, defineNestedType, makeSource } from 'wesjet/maker'
import { DocumentGen } from 'wesjet/core'

const contentDirPath = '[blog]'

const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
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
    thumb: {
      type: 'string',
      required: true,
    },
    label: {
      type: 'string',
    },
    image: {
      type: 'string',
      required: true,
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
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath,
  documentTypes: [Post],
})
