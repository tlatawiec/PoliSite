/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/api/:path*', // Match any path that starts with /api/
        destination: 'https://api.poliapi.com/api/:path*', // Redirect to the api subdomain
        permanent: true, // This will use a 308 status code for the redirect
      },
    ];
  },
};

module.exports = nextConfig;
