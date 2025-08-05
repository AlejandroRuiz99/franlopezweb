import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francisco A. López Fernández - Abogado en Bolaños de Calatrava, Ciudad Real',
  description: 'Abogado colegiado 3323 ICACR. Asesoramiento y defensa legal en Bolaños de Calatrava, Ciudad Real. Compromiso, cercanía y soluciones reales.',
  keywords: 'abogado, Ciudad Real, Bolaños de Calatrava, asesoramiento legal, defensa legal, Francisco López Fernández, derecho, ICACR, colegiado 3323',
  authors: [{ name: 'Francisco A. López Fernández' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Francisco A. López Fernández - Abogado en Ciudad Real',
    description: 'Abogado colegiado en Bolaños de Calatrava, Ciudad Real. Asesoramiento y defensa legal con compromiso, cercanía y soluciones reales.',
    type: 'website',
    locale: 'es_ES',
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}