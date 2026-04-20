import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';

export default defineConfig({
  plugins: [
    // Qwik City vite plugin must run before the optimizer so it can generate the plan
    qwikCity(),
    qwikVite(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Onemogočimo inlineDynamicImports, da se izognemo konfliktu z manualChunks
        inlineDynamicImports: false,
      },
      // Če Rollup še vedno poskuša externalizirati @qwik-city-plan, lahko dodamo:
      // external: [], // običajno ni potrebno, pustite prazno
    },
  },
});
