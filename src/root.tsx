import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  RouterHead,
  ServiceWorkerRegister,
  type DocumentHead,
} from '@builder.io/qwik-city';
import styles from './assets/styles/global.css?inline';

export default component$(() => {
  useStyles$(styles);

  // Load Tawk.to only on the client
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
        <RouterHead />
      </head>

      <body lang="sl">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica | Popravilo mobitelov',
  meta: [
    {
      name: 'description',
      content:
        'Servis telefonov Nova Gorica. Popravilo zaslona, baterije, polnjenja. Hitra in zanesljiva storitev brez naročanja.',
    },
    {
      name: 'keywords',
      content:
        'servis telefonov Nova Gorica, popravilo mobitelov, menjava zaslona, baterije, servis iPhone Nova Gorica',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
  ],
};
