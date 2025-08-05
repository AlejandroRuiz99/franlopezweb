'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Abrir menú"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-lawyer-navy border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <motion.a
                  href="#about"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2 border-b border-gray-700"
                >
                  Sobre mí
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2 border-b border-gray-700"
                >
                  Contacto
                </motion.a>
                <motion.a
                  href="#location"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200 py-2 border-b border-gray-700"
                >
                  Ubicación
                </motion.a>
                <motion.a
                  href="https://wa.me/34604990201"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-lawyer-burgundy text-white px-4 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 text-center"
                >
                  Consulta
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}