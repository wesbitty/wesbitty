import { DocumentGen } from 'wesjet/core'
import { defineDocumentType, defineNestedType, makeSource } from 'wesjet/preset'

const contentDirPath = './[Posts]'

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
    urlPath: {
      type: 'string',
      resolve: urlFromFilePath,
    },
    slug: {
      type: 'string',
      resolve: (post) => urlFromFilePath(post).replace('blog/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath,
  documentTypes: [Post],
})
