const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mac-os',
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'imgix',
    path: 'https://vvrtsaix.github.io/mac-os/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
