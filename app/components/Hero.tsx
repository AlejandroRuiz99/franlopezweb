'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-lawyer-gray to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contenido Principal */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lawyer-navy mb-4 md:mb-6 font-cinzel">
              Francisco A. López
              <span className="block text-lawyer-burgundy">Fernández</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-lawyer-dark-gray mb-6 md:mb-8 font-proza">
              <span className="text-lawyer-burgundy">Abogado</span> Colegiado 3323 ICACR
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Abogado especializado en Bolaños de Calatrava, Ciudad Real</strong>. 
              Servicios jurídicos profesionales en extranjería, derecho civil, penal y laboral. 
              Consulta presencial en Bolaños de Calatrava y online para toda España. 
              Compromiso, cercanía y soluciones reales para tus necesidades legales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Reserva una Consulta
              </a>
              <a 
                href="tel:+34604990201" 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Foto de Perfil y Frase */}
          <div className="flex-shrink-0 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-8 border-lawyer-burgundy shadow-2xl mx-auto mb-6">
                <Image
                  src="/profile/perfil.jpeg"
                  alt="Francisco A. López Fernández - Abogado"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lawyer-burgundy/20 to-transparent"></div>
              </div>
              
              {/* Frase mítica de derecho */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-sm mx-auto"
              >
                <blockquote className="text-sm md:text-base text-lawyer-navy font-medium italic leading-relaxed">
                  "La justicia es la constante y perpetua voluntad de dar a cada uno lo que le corresponde"
                </blockquote>
                <cite className="block text-xs md:text-sm text-lawyer-burgundy font-semibold mt-2">
                  — Ulpiano
                </cite>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 