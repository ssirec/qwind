import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig({
  plugins: [qwikVite()],
  build: {
    rollupOptions: {
      output: {
        // Onemogočimo inlineDynamicImports, da ni konflikta z manualChunks
        inlineDynamicImports: false,
        // Če imate v projektu custom manualChunks, ga lahko pustite.
        // Če ne, Rollup bo sam razdelil pakete.
      },
    },
  },
});
