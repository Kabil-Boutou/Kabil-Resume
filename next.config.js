const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  env: {
    url: process.env.DOMAIN,
  },
})
