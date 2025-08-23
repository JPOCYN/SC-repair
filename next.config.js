/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  // Ensure proper static generation
  output: 'standalone',
  // Ensure proper trailing slashes
  trailingSlash: false,
}

module.exports = nextConfig
