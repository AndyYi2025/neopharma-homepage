/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable static site generation
  trailingSlash: true,
}

module.exports = nextConfig
