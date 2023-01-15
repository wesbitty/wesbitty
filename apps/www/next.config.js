// @ts-check
const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
  distDir: 'build',
  output: 'standalone'
})
