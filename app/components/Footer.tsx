'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lawyer-navy text-white">
      {/* Contenido Principal del Footer */}
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              {/* Logo igual al header */}
              <div className="flex items-center space-x-4">
                <div className="text-white font-bold text-2xl md:text-3xl font-cinzel">
                  LF
                </div>
                <div className="text-white">
                  <div className="text-xs font-semibold tracking-wider">ABOGADO</div>
                  <div className="text-sm font-medium">Francisco A. López Fernández</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
              <strong>Abogado especializado en Bolaños de Calatrava, Ciudad Real</strong> con amplia experiencia en diversas áreas del derecho.
              <br className="hidden md:block" />
              <br className="sm:hidden" />
              Extranjería, Seguridad Social, Civil (familia, sucesiones, etc.), Administrativo y Laboral.
              <br className="hidden md:block" />
              <br className="sm:hidden" />
              Bufete comprometido con soluciones legales reales y cercanas, con atención personalizada en Bolaños de Calatrava y servicios jurídicos online para toda España y Castilla-La Mancha.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium text-sm md:text-base">Disponible</span>
              </div>
            </div>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-proza">Contacto</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">📍</span>
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">Bolaños de Calatrava</p>
                  <p className="text-gray-300 text-xs md:text-sm">Ciudad Real, España</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">📞</span>
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base">+34 604 990 201</p>
                  <p className="text-gray-300 text-xs md:text-sm">Llamada directa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">✉️</span>
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">info@lopezfernandezabogado.com</p>
                  <p className="text-gray-300 text-xs md:text-sm">Consulta por email</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-proza">Enlaces Rápidos</h3>
            <div className="space-y-2 md:space-y-3">
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                Sobre mí
              </a>
              <a 
                href="#contact" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                Reserva una Consulta
              </a>
              <a 
                href="#location" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                Ubicación
              </a>
              <a 
                href="https://wa.me/34604990201" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Barra Inferior */}
      <motion.div 
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Francisco A. López Fernández. Todos los derechos reservados.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 text-xs md:text-sm">
              <span className="text-gray-400">Colegiado 3323 ICACR</span>
              <span className="text-white font-medium">Abogado Bolaños de Calatrava</span>
              <span className="text-gray-400">Servicios Jurídicos Ciudad Real</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
} 