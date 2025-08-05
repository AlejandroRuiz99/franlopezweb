'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhatsAppFloat() {
  const whatsappNumber = "34604990201" // Francisco A. López Fernández
  const message = "Hola, me gustaría consultar sobre servicios legales."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2, 
        type: "spring", 
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="relative w-8 h-8"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-full h-full"
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
      >
        Contactar por WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent" />
      </motion.div>

      {/* Pulso animado */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Segundo pulso con delay */}
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full -z-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.25,
        }}
      />
    </motion.a>
  )
}