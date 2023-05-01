// @ts-check
const { wesjetConfig } = require('wesjet/next')

module.exports = wesjetConfig({
  images: {
    domains: [
      'res.cloudinary.com',
      'abs.twimg.com',
      'i.imgur.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ['ui'],
})
