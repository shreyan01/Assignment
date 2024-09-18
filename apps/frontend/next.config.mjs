/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-backend-url.com/:path*', // Replace with your deployed backend URL
      },
    ]
  },
};

export default nextConfig;
