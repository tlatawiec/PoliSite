// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration options here

  async redirects() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.poliapi.com/api/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
