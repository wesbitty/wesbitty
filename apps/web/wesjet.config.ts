import { makeSource } from 'wesjet/preset'
import highlight from 'rehype-highlight'
import { contentDirPath } from './wesbitty/utils/wesjet/utils'
import * as documentTypes from './wesbitty/utils/wesjet'

export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: { rehypePlugins: [highlight] },
})
