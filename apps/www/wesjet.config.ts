import { defineDocumentType, makeSource } from 'wesjet/maker'

const PostsField = defineDocumentType(() => ({
  name: 'PostsField',
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
      resolve: (doc) => `/_postsField/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: '_postsField',
  documentTypes: [PostsField],
})
