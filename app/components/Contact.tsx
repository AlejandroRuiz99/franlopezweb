'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^[+]?[\d\s\-\(\)]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un número de teléfono válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init("0wqQdiIzXhhX7s4fE")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Configurar los parámetros del email
      const templateParams = {
        to_email: 'info@lopezfernandezabogado.com', // Tu correo
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        reply_to: formData.email
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        'service_648r0iq',
        'template_3nqkvwl',
        templateParams
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-green-600 text-6xl md:text-8xl mb-4 md:mb-6"
          >
            ✓
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6 font-cinzel">¡Mensaje enviado!</h3>
          <p className="text-green-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
            Gracias por contactarme. Te responderé lo antes posible con la información que necesitas.
          </p>
          <motion.button
            onClick={() => setSubmitted(false)}
            className="bg-lawyer-burgundy text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar otro mensaje
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lawyer-navy mb-4 md:mb-6 font-cinzel">
                    Reserva una Consulta
                  </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes una consulta legal? No dudes en contactarme. Te responderé de forma personalizada y confidencial.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Nombre completo *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-4 focus:ring-lawyer-burgundy/20 focus:border-lawyer-burgundy transition-all duration-200 text-base md:text-lg ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center"
                    >
                      <span className="mr-1">⚠️</span>
                      {errors.name}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Correo electrónico *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-4 focus:ring-lawyer-burgundy/20 focus:border-lawyer-burgundy transition-all duration-200 text-base md:text-lg ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu@correo.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center"
                    >
                      <span className="mr-1">⚠️</span>
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Teléfono *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-4 focus:ring-lawyer-burgundy/20 focus:border-lawyer-burgundy transition-all duration-200 text-base md:text-lg ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+34 600 000 000"
                  />
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center"
                    >
                      <span className="mr-1">⚠️</span>
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 md:mb-3">
                  Mensaje *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 md:px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-4 focus:ring-lawyer-burgundy/20 focus:border-lawyer-burgundy transition-all duration-200 text-base md:text-lg resize-y min-h-[100px] md:min-h-[120px] ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe tu consulta legal..."
                    rows={5}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center"
                    >
                      <span className="mr-1">⚠️</span>
                      {errors.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-lawyer-burgundy to-lawyer-navy text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white mr-3"></div>
                    Enviando mensaje...
                  </div>
                ) : (
                                              'Enviar Consulta'
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>

        {/* Información de Contacto y Cita Previa */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {/* Información de Contacto */}
          <div className="bg-gradient-to-br from-lawyer-navy to-lawyer-burgundy text-white p-6 md:p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-proza">Información de Contacto</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-2xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">Teléfono</p>
                  <p className="text-gray-200 text-sm md:text-base">+34 604 990 201</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">Email</p>
                  <p className="text-gray-200 text-sm md:text-base">info@lopezfernandezabogado.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-2xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">Ubicación</p>
                  <p className="text-gray-200 text-sm md:text-base">Bolaños de Calatrava, Ciudad Real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cita Previa */}
          <div className="bg-gradient-to-br from-lawyer-gray to-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-proza text-lawyer-navy">Cita Previa</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Consulta presenciales en Bolaños de Calatrava y consultas online para toda España</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Atención personalizada</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Respuesta rápida</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-lawyer-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Confidencialidad garantizada</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}