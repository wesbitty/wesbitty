const { withWesjet } = require('wesjet-nextjs-plugin')
const path = require('path')

module.exports = withWesjet({
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['pbs.twimg.com', 'avatars.githubusercontent.com', 'i.imgur.com'],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
      ],
    },
  ],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
    transpilePackages: ['ui'],
  },
})
