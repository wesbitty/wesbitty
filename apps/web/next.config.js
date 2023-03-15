// @ts-check
const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
  images: {
    domains: [
      'res.cloudinary.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      'i.imgur.com',
      'avatars.githubusercontent.com',
      'user-images.githubusercontent.com',
      'colab.research.google.com',
      'github.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false,
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
