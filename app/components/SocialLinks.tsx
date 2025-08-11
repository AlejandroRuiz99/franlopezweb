'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
  bgColor: string
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/34604990201',
      icon: '/icons/whatsapp.svg',
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-500'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@franciscolopez.abogado?_t=ZN-8ycT4TD9TXy&_r=1',
      icon: '/icons/tiktok.svg',
      color: 'hover:bg-black',
      bgColor: 'bg-black'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/lopezabogadofrancisco',
      icon: '/icons/instagram.svg',
      color: 'hover:bg-pink-600',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/francisco-l%C3%B3pez-795429257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: '/icons/linkedin.svg',
      color: 'hover:bg-blue-700',
      bgColor: 'bg-blue-600'
    }
  ]

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 font-cinzel">
          Conecta conmigo
        </h2>
        
                 <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
           {socialLinks.map((social, index) => (
             <a
               key={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex flex-row sm:flex-col items-center space-x-3 sm:space-x-0 sm:space-y-2 md:space-y-3 bg-white/10 backdrop-blur-sm text-white p-4 md:p-6 rounded-xl md:rounded-2xl font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/20 min-w-0"
             >
               <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${social.bgColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                 <Image
                   src={social.icon}
                   alt={`${social.name} icon`}
                   width={24}
                   height={24}
                   className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                 />
               </div>
               <span className="text-sm sm:text-base md:text-lg font-semibold">{social.name}</span>
             </a>
           ))}
        </div>

        <p className="text-gray-200 mt-8 md:mt-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Sígueme en redes sociales para mantenerte informado sobre temas legales, consejos jurídicos y novedades del mundo del derecho.
        </p>
      </motion.div>
    </div>
  )
}