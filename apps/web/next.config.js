/**
 * @type {import('next').NextConfig}
 */
// @ts-check
const { withWesjet } = require('wesjet-nextjs-plugin')

module.exports = withWesjet({
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
