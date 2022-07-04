/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    unoptimized: true,
  }
}

module.exports = nextConfig
