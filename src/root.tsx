import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import styles from './assets/styles/global.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Servis telefonov Nova Gorica</title>
        <meta
          name="description"
          content="Servis telefonov Nova Gorica. Popravilo zaslona, baterije, polnjenja. Hitra in zanesljiva storitev brez naročanja."
        />
        <meta
          name="keywords"
          content="servis telefonov Nova Gorica, popravilo mobitelov, menjava zaslona, baterije, servis iPhone Nova Gorica"
        />
      </head>

      <body lang="sl">
        <RouterOutlet />
        <ServiceWorkerRegister />

        {/* Tawk.to Chat */}
        <div id="tawk_56c73659b74a0813627d275c"></div>
        <script
          dangerouslySetInnerHTML={`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            Tawk_API.embedded='tawk_56c73659b74a0813627d275c';
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/56c73659b74a0813627d275c/1gsshkkuq';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        />
      </body>
    </QwikCityProvider>
  );
});
