import type { DocumentHead } from '@builder.io/qwik-city';

export default function Home() {
  return (
    <div>

      {/* HEADER */}
      <header class="sticky top-0 bg-white/90 backdrop-blur shadow z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div class="font-bold text-xl text-blue-600">MEDIASERVIS</div>

          <nav class="hidden md:flex gap-8 text-sm">
            <a href="#storitve">Storitve</a>
            <a href="#prednosti">Prednosti</a>
            <a href="#onas">O nas</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <div class="flex gap-3">
            <a href="http://servmg.com/en/orderstatus/" target="_blank" class="btn-primary-solid hidden md:block">
              Status popravila
            </a>

            <a href="tel:+38668607151" class="btn-call">
              📞 Pokliči
            </a>
          </div>
        </div>
      </header>

      <div class="max-w-6xl mx-auto px-4">

        {/* HERO */}
        <section class="hero">
          <h1>
            Servis telefonov <span class="text-blue-600">Nova Gorica</span>
          </h1>

          <p class="mt-4 max-w-xl mx-auto">
            Razbit zaslon? Slaba baterija? Telefon ne dela?
            Pri nas uredimo hitro, zanesljivo in brez kompliciranja.
          </p>

          <div class="flex justify-center gap-4 mt-6 flex-wrap">
            <a href="tel:+38668607151" class="btn-call">
              📞 Pokliči takoj
            </a>

            <a href="#kontakt" class="btn-primary-solid">
              📍 Obišči nas
            </a>
          </div>

          <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>✔ 25+ let izkušenj</div>
            <div>✔ Hitra diagnostika</div>
            <div>✔ Apple specialist</div>
            <div>✔ Brez naročanja</div>
          </div>
        </section>

        {/* STORITVE */}
        <section id="storitve" class="section">
          <h2 class="mb-8 text-center">Kaj rešujemo vsak dan</h2>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="card">📱 Razbit zaslon</div>
            <div class="card">🔋 Menjava baterije</div>
            <div class="card">⚡ Težave s polnjenjem</div>
            <div class="card">🔊 Slab zvok / mikrofon</div>
            <div class="card">❌ Telefon se ne vklopi</div>
            <div class="card">🔁 Restart / ugašanje</div>
            <div class="card">📶 SIM / signal težave</div>
            <div class="card">📂 Prenos podatkov</div>
            <div class="card">🧩 Rezervni deli</div>
          </div>
        </section>

        {/* PREDNOSTI */}
        <section id="prednosti" class="section-light">
          <h2 class="text-center mb-6">Zakaj izbrati nas?</h2>

          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3>Izkušnje</h3>
              <p>Delujemo že od leta 1999</p>
            </div>

            <div>
              <h3>Hitrost</h3>
              <p>Večina popravil v najkrajšem času</p>
            </div>

            <div>
              <h3>Zanesljivost</h3>
              <p>Kakovostni deli iz lastne zaloge</p>
            </div>
          </div>
        </section>

        {/* OPOZORILO */}
        <section class="section">
          <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
            <h3 class="mb-2">Pomembno</h3>
            <p>
              Smo neodvisni izven-garancijski servis.
              Ne izvajamo brezplačnih popravil naprav v garanciji.
            </p>
          </div>
        </section>

        {/* NAVODILA */}
        <section class="section">
          <h2 class="mb-4">Pred oddajo naprave</h2>

          <ul class="space-y-2">
            <li>• Naredite varnostno kopijo podatkov</li>
            <li>• Odstranite SIM kartico in dodatke</li>
            <li>• Po potrebi kopijo naredimo mi (doplačilo)</li>
          </ul>
        </section>

        {/* STATUS */}
        <section class="section text-center">
          <h2 class="mb-4">Preveri status popravila</h2>

          <p class="mb-6">
            S številko delovnega naloga lahko preverite stanje vašega popravila.
          </p>

          <a
            href="http://servmg.com/en/orderstatus/"
            target="_blank"
            class="btn-primary-solid"
          >
            Preveri status
          </a>
        </section>

        {/* O NAS */}
        <section id="onas" class="section">
          <h2 class="mb-4">O nas</h2>

          <p class="mb-4">
            Smo eden prvih ponudnikov servisiranja mobilnih naprav v Sloveniji.
            Ukvarjamo se s servisom, prodajo dodatne opreme in rezervnih delov.
          </p>

          <p>
            Posebej smo specializirani za Apple naprave.
          </p>
        </section>

        {/* KONTAKT + MAPA */}
        <section id="kontakt" class="section text-center">
          <h2 class="mb-4">Obiščite nas</h2>

          <p>SIRSA d.o.o.</p>
          <p>Ulica tolminskih puntarjev 4</p>
          <p>Nova Gorica</p>

          <p class="mt-2 font-semibold">
            Ponedeljek – petek: 9:00 – 14:00
          </p>

          <div class="mt-6">
            <iframe
              src="https://www.google.com/maps?q=Ulica+tolminskih+puntarjev+4+Nova+Gorica&output=embed"
              width="100%"
              height="320"
              style="border:0;"
              loading="lazy"
            ></iframe>
          </div>

          <div class="mt-6">
            <a href="tel:+38668607151" class="btn-call">
              📞 Pokliči nas
            </a>
          </div>

          <p class="mt-6 text-sm text-gray-500">
            Ne uporabljamo piškotkov.
          </p>
        </section>

      </div>

      {/* FLOATING BUTTON */}
      <a
        href="tel:+38668607151"
        class="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-xl md:hidden"
      >
        📞
      </a>

    </div>
  );
}

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica | MEDIASERVIS',
  meta: [
    {
      name: 'description',
      content:
        'Servis telefonov v Novi Gorici. Popravilo zaslona, baterije, polnjenja. Hitra in zanesljiva storitev.',
    },
  ],
};import type { DocumentHead } from '@builder.io/qwik-city';

