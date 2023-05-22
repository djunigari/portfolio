/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djunigari.files.wordpress.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
