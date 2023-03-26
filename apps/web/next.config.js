const { withWesjet } = require('wesjet-nextjs-plugin')

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
  swcMinify: false,
  transpilePackages: ['ui'],
  output: 'standalone',
})
