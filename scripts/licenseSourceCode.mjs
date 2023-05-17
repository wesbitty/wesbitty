import fs from 'graceful-fs'
import path from 'path'

import { execSync } from 'child_process'
;(async function () {
  const PackageDir = path.join(
    process.cwd(),
    'packages/ui/src/components/Avatar.tsx'
  )
  const getFileContents = (path) => fs.readFileSync(path, { encoding: 'utf-8' })
  const isDirectory = (path) => fs.lstatSync(path).isDirectory()

  const INCLUDED_PATTERNS = [
    // Any file with an extension
    /\.[^/]+$/,
  ]

  // prettier-ignore
  const copyrightSnippet = [`
/**
 * Copyright (c) Wesbitty Inc
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`].join('\n');

  function needsCopyrightHeader(file) {
    const contents = getFileContents(file)
    return contents.trim().length > 0 && !contents.includes(copyrightSnippet)
  }

  const allFiles = execSync('git ls-files', { encoding: 'utf-8' })
    .trim()
    .split('\n')

  const invalidFiles = allFiles.filter(
    (file) =>
      INCLUDED_PATTERNS.some((pattern) => pattern.test(file)) &&
      isDirectory(file) &&
      needsCopyrightHeader(file)
  )

  if (invalidFiles.length > 0) {
    fs.writeFile(INCLUDED_PATTERNS, needsCopyrightHeader, function (err) {
      if (err) throw err
      console.log('All Source code has been licensed successfully!')
    })
  }
})()