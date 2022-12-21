const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
  experimental: {
    outputStandalone: true,
  },
})
