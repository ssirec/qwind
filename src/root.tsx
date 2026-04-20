import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  Head,
  ServiceWorkerRegister,
  type DocumentHead,
} from '@builder.io/qwik-city';
import styles from './assets/styles/global.css?inline';

export default component$(() => {
  useStyles$(styles);

  // Tawk.to chat (client only)
  useVisibleTask$(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/56c73659b74a0813627d275c/1gsshkkuq';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    const tawkDiv = document.createElement('div');
    tawkDiv.id = 'tawk_56c73659b74a0813627d275c';
    document.body.appendChild(tawkDiv);
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </script>

        <Head />
      </head>

      <body lang="sl">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica | Mediaservis',
  meta: [
    {
      name: 'description',
      content:
        'Servis telefonov Nova Gorica. Menjava zaslona, baterije, diagnostika, popravilo polnjenja. Hitra in zanesljiva popravila brez naročanja.',
    },
    {
      name: 'keywords',
      content:
        'servis telefonov Nova Gorica, popravilo mobitelov, menjava zaslona, menjava baterije, servis iPhone, servis Samsung, servis Huawei',
    },

    // OpenGraph
    { property: 'og:title', content: 'Servis telefonov Mediaservis Nova Gorica' },
    {
      property: 'og:description',
      content: 'Hiter in zanesljiv servis telefonov v Novi Gorici. Menjava zaslona, baterije, diagnostika.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://mediaservis.si' },
    { property: 'og:image', content: '/assets/og-image.avif' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Servis telefonov Nova Gorica' },
    {
      name: 'twitter:description',
      content: 'Hiter in zanesljiv servis telefonov v Novi Gorici.',
    },
    { name: 'twitter:image', content: '/assets/og-image.avif' },
  ],
  links: [
    { rel: 'canonical', href: 'https://mediaservis.si' },
  ],
};
