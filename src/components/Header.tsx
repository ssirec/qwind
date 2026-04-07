import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="sticky top-0 bg-white shadow z-50">
      <div class="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="font-bold text-lg">MEDIASERVIS</div>

        <nav class="hidden md:flex gap-6">
          <a href="#storitve">Storitve</a>
          <a href="#onas">O nas</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a href="tel:+386XXXXXXXX" class="btn-call">
          Pokliči
        </a>
      </div>
    </header>
  );
});
