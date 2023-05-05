const { wesjetConfig } = require('wesjet/next')

module.exports = wesjetConfig({
  webpack: (config, { nextRuntime }) => {
    // Undocumented property of next 12.
    if (nextRuntime !== 'nodejs') return config
    return {
      ...config,
      entry() {
        return config.entry().then((entry) => ({
          ...entry,
          cli: path.resolve(process.cwd(), 'lib/cli.ts'),
        }))
      },
    }
  },
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