export default function Home() {
  return (
    <div>

      {/* HEADER */}
      <header class="sticky top-0 bg-white shadow z-50">
        <div class="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div class="font-bold text-lg">MEDIASERVIS</div>

          <nav class="hidden md:flex gap-6">
            <a href="#storitve">Storitve</a>
            <a href="#onas">O nas</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a href="tel:+38668607151" class="btn-call">
            Pokliči
          </a>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 py-10">

        {/* HERO */}
        <section class="hero">
          <h1>
            Servis telefonov <span class="text-blue-600">Nova Gorica</span>
          </h1>

          <p class="mt-4">
            Popravilo zaslona, baterije, polnjenja in več — hitro in zanesljivo.
          </p>

          <p class="mt-2 text-sm text-gray-500">
            Ulica tolminskih puntarjev 4 (1. nadstropje)
          </p>

          <p class="font-semibold mt-2">
            Ponedeljek – petek: 9:00 – 14:00
          </p>

          <div class="flex justify-center gap-4 mt-6 flex-wrap">
            <a href="tel:+38668607151" class="btn-call">
              📞 Pokliči
            </a>

            <a href="#kontakt" class="btn-primary-solid">
              📍 Kje smo
            </a>
          </div>

          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>✔ 25+ let izkušenj</div>
            <div>✔ Hitra popravila</div>
            <div>✔ Apple specialist</div>
            <div>✔ Brez naročanja</div>
          </div>
        </section>

        {/* STORITVE */}
        <section id="storitve" class="section">
          <h2 class="mb-6">Kaj popravljamo?</h2>

          <ul class="list-check grid md:grid-cols-2 gap-3">
            <li>Razbit zaslon</li>
            <li>Menjava baterije</li>
            <li>Težave s polnjenjem</li>
            <li>Slab zvok (zvočnik / mikrofon)</li>
            <li>Telefon se ne vklopi</li>
            <li>Samodejno izklapljanje</li>
            <li>Težave s SIM kartico</li>
            <li>Prenos podatkov na nov telefon</li>
          </ul>
        </section>

        {/* OPOZORILO */}
        <section class="section-light mb-12">
          <h2 class="mb-3">Pomembno</h2>
          <p>
            Smo neodvisni izven-garancijski servis. Ne izvajamo brezplačnih popravil naprav v garanciji.
          </p>
        </section>

        {/* NAVODILA */}
        <section class="section">
          <h2 class="mb-4">Pred oddajo v servis</h2>

          <ul class="space-y-2">
            <li>• Naredite varnostno kopijo podatkov</li>
            <li>• Odstranite SIM kartico</li>
            <li>• Odstranite dodatke (etui, kartice)</li>
          </ul>

          <p class="mt-4">
            Možna je tudi izdelava kopije pri nas (doplačilo).
          </p>
        </section>

        {/* O NAS */}
        <section id="onas" class="section">
          <h2 class="mb-4">O nas</h2>

          <p class="mb-4">
            Že od leta 1999 se ukvarjamo s servisiranjem mobilnih telefonov,
            prodajo dodatne opreme in rezervnih delov.
          </p>

          <p>
            Specializirani smo za Apple naprave in uporabljamo lastno zalogo delov.
          </p>
        </section>

        {/* GOOGLE MAPS */}
        <section id="kontakt" class="section text-center">
          <h2 class="mb-4">Kje smo</h2>

          <p>SIRSA d.o.o.</p>
          <p>Ulica tolminskih puntarjev 4, Nova Gorica</p>

          <div class="mt-6">
            <iframe
              src="https://www.google.com/maps?q=Ulica+tolminskih+puntarjev+4+Nova+Gorica&output=embed"
              width="100%"
              height="300"
              style="border:0;"
              loading="lazy"
            ></iframe>
          </div>

          <p class="mt-4">Davčna: 21466785</p>

          <p class="mt-6 text-sm text-gray-500">
            Ne uporabljamo piškotkov.
          </p>
        </section>

      </div>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:+38668607151"
        class="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg md:hidden"
      >
        📞
      </a>

    </div>
  );
}

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica',
  meta: [
    {
      name: 'description',
      content:
        'Servis mobilnih telefonov in tablic v Novi Gorici. Hitra popravila, menjava baterije, zaslona in več.',
    },
  ],
};import type { DocumentHead } from '@builder.io/qwik-city';

export default function Home() {
  return (
    <div class="max-w-5xl mx-auto px-4 py-10">

      {/* HERO */}
      <section class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">
          Servis mobilnih telefonov in tablic
        </h1>
        <p class="text-lg mb-4">
          Hiter in zanesljiv servis v Novi Gorici
        </p>
        <p class="mb-6">
          Ulica tolminskih puntarjev 4 (1. nadstropje)
        </p>
        <p class="font-semibold">Ponedeljek – petek: 9:00 – 14:00</p>

        <a
          href="tel:+38668607151"
          class="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl"
        >
          Pokliči zdaj
        </a>
      </section>

      {/* STORITVE */}
      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-6">Kaj popravljamo?</h2>

        <ul class="grid md:grid-cols-2 gap-4">
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

      {/* OPOZORILO */}
      <section class="mb-16 bg-gray-100 p-6 rounded-xl">
        <h2 class="text-xl font-semibold mb-3">Pomembno</h2>
        <p class="mb-2">
          Smo neodvisni izven-garancijski servis.
        </p>
        <p>
          Ne izvajamo brezplačnih popravil naprav v garanciji.
        </p>
      </section>

      {/* NAVODILA */}
      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-4">
          Pred oddajo v servis
        </h2>

        <ul class="space-y-2">
          <li>• Naredite varnostno kopijo podatkov</li>
          <li>• Odstranite SIM kartico</li>
          <li>• Odstranite dodatke (etui, kartice)</li>
        </ul>

        <p class="mt-4">
          Možna je tudi izdelava kopije pri nas (doplačilo).
        </p>
      </section>

      {/* O NAS */}
      <section class="mb-16">
        <h2 class="text-2xl font-semibold mb-4">O nas</h2>

        <p class="mb-4">
          Že od leta 1999 se ukvarjamo s servisiranjem mobilnih telefonov,
          prodajo dodatne opreme in rezervnih delov.
        </p>

        <p>
          Specializirani smo tudi za Apple naprave in uporabljamo lastno zalogo delov.
        </p>
      </section>

      {/* KONTAKT */}
      <section class="text-center">
        <h2 class="text-2xl font-semibold mb-4">Kontakt</h2>

        <p>SIRSA d.o.o.</p>
        <p>Nova Gorica</p>
        <p class="mt-2">Davčna: 21466785</p>

        <p class="mt-6 text-sm text-gray-500">
          Ne uporabljamo piškotkov.
        </p>
      </section>

    </div>
  );
}

export const head: DocumentHead = {
  title: 'Servis telefonov Nova Gorica',
  meta: [
    {
      name: 'description',
      content:
        'Servis mobilnih telefonov in tablic v Novi Gorici. Hitra popravila, menjava baterije, zaslona in več.',
    },
  ],
};
