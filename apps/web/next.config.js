// @ts-check
const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
  output: 'standalone',
  images: {
    domains: ['pbs.twimg.com', 'avatars.githubusercontent.com', 'i.imgur.com', 'user-images.githubusercontent.com', 'colab.research.google.com', 'avatars.githubusercontent.com', 'avatars.githubusercontent.com', 'github.com'],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Strict-Transport-Security', value: '' },
        { key: 'X-Robots-Tag', value: 'all' },
        { key: 'X-Frame-Options', value: 'DENY' },
      ],
    },
  ],
})
