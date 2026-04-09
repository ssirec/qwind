import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import staticAdapter from '@builder.io/qwik-city/adapters/static/vite';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      staticAdapter({
        origin: 'https://example.com'
      }),
    ],
  };
});
