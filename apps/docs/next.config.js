const { wesjetConfig } = require('wesjet/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  redirects() {
    return [
      {
        source: '/ui',
        destination: '/docs/ui',
        permanent: true,
      },
      {
        source: '/examples',
        destination: '/examples/dashboard',
        permanent: false,
      },
      {
        source: '/docs/primitives/:path*',
        destination: '/docs/ui/components/:path*',
        permanent: true,
      },
      {
        source: '/figma',
        destination: '/docs/figma',
        permanent: true,
      },
    ]
  },
}

module.exports = wesjetConfig(nextConfig)
