import { defineDocumentType, makeSource } from 'wesjet/maker'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    author: {
      type: 'string',
      descriptio: 'The author of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The post description',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/_AllBlogPost/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: '_AllBlogPost',
  documentTypes: [Post],
})
