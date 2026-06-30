// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://getpictora.com',
  integrations: [sitemap()],
  // Production build optimizations
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Code splitting: chunk heavy deps separately
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/jspdf')) return 'jspdf';
          },
        },
      },
      // Enable minification and tree shaking
      minify: 'esbuild',
      cssMinify: true,
    },
  },
  // Only output preload hints for critical assets, not all
  prefetch: false,
});
