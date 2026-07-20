import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      // Default directives applied to ALL image imports with query params
      defaultDirectives: (url) => {
        // Only apply defaults to images that have query parameters
        if (url.searchParams.has('w') || url.searchParams.has('format')) {
          return new URLSearchParams({
            // Default to WebP if no format specified
            format: url.searchParams.get('format') || 'webp',
            // Default quality
            quality: url.searchParams.get('quality') || '80',
          })
        }
        return new URLSearchParams()
      },
    }),
    sitemap({
      hostname: 'https://hearwell.co.in',
      dynamicRoutes: [
        '/', '/about', '/doctor', '/services', '/hearing-aids', 
        '/locations', '/contact', '/booking', '/privacy', '/terms'
      ]
    }),
  ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'framer-motion';
          }
        }
      }
    }
  },
})

