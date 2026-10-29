// Served at the root of toyintofade.com (GitHub Pages custom domain), same as local dev.
const basePath = ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: ['192.168.1.67', '192.168.4.115'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
