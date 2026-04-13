import { component$, Slot } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <QwikCityProvider>
      <RouterOutlet />
      <ServiceWorkerRegister />
      <Slot />
    </QwikCityProvider>
  );
});
