import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="max-w-6xl mx-auto px-4 py-10">

      {/* Sticky Header + Nav */}
      <header class="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md py-4 mb-10">
        <div class="flex justify-between items-center max-w-6xl mx-auto px-4">
          <h1 class="text-xl font-bold">MEDIASERVIS</h1>
          <nav class="space-x-4 hidden md:flex">
            <a href="#hero" class="hover:text-blue-600">Domov</a>
            <a href="#storitve" class="hover:text-blue-600">Storitve</a>
            <a href="#onas" class="hover:text-blue-600">O nas</a>
            <a href="#kontakt" class="hover:text-blue-600">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Servis mobilnih telefonov in tablic
        </h2>
        <p class="text-lg mb-4">
          Hiter in zanesljiv servis v Novi Gorici
        </p>
        <p class="mb-6">
          Ulica tolminskih puntarjev 4 (1. nadstropje)
        </p>
        <p class="font-semibold mb-6">Ponedeljek – petek: 9:00 – 14:00</p>

        <a
          href="tel:+38668607151"
          class="inline-block px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          Pokliči zdaj
        </a>
      </section>

      {/* Storitve */}
      <section id="storitve" class="mb-16">
        <h2 class="text-3xl font-semibold mb-6">Kaj popravljamo?</h2>
        <ul class="grid md:grid-cols-2 gap-4 text-lg">
          <li>✔ Razbit zaslon</li>
          <li>✔ Menjava baterije</li>
          <li>✔ Težave s polnjenjem</li>
          <li>✔ Slab zvok (zvočnik / mikrofon)</li>
          <li>✔ Telefon se ne vklopi</li>
          <li>✔ Samodejno izklapljanje</li>
          <li>✔ Težave s SIM kartico</li>
          <li>✔ Prenos podatkov na nov telefon</li>
        </ul>
      </section>

      {/* Google Maps */}
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-4">Lokacija</h2>
        <div class="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.3374581262483!2d13.64247147612082!3d45.95697237910861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477af9c52c44c601%3A0x5a8c9395d1b14b4a!2sUlica%20Tolminskih%20Puntarjev%204%2C%205000%20Nova%20Gorica!5e0!3m2!1ssl!2ssi!4v1689270000000!5m2!1ssl!2ssi"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* O nas */}
      <section id="onas" class="mb-16">
        <h2 class="text-3xl font-semibold mb-4">O nas</h2>
        <p class="mb-4">
          Že od leta 1999 se ukvarjamo s servisiranjem mobilnih telefonov, prodajo dodatne opreme in rezervnih delov.
        </p>
        <p>
          Specializirani smo tudi za Apple naprave in uporabljamo lastno zalogo delov.
        </p>
      </section>

      {/* Kontakt */}
      <section id="kontakt" class="text-center mb-16">
        <h2 class="text-3xl font-semibold mb-4">Kontakt</h2>
        <p>SIRSA d.o.o.</p>
        <p>Ulica tolminskih puntarjev 4, 5000 Nova Gorica</p>
        <p class="mt-2">Davčna št.: 21466785</p>
        <p class="mt-6 text-sm text-gray-500">Ne uporabljamo piškotkov</p>
      </section>

      {/* Floating call button for mobile */}
      <a
        href="tel:+38668607151"
        class="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-5 shadow-xl z-50 md:hidden hover:bg-green-700 transition"
        aria-label="Pokliči nas"
      >
        📞
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica | Popravilo mobitelov',
  meta: [
    {
      name: 'description',
      content: 'Servis telefonov Nova Gorica. Popravilo zaslona, baterije, polnjenja. Hitra in zanesljiva storitev brez naročanja.',
    },
    {
      name: 'keywords',
      content: 'servis telefonov Nova Gorica, popravilo mobitelov, menjava zaslona, baterije, servis iPhone Nova Gorica',
    },
  ],
};
