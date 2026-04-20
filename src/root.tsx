*** Begin Patch
*** Update File: src/root.tsx
@@
-import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
-import {
-  QwikCityProvider,
-  RouterOutlet,
-  Head,
-  ServiceWorkerRegister,
-  type DocumentHead,
-} from '@builder.io/qwik-city';
+import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
+import {
+  QwikCityProvider,
+  RouterOutlet,
+  ServiceWorkerRegister,
+  type DocumentHead,
+} from '@builder.io/qwik-city';
 import styles from './assets/styles/global.css?inline';
@@
-  return (
-    <QwikCityProvider>
-      <head>
-        <meta charSet="utf-8" />
-        <meta name="viewport" content="width=device-width, initial-scale=1" />
-
-        {/* Favicon */}
-        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
-        <link rel="alternate icon" href="/favicon.ico" />
-        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
-
-        {/* Google Analytics */}
-        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
-        <script>
-          {`
-            window.dataLayer = window.dataLayer || [];
-            function gtag(){dataLayer.push(arguments);}
-            gtag('js', new Date());
-            gtag('config', 'G-XXXXXXX');
-          `}
-        </script>
-
-        <Head />
-      </head>
-
-      <body lang="sl">
-        <RouterOutlet />
-        <ServiceWorkerRegister />
-      </body>
-    </QwikCityProvider>
-  );
+  return (
+    <QwikCityProvider>
+      <body lang="sl">
+        <RouterOutlet />
+        <ServiceWorkerRegister />
+      </body>
+    </QwikCityProvider>
+  );
*** End Patch
