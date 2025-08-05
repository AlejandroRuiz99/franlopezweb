# Guía de Despliegue Rápido

## Pasos para desplegar en Vercel

### 1. Preparación
```bash
# Instalar dependencias
npm install

# Verificar que el proyecto compila
npm run build
```

### 2. Configuración
1. Editar las variables en `.env.local` (copiar desde `.env.local.example`)
2. Actualizar URLs reales en los componentes:
   - `SocialLinks.tsx` - Redes sociales
   - `LocationInfo.tsx` - Dirección y mapa
   - `WhatsAppFloat.tsx` - Número de WhatsApp

### 3. Despliegue
```bash
# Método 1: GitHub + Vercel (Recomendado)
git init
git add .
git commit -m "Initial deployment"
git remote add origin <TU_REPO_URL>
git push -u origin main

# Luego conectar en vercel.com

# Método 2: Vercel CLI
npx vercel --prod
```

### 4. Configuración Post-Despliegue
1. Añadir variables de entorno en el dashboard de Vercel
2. Configurar dominio personalizado si es necesario
3. Verificar que todas las imágenes cargan correctamente

### URLs a personalizar:
- WhatsApp: `34XXXXXXXXX` → Número real
- Email: `contacto@franciscolopez.com` → Email real
- Dirección: Actualizar en `LocationInfo.tsx`
- Google Maps: Obtener URL de embed real
- Redes sociales: Usuarios reales de TikTok, Instagram, LinkedIn