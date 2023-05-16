/** @type {import('next').NextConfig} */
const nextConfig = {
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
