import { GTM_CONTAINER_ID, USES_GTM } from "@/lib/analytics";

/**
 * Contenedor de Google Tag Manager, instalado como manda Google:
 * el script lo más arriba posible del <head> y el iframe de respaldo justo
 * después de abrir el <body>.
 *
 * Son componentes de servidor con etiquetas <script> normales (no next/script)
 * a propósito: así el contenedor se ejecuta antes de que React hidrate y no se
 * pierde ni un clic de los primeros segundos, que es cuando más gente rebota.
 *
 * Incluye Consent Mode v2 en el mismo bloque, antes del cargador, respetando
 * la decisión real del banner de cookies.
 */

/** Va dentro de <head>, lo primero de todo. */
export function GoogleTagManagerHead() {
  if (!USES_GTM) return null;

  const codigo = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var __r=false; try{__r=localStorage.getItem('websy_cookies_consent')==='rejected';}catch(e){}
gtag('consent','default',{
  ad_storage:__r?'denied':'granted',
  ad_user_data:__r?'denied':'granted',
  ad_personalization:__r?'denied':'granted',
  analytics_storage:__r?'denied':'granted',
  functionality_storage:'granted',
  security_storage:'granted'
});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`.trim();

  return <script id="gtm-init" dangerouslySetInnerHTML={{ __html: codigo }} />;
}

/** Va justo después de abrir <body>: respaldo para visitantes sin JavaScript. */
export function GoogleTagManagerNoScript() {
  if (!USES_GTM) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
