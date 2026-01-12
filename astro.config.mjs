// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [react()],
  integrations: [
    react({
      // Solo React en componentes específicos
      include: ['**/components/*.tsx'],
    }),
  ],
  
  // Configuración de build
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Configuración de servidor de desarrollo
  server: {
    port: 3000,
    host: true,
  },
  
  // Optimizaciones
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
});