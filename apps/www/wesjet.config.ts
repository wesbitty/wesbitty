import { DocumentGen } from 'wesjet/core'
import { defineDocumentType, defineNestedType, makeSource } from 'wesjet/maker'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true },
  },
}))

const PostsField = defineDocumentType(() => ({
  name: 'PostsField',
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
    url: {
      type: 'string',
      resolve: urlFromFilePath,
    },
  },
}))

const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '')
}

export default makeSource({
  contentDirPath: '[blog]',
  documentTypes: [PostsField],
})
