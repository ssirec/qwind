import path from 'path';
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { cloudflarePagesAdapter } from '@builder.io/qwik-city/adapters/cloudflare-pages/vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      qwikCity(),
      qwikVite(),
      cloudflarePagesAdapter(),
    ],
    build: {
      target: 'es2020',
      minify: 'esbuild',
    },
  };
});
