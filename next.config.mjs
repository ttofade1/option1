// GitHub Pages serves this project site from /option1; local dev runs at the root.
const basePath = process.env.NODE_ENV === 'production' ? '/option1' : ''

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
