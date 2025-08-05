/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['maps.googleapis.com'],
    formats: ['image/webp', 'image/avif'],
  },
  output: 'export',
  trailingSlash: true,
  // Configuración para archivos estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig