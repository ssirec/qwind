import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-black text-gray-200 min-h-screen font-sans">

      {/* HERO */}
      <section class="px-6 py-24 text-center max-w-4xl mx-auto animate-fade-in-up">
        <h1 class="text-4xl md:text-6xl font-bold text-white">
          Servis telefonov, računalnikov in elektronike<br />
          <span class="text-blue-500">Nova Gorica</span>
        </h1>

        <p class="mt-6 text-lg text-gray-400">
          Hitro, strokovno in zanesljivo popravilo vseh pametnih naprav, računalnikov,
          BGA elektronike, avtoelektronike in industrijskih naprav.
        </p>

        {/* HERO SLIKA */}
        <img
          src="/assets/hero/iphone14pro-front.avif"
          alt="iPhone 14 Pro servis Nova Gorica"
          class="mx-auto mt-10 w-full max-w-2xl rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />

        <div class="mt-10 flex justify-center gap-4">
          <a href="#kontakt" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
            Kontakt
          </a>
          <a href="#storitve" class="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg text-gray-300">
            Storitve
          </a>
        </div>
      </section>

      {/* STORITVE */}
      <section id="storitve" class="px-6 py-20 max-w-5xl mx-auto animate-fade-in-up">
        <h2 class="text-3xl font-bold text-white mb-10">Storitve</h2>

        <div class="grid md:grid-cols-2 gap-10 text-gray-300">

          {/* MOBILNE NAPRAVE */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/phone.svg" class="w-6 h-6 mr-2" /> Mobilne naprave
            </h3>
            <ul class="space-y-2">
              <li>Menjava zaslona</li>
              <li>Menjava baterije</li>
              <li>Menjava konektorja za polnjenje</li>
              <li>Menjava zadnjega stekla</li>
              <li>Diagnostika</li>
              <li>Prenos in reševanje podatkov</li>
              <li>Sanacija po hekerskem vdoru</li>
              <li>Popravilo kamere, senzorjev, GPS, WiFi</li>
              <li>Poškodbe z vodo</li>
              <li>Popravilo zvočnika ali mikrofona</li>
            </ul>

            {/* iPhone slike */}
            <div class="grid grid-cols-2 gap-4 mt-6">
              <img src="/assets/phones/iphone14pro-front.avif" class="rounded-lg shadow-lg opacity-90" loading="lazy" />
              <img src="/assets/phones/iPhone 14 Pro-display.avif" class="rounded-lg shadow-lg opacity-90" loading="lazy" />
              <img src="/assets/phones/iPhone 14 Pro-bracket.avif" class="rounded-lg shadow-lg opacity-90 col-span-2" loading="lazy" />
            </div>
          </div>

          {/* MODELI */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/tools.svg" class="w-6 h-6 mr-2" /> Servisiramo modele
            </h3>
            <ul class="space-y-2">
              <li>iPhone 17 → 8</li>
              <li>Samsung Galaxy</li>
              <li>Xiaomi</li>
              <li>Huawei</li>
              <li>Oppo</li>
              <li>Google Pixel</li>
              <li>Honor, Realme, Motorola</li>
              <li>Vse pametne naprave</li>
            </ul>

            <img src="/assets/phones/iPhone 14 Pro-display.avif" class="mt-6 rounded-lg shadow-lg opacity-90" loading="lazy" />
          </div>

          {/* RAČUNALNIKI */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/laptop.svg" class="w-6 h-6 mr-2" /> Računalniki
            </h3>
            <ul class="space-y-2">
              <li>Popravilo zaslona</li>
              <li>Menjava ohišja</li>
              <li>Menjava baterije</li>
              <li>Popravilo napajalne enote</li>
              <li>Popravilo OS</li>
              <li>Popravilo matične plošče</li>
              <li>Odstranjevanje virusov</li>
              <li>Popravilo kamere, senzorjev, WiFi</li>
              <li>Poškodbe z vodo</li>
            </ul>

            <img src="/assets/laptops/macbook.avif" class="mt-6 rounded-lg shadow-lg opacity-90" loading="lazy" />
          </div>

          {/* BGA */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/chip.svg" class="w-6 h-6 mr-2" /> BGA elektronika – REBALL
            </h3>
            <ul class="space-y-2">
              <li>Matične plošče</li>
              <li>Grafične kartice</li>
              <li>Playstation, Xbox</li>
              <li>CPU mobilnih telefonov</li>
              <li>Računalniki</li>
              <li>Avtoelektronika</li>
              <li>Industrijski moduli</li>
            </ul>

            <img src="/assets/bga/bga-chip.avif" class="mt-6 rounded-lg shadow-lg opacity-90" loading="lazy" />
          </div>

          {/* AVTOELEKTRONIKA */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/car.svg" class="w-6 h-6 mr-2" /> Avtoelektronika
            </h3>
            <ul class="space-y-2">
              <li>Popravilo avtoračunalnikov</li>
              <li>ECU popravila</li>
              <li>ABS-ESP enote</li>
              <li>BSI, BSM, UCH moduli</li>
              <li>Airbag računalniki</li>
              <li>Popravilo senzorjev</li>
              <li>BMW CCC radio</li>
            </ul>

            <img src="/assets/car/ecu.avif" class="mt-6 rounded-lg shadow-lg opacity-90" loading="lazy" />
          </div>

          {/* INDUSTRIJA */}
          <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <img src="/icons/tools.svg" class="w-6 h-6 mr-2" /> Industrijske naprave
            </h3>
            <ul class="space-y-2">
              <li>CNC stroji</li>
              <li>Krmilniki</li>
              <li>Radiografske enote</li>
              <li>Ultrazvočne naprave</li>
              <li>Čistilne naprave</li>
              <li>Motorni procesorji</li>
              <li>Poškodbe z vodo</li>
            </ul>

            <img src="/assets/industry/cnc.avif" class="mt-6 rounded-lg shadow-lg opacity-90" loading="lazy" />
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" class="px-6 py-20 max-w-4xl mx-auto animate-fade-in-up">
        <h2 class="text-3xl font-bold text-white mb-10">Kontakt</h2>

        <form method="POST" action="/contact" class="grid gap-6">
          <input name="name" placeholder="Ime" class="bg-gray-900 border border-gray-700 p-3 rounded" required />
          <input name="email" type="email" placeholder="Email" class="bg-gray-900 border border-gray-700 p-3 rounded" required />
          <input name="phone" placeholder="Telefon" class="bg-gray-900 border border-gray-700 p-3 rounded" />
          <textarea name="message" placeholder="Sporočilo" class="bg-gray-900 border border-gray-700 p-3 rounded h-32" required />
          <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
            Pošlji
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer class="px-6 py-10 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Sirsa d.o.o. · Vse pravice pridržane
        <div class="mt-4 flex justify-center gap-6 text-gray-400">
          <a href="https://www.facebook.com/MediaservisNovaGorica" target="_blank">Facebook</a>
          <a href="https://www.instagram.com/mediaservis_popravila/" target="_blank">Instagram</a>
          <a href="https://www.google.com/search?q=MEDIASERVIS+Nova+Gorica" target="_blank">Google</a>
        </div>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Servis telefonov, računalnikov in elektronike | Mediaservis Nova Gorica',
};
