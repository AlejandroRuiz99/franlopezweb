# Francisco A. López Fernández - Web Personal

Una página web personal moderna y profesional para el abogado Francisco A. López Fernández, construida con Next.js y optimizada para máximo rendimiento.

## 🚀 Características

- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Optimización de Imágenes**: Usando Next.js Image para carga rápida
- **Animaciones Suaves**: Implementadas con Framer Motion
- **SEO Optimizado**: Metadatos configurados para mejor posicionamiento
- **Formulario de Contacto**: Con validación en tiempo real
- **Integración Social**: Enlaces a todas las redes sociales
- **Botón Flotante WhatsApp**: Para contacto inmediato
- **Google Maps**: Ubicación del despacho integrada

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **React Hook Form** - Manejo de formularios
- **Vercel** - Plataforma de despliegue

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd francisco-lopez-web
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   ```bash
   cp .env.local.example .env.local
   ```
   Edita `.env.local` con la información real de contacto y redes sociales.

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

## 🔧 Configuración

### Información de Contacto

Edita los siguientes archivos para personalizar la información:

**SocialLinks.tsx**: Actualizar URLs de redes sociales
**LocationInfo.tsx**: Cambiar dirección y coordenadas del mapa
**WhatsAppFloat.tsx**: Configurar número de WhatsApp

### Google Maps

1. Obtén una API key de Google Maps
2. Añádela a `.env.local`
3. Actualiza la URL del mapa embebido en `LocationInfo.tsx`

### Formulario de Contacto

El formulario actualmente valida en el cliente. Para envío real:

1. Configurar un servicio de correo (EmailJS, Formspree, etc.)
2. Actualizar la función `handleSubmit` en `Contact.tsx`

## 🚀 Despliegue en Vercel

### Método 1: GitHub (Recomendado)

1. **Subir código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_DE_TU_REPO>
   git push -u origin main
   ```

2. **Conectar con Vercel**:
   - Visita [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio
   - Configura las variables de entorno
   - Deploy automático

### Método 2: Vercel CLI

1. **Instalar Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

## 📱 Funcionalidades

### Header
- Logo profesional con monograma LF
- Foto de perfil optimizada
- Animaciones de entrada elegantes

### Sección "Sobre mí"
- Texto personalizado del abogado
- Tipografía profesional
- Animaciones al scroll

### Formulario de Contacto
- Validación en tiempo real
- Estados de carga
- Confirmación de envío
- Diseño accesible

### Redes Sociales
- Enlaces a TikTok, Instagram, LinkedIn
- Contacto directo por WhatsApp y Gmail
- Iconos animados

### Ubicación
- Mapa de Google Maps embebido
- Horarios de atención
- Información de contacto

### WhatsApp Flotante
- Botón fijo siempre visible
- Animación de pulso
- Mensaje predefinido

## 🎨 Paleta de Colores

Basada en el logo original:

- **Burdeos**: `#7e1e23` - Color principal
- **Azul Oscuro**: `#212d4b` - Color secundario
- **Dorado**: `#d4af37` - Acentos
- **Gris Claro**: `#f8f9fa` - Fondos
- **Gris Oscuro**: `#6c757d` - Textos secundarios

## 📞 Soporte

Para soporte técnico o personalizaciones, contacta al desarrollador.

## 📄 Licencia

Este proyecto es privado y está desarrollado específicamente para Francisco A. López Fernández.

---

**Desarrollado con ❤️ y Next.js para Francisco A. López Fernández**