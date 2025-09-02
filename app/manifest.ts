import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava',
    short_name: 'López Fernández Abogado',
    description: 'Servicios jurídicos profesionales en Bolaños de Calatrava, Ciudad Real. Asesoramiento legal en derecho civil, penal y laboral.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8B1538',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'professional', 'legal'],
    lang: 'es',
  }
}
