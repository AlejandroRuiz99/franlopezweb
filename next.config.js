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
  // Configuración específica para Vercel
  experimental: {
    appDir: true,
  },
  // Asegurar que no se use el sistema de rutas dinámico
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig