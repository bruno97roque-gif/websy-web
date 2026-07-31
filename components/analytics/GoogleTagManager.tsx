"use client";

import Script from "next/script";
import { GTM_CONTAINER_ID, USES_GTM } from "@/lib/analytics";

/**
 * Contenedor de Google Tag Manager.
 *
 * Se activa solo cuando existe la variable de entorno `NEXT_PUBLIC_GTM_ID`
 * (formato GTM-XXXXXXX). Mientras esté vacía, el sitio sigue midiendo con
 * gtag.js directo desde `app/layout.tsx` — así el cambio a GTM se hace sin
 * ventana ciega y sin duplicar eventos.
 *
 * Incluye Consent Mode v2 respetando la decisión real del banner de cookies:
 * si el visitante pulsó "Rechazar", GA4 pasa a medición sin cookies. Antes el
 * botón de rechazar no tenía ningún efecto sobre la analítica.
 */
export default function GoogleTagManager() {
  if (!USES_GTM) return null;

  return (
    <>
      {/* Un único script: primero el consentimiento por defecto (Consent Mode
          v2) y justo después el contenedor. Van juntos para garantizar el
          orden — el consentimiento tiene que estar declarado antes de que GTM
          dispare el primer tag. */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var __rejected = false;
          try { __rejected = localStorage.getItem('websy_cookies_consent') === 'rejected'; } catch (e) {}
          gtag('consent', 'default', {
            ad_storage:            __rejected ? 'denied' : 'granted',
            ad_user_data:          __rejected ? 'denied' : 'granted',
            ad_personalization:    __rejected ? 'denied' : 'granted',
            analytics_storage:     __rejected ? 'denied' : 'granted',
            functionality_storage: 'granted',
            security_storage:      'granted'
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
        `}
      </Script>

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
