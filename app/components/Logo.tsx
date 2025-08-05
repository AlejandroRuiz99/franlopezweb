'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Monograma LF */}
      <motion.div 
        className="flex font-cinzel text-6xl md:text-8xl leading-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.span 
          className="text-white mr-[-0.5rem] md:mr-[-1rem]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          L
        </motion.span>
        <motion.span 
          className="text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          F
        </motion.span>
      </motion.div>

      {/* Separador vertical */}
      <motion.div 
        className="w-0.5 h-16 md:h-24 bg-lawyer-navy mx-4 md:mx-8"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Nombre completo */}
      <motion.div 
        className="flex flex-col font-proza text-lawyer-navy leading-tight"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-lg md:text-2xl font-normal">
          FRANCISCO ANTONIO
        </div>
        <div className="text-xl md:text-3xl font-semibold">
          LÓPEZ FERNÁNDEZ
        </div>
        
        {/* Etiqueta ABOGADO y Colegiado */}
        <motion.div 
          className="block w-full mt-2 text-center font-proza text-lawyer-burgundy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="block font-light text-sm md:text-lg tracking-widest">
            ABOGADO
          </span>
          <span className="block font-normal text-xs md:text-sm tracking-wider text-lawyer-navy mt-1">
            Colegiado 3323 ICACR
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}