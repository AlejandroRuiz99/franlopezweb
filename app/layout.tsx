import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava, Ciudad Real | Asesoramiento Legal',
  description: 'Abogado colegiado 3323 ICACR en Bolaños de Calatrava, Ciudad Real. Asesoramiento legal, defensa jurídica, derecho civil, penal y laboral. Consulta presencial y online. Compromiso, cercanía y soluciones reales para tus problemas legales.',
  keywords: 'abogado Bolaños de Calatrava, abogado Ciudad Real, Francisco López Fernández abogado, asesoramiento legal Ciudad Real, bufete abogados Bolaños, defensa legal Ciudad Real, derecho civil Bolaños, derecho penal Ciudad Real, derecho laboral, consulta legal online, ICACR colegiado 3323, servicios jurídicos Castilla La Mancha, abogado cerca de mí, despacho abogados Ciudad Real',
  authors: [{ name: 'Francisco A. López Fernández' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava, Ciudad Real',
    description: 'Abogado colegiado en Bolaños de Calatrava, Ciudad Real. Asesoramiento legal profesional, derecho civil, penal y laboral. Consulta presencial y online.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.lopezfernandezabogado.com',
    siteName: 'López Fernández Abogado',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava',
    description: 'Abogado colegiado en Ciudad Real. Asesoramiento legal profesional y defensa jurídica.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.lopezfernandezabogado.com',
  },
  verification: {
    google: 'tu-codigo-google-search-console',
  },
  other: {
    'geo.region': 'ES-CR',
    'geo.placename': 'Bolaños de Calatrava, Ciudad Real',
    'geo.position': '38.7833;-3.8667',
    'ICBM': '38.7833, -3.8667',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Proza+Libre:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
        {/* Datos Estructurados JSON-LD para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.lopezfernandezabogado.com/#person",
                  "name": "Francisco A. López Fernández",
                  "jobTitle": "Abogado",
                  "description": "Abogado colegiado 3323 ICACR especializado en derecho civil, penal y laboral en Bolaños de Calatrava, Ciudad Real",
                  "url": "https://www.lopezfernandezabogado.com",
                  "email": "info@lopezfernandezabogado.com",
                  "telephone": "+34604990201",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Bolaños de Calatrava",
                    "addressLocality": "Bolaños de Calatrava",
                    "addressRegion": "Ciudad Real",
                    "addressCountry": "ES",
                    "postalCode": "13260"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/francisco-lopez-fernandez-abogado"
                  ]
                },
                {
                  "@type": "LegalService",
                  "@id": "https://www.lopezfernandezabogado.com/#legalservice",
                  "name": "López Fernández Abogado",
                  "description": "Servicios legales profesionales en Bolaños de Calatrava, Ciudad Real. Asesoramiento jurídico en derecho civil, penal, laboral y familiar.",
                  "url": "https://www.lopezfernandezabogado.com",
                  "telephone": "+34604990201",
                  "email": "info@lopezfernandezabogado.com",
                  "priceRange": "Consulta precios",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Bolaños de Calatrava",
                    "addressLocality": "Bolaños de Calatrava",
                    "addressRegion": "Ciudad Real",
                    "addressCountry": "ES",
                    "postalCode": "13260"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 38.7833,
                    "longitude": -3.8667
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Bolaños de Calatrava"
                    },
                    {
                      "@type": "City",
                      "name": "Ciudad Real"
                    },
                    {
                      "@type": "State",
                      "name": "Castilla-La Mancha"
                    }
                  ],
                  "serviceType": [
                    "Derecho Civil",
                    "Derecho Penal",
                    "Derecho Laboral",
                    "Derecho de Familia",
                    "Asesoramiento Legal",
                    "Defensa Jurídica"
                  ],
                  "openingHours": "Mo-Fr 09:00-14:00,16:00-19:00",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios Legales",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Consulta Legal",
                          "description": "Consulta legal personalizada presencial y online"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Asesoramiento Jurídico",
                          "description": "Asesoramiento legal especializado en diferentes áreas del derecho"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.lopezfernandezabogado.com/#website",
                  "url": "https://www.lopezfernandezabogado.com",
                  "name": "López Fernández Abogado",
                  "description": "Abogado en Bolaños de Calatrava, Ciudad Real",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.lopezfernandezabogado.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": "es-ES"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}