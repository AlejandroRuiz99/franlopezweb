'use client'

import { motion } from 'framer-motion'

export default function LocationInfo() {
  const address = "Calle Santísimo 22 Bajo, Bolaños de Calatrava, Ciudad Real, 13260"
  // URL de Google Maps embed para Bolaños de Calatrava - CONFIGURAR con ubicación real específica
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.5678901234567!2d-3.8762345678901234!3d38.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%20Sant%C3%ADsimo%2022%2C%2013260%20Bola%C3%B1os%20de%20Calatrava%2C%20Ciudad%20Real!5e0!3m2!1ses!2ses!4v1702654321098!5m2!1ses!2ses"

  const scheduleInfo = [
    { day: 'Lunes - Jueves', hours: '9:30 - 13:30 / 17:00 - 19:30' },
    { day: 'Viernes', hours: '9:30 - 15:00' },
    { day: 'Sábados y Domingos', hours: 'Cerrado' }
  ]

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy text-center mb-12 font-proza">
          Ubicación y Horarios
        </h2>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto y horarios */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Dirección y Contacto */}
            <div className="bg-lawyer-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-lawyer-navy mb-4 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                Despacho en Bolaños de Calatrava
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {address}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+34604990201" className="text-lawyer-burgundy hover:text-lawyer-navy transition-colors font-medium">
                    +34 604 99 02 01
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:info@lopezfernandezabogado.com" className="text-lawyer-burgundy hover:text-lawyer-navy transition-colors font-medium">
                    info@lopezfernandezabogado.com
                  </a>
                </div>
              </div>
              <motion.a
                href={`https://maps.google.com?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-lawyer-burgundy hover:text-lawyer-navy transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Ver en Google Maps →
              </motion.a>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-lawyer-navy mb-4 flex items-center">
                <span className="text-2xl mr-3">🕒</span>
                Horarios de Atención
              </h3>
              <div className="space-y-3">
                {scheduleInfo.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 gap-2"
                  >
                    <span className="font-medium text-gray-700 flex-shrink-0">{schedule.day}</span>
                    <span className="text-lawyer-burgundy font-semibold text-right whitespace-nowrap text-xs sm:text-sm">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Mapa y Cita Previa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6 order-1 lg:order-2"
          >
            {/* Mapa */}
            <div className="w-full">
              <div className="h-48 sm:h-64 lg:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Despacho de Francisco A. López Fernández"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Cita Previa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-lawyer-navy text-white p-4 sm:p-6 rounded-xl w-full"
            >
              <h3 className="text-lg font-semibold mb-3">💡 Cita Previa</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Se recomienda concertar cita previa para asegurar la disponibilidad. 
                Consultas urgentes disponibles vía WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}