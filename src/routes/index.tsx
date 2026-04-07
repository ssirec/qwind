import type { DocumentHead } from '@builder.io/qwik-city';

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
