import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    qwikCity(),
    qwikVite(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  },
});
