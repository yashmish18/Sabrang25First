// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost'], // Only hostname without port
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/api/qrcode/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;