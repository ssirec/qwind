import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";
import { DarkThemeLauncher } from "~/components/common/DarkThemeLauncher";

// Add i18next imports
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import en from "~/locales/en.json";
import sl from "~/locales/sl.json";
import it from "~/locales/it.json";

// Import global styles
import styles from "~/assets/styles/global.css?inline";

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sl: { translation: sl },
      it: { translation: it },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default component$(() => {
  /**
   * The root of a QwikCity site always starts with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <
