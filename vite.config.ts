import { defineConfig } from 'vite';
import qwikVite from '@builder.io/qwik/optimizer'; // prilagodi, če uporabljaš drugačen import

export default defineConfig({
  plugins: [qwikVite()],
  build: {
    // Izognemo se konfliktu: onemogočimo inlineDynamicImports, da lahko Rollup uporablja manualChunks
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        // Če imaš custom manualChunks, pusti ga; če ne, Rollup bo sam razdelil pakete.
        // manualChunks: { /* ... */ } // odstrani ali prilagodi, če povzroča težave
      },
    },
  },
});
