import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

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

export default withNextIntl(nextConfig)
