// @ts-check
const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
  basePath: '',
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  images: {
    domains: [
      'pbs.twimg.com',
      'ca.slack-edge.com',
      'res.cloudinary.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'github.com',
      'i.imgur.com',
    ],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: '',
        },
        {
          key: 'X-Robots-Tag',
          value: 'all',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
      ],
    },
  ],
})
