/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.hashnode.com'],
  },
  output: 'standalone'
}

module.exports = nextConfig
