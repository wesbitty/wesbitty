const { withWesjet } = require('wesjet-nextjs-plugin')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withWesjet({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'res.cloudinary.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
})
