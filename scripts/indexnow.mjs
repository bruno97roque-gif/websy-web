#!/usr/bin/env node
/**
 * Avisa a Bing y al resto de buscadores del protocolo IndexNow de que hay URLs
 * nuevas o modificadas, sin esperar a que pasen a rastrear.
 *
 * Por qué: hasta agosto de 2026 el sitio no tenía ni verificación de Bing
 * Webmaster Tools ni clave de IndexNow, así que todo el canal estaba sin
 * estrenar. Google no usa IndexNow; Bing, Yandex, Seznam y Naver sí.
 *
 * Uso:
 *   node scripts/indexnow.mjs                  → envía todas las URLs del sitemap
 *   node scripts/indexnow.mjs /desarrollo-web /blog/mi-articulo
 *
 * La clave vive en public/<clave>.txt (el buscador la lee de ahí para
 * comprobar que quien envía es el dueño del dominio).
 */

const HOST = "websy.com.pe";
const SITE = `https://${HOST}`;
const KEY = "32323fdccbcebddda342595f0def8807";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function urlsDelSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml devolvió ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`))
  : await urlsDelSitemap();

// IndexNow admite 10.000 URLs por envío; vamos de 1.000 en 1.000 por prudencia.
for (let i = 0; i < urlList.length; i += 1000) {
  const lote = urlList.slice(i, i + 1000);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: lote }),
  });
  // 200 y 202 son ambos "recibido". 403 = la clave no se lee desde el dominio.
  console.log(`lote ${i / 1000 + 1}: ${lote.length} URLs → HTTP ${res.status}`);
  if (res.status === 403) {
    console.error(`  ⚠️  Comprueba que ${SITE}/${KEY}.txt responde 200 con la clave dentro.`);
  }
}
