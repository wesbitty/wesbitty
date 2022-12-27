import { defineDocumentType, makeSource } from 'wesjet/maker'

const Blog = defineDocumentType(() => ({
  name: 'AllBlogPost',
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
  documentTypes: [Blog],
})