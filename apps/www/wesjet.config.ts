import { makeSource } from 'wesjet/maker'
import highlight from 'rehype-highlight'
import { contentDirPath } from './@wesbitty/path/utils'
import * as documentTypes from './@wesbitty/path'


export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: { rehypePlugins: [highlight] },
})