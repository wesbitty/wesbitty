import { defineDocumentType, makeSource } from 'wesjet/maker'

const Postfield = defineDocumentType(() => ({
  name: 'PostFields',
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
      resolve: (doc) => `/_postFields/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: '_postFields',
  documentTypes: [Postfield],
})