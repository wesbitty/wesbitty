const { wesjetConfig } = require('wesjet/next')

module.exports = wesjetConfig({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'res.cloudinary.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
    ],
  },
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ['ui'],
})
