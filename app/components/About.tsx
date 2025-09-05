'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-lawyer-navy mb-8 font-cinzel">
          Sobre mí
        </h2>
        
        <motion.div 
          className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl md:text-3xl font-semibold text-lawyer-burgundy mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <strong>Compromiso, cercanía y soluciones reales.</strong>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Como <strong>abogado colegiado en Bolaños de Calatrava, Ciudad Real</strong>, ofrezco asesoramiento y defensa legal especializada en distintas áreas del derecho.
            <br className="hidden md:block" />
            <br className="sm:hidden" />
            Atiendo tanto en mi despacho de Bolaños de Calatrava como mediante consulta online para toda Castilla-La Mancha y España. Con un trato cercano, claro y totalmente orientado a tus necesidades.
            <br className="hidden md:block" />
            <br className="sm:hidden" />
            Tu problema legal es único, y mi objetivo es darte la mejor solución jurídica posible.
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl font-medium text-lawyer-navy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Aquí comienza la defensa de tus derechos. ¡Contáctame!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}