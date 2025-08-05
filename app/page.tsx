'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import LocationInfo from './components/LocationInfo'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header con navegación */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Sección Sobre mí con degradado suave */}
      <motion.section 
        id="about"
        className="bg-gradient-to-b from-white to-lawyer-gray py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.section>

      {/* Sección de Contacto */}
      <motion.section 
        id="contact"
        className="bg-lawyer-gray py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

      {/* Redes Sociales */}
      <motion.section 
        className="bg-lawyer-navy py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <SocialLinks />
      </motion.section>

      {/* Ubicación y Horarios */}
      <motion.section 
        id="location"
        className="bg-white py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <LocationInfo />
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </main>
  )
}