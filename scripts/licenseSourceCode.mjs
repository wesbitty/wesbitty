import chalk from 'chalk'
import { execSync } from 'child_process'
import { writeFile } from 'fs'
import fs from 'graceful-fs'
import path from 'path'

;(async function () {
  const DIR = path.join(process.cwd(), 'packages/ui/src/components/')
  const getFileContents = (path) => fs.readFileSync(path, { encoding: 'utf-8' })
  const isDirectory = (path) => fs.lstatSync(path).isDirectory()

  const INCLUDED_PATTERNS = [
    // Any file with an extension
    /\.[^/]+$/,
  ]

  // prettier-ignore
  const copyrightSnippet = `
/**
 * Copyright (c) Wesbitty Inc
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

  function needsCopyrightHeader(file) {
    const contents = getFileContents(file)
    return contents.trim().length > 0 && !contents.includes(copyrightSnippet)
  }
  try {
    const allFiles = execSync('git ls-files', { encoding: 'utf-8' })
      .trim()
      .split('\n')

    writeFile(needsCopyrightHeader)
  } catch (e) {
    console.error(chalk.inverse.red(' Unable to validate source code '))
    throw e
  }
  console.log(
    chalk.inverse.green('All Source code has been licensed successfully!')
  )
})()
