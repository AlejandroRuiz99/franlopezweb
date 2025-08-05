'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-lawyer-navy shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between py-4">
          {/* Monograma LF y texto completo */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white font-bold text-2xl md:text-3xl font-cinzel">
              LF
            </div>
            <div className="hidden md:block text-white">
              <div className="text-xs font-semibold tracking-wider">ABOGADO</div>
              <div className="text-sm font-medium">Francisco A. López Fernández</div>
            </div>
          </motion.div>

          {/* Navegación */}
          <motion.nav 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="#about" 
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
            >
              Sobre mí
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
            >
              Contacto
            </a>
            <a 
              href="#location" 
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
            >
              Ubicación
            </a>
            <a 
              href="https://wa.me/34604990201" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lawyer-burgundy text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200"
            >
              Consulta
            </a>
          </motion.nav>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}