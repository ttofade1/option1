/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  basePath: '/option1',
  allowedDevOrigins: ['192.168.1.67', '192.168.4.115'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
