# Websy — Documentación del Proyecto

> Agencia de Marketing Digital · Lima, Perú
> Stack: **Next.js 16 · TypeScript · Tailwind CSS v4 · GSAP**

---

## 1. Stack Tecnológico

| Categoría | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Lenguaje | TypeScript | ^5 |
| Estilos | Tailwind CSS v4 | ^4 |
| Animaciones | GSAP + ScrollTrigger | ^3.14.2 |
| Scroll suave | Lenis | ^1.3.18 |
| Carrusel | Swiper (EffectCards) | último |
| Accordion | @radix-ui/react-accordion | último |
| Contador | countup.js | ^2.9.0 |
| Tilt 3D | vanilla-tilt | ^1.8.1 |
| Runtime | React 19 | 19.2.3 |

---

## 2. Dependencias (`package.json`)

### Production
```json
"@gsap/react": "^2.1.2",
"@radix-ui/react-accordion": "último",
"clsx": "^2.1.1",
"countup.js": "^2.9.0",
"gsap": "^3.14.2",
"lenis": "^1.3.18-dev.1",
"next": "16.1.6",
"react": "19.2.3",
"react-dom": "19.2.3",
"swiper": "último",
"tailwind-merge": "^3.5.0",
"vanilla-tilt": "^1.8.1"
```

### Dev
```json
"@tailwindcss/postcss": "^4",
"@types/node": "^20",
"@types/react": "^19",
"@types/react-dom": "^19",
"eslint": "^9",
"eslint-config-next": "16.1.6",
"tailwindcss": "^4",
"typescript": "^5"
```

---

## 3. Estructura de Archivos

```
websy/
├── app/
│   ├── globals.css          ← Keyframes globales + utilidades de fuente
│   ├── layout.tsx           ← RootLayout: fonts, Navbar, Footer, LoadingScreen
│   └── page.tsx             ← Página home: wrapper con alien mascota
│
├── components/
│   ├── layout/
│   │   ├── CustomCursor.tsx    ← Cursor personalizado (circle + dot)
│   │   ├── Footer.tsx          ← Pie de página
│   │   ├── Navbar.tsx          ← Nav fija con hamburguesa, logo swap scroll
│   │   └── SmoothScroll.tsx    ← Lenis sincronizado con GSAP ticker
│   │
│   ├── sections/home/
│   │   ├── HeroSection.tsx     ← Hero principal (video, orbiting, GSAP)
│   │   ├── MarqueeSection.tsx  ← Marquee de tecnologías
│   │   ├── ServicesSection.tsx ← Cards servicios + VanillaTilt + GSAP
│   │   ├── QuienesSomos.tsx    ← Swiper + Accordion + CountUp + GSAP
│   │   ├── ClientsSection.tsx  ← Sección clientes (marquee)
│   │   └── ContactSection.tsx  ← Formulario de contacto
│   │
│   └── ui/
│       ├── LoadingScreen.tsx      ← Pantalla de carga 0.8s
│       ├── moving-border-button.tsx ← Botón glassmorphism blanco
│       ├── orbiting-circles.tsx    ← Iconos orbitando (CSS animations)
│       └── shimmer-button.tsx      ← Botón naranja CTA con shimmer
│
└── public/
    ├── icons/
    │   ├── logo-white.webp           ← Logo Websy (fondo transparente)
    │   ├── logo-dark.webp            ← Logo Websy (versión oscura)
    │   ├── menu-burguer-pc-mobil.svg ← Ícono hamburguesa
    │   ├── icono1-circle.webp        ← Ícono orbiting 1
    │   ├── icono2-circle.webp        ← Ícono orbiting 2
    │   ├── icono3-circle.webp        ← Ícono orbiting 3
    │   ├── icono4-circle.webp        ← Ícono orbiting 4
    │   ├── icono5-circle.webp        ← Ícono orbiting 5
    │   ├── icono6-circle.webp        ← Ícono orbiting 6
    │   └── remplazo-de-cohete-ovni.gif ← GIF OVNI (anillo interior)
    │
    ├── images/
    │   ├── hero-float.webp       ← Alien mascota sobre hero
    │   ├── hero-ground.webp      ← Suelo lunar base del hero
    │   ├── logo-hero.webp        ← Logo flotante centro orbiting
    │   ├── Google-partner.webp   ← Badge Google Partner
    │   ├── Shopify-partner.webp  ← Badge Shopify Partners
    │   ├── fondo-servicios.webp  ← Background textura sección servicios
    │   ├── degradado.webp        ← Degradado blanco→transparente (blend)
    │   ├── astro-flotando.webp   ← Astronauta con efecto float
    │   └── hero-ground.webp      ← Ground layer hero
    │
    └── video/
        └── Hero-Bg.webm          ← Video de fondo del hero
```

---

## 4. Design Tokens

### Colores principales
| Token | Valor | Uso |
|---|---|---|
| `brand-purple` | `#291231` | Color base de marca, cards oscuras, nav |
| `brand-purple-dark` | `#180a1e` | Fondo hero, loading screen |
| `brand-purple-mid` | `#3d1248` | Gradientes |
| `brand-orange` | `#F18C1B` | Acentos, CTAs, highlights |
| `text-muted` | `#6b6478` | Texto secundario |
| `border-light` | `#e4e2ea` | Bordes de cards en fondos blancos |

### Tipografías
| Variable | Fuente | Pesos | Uso |
|---|---|---|---|
| `--font-montserrat` | Montserrat | 400, 600, 700, 800, 900 | Títulos, botones, badges |
| `--font-poppins` | Poppins | 300, 400, 500, 600 | Cuerpo, labels, párrafos |

> En Tailwind usa `.font-montserrat` y `.font-poppins` (clases de utilidad definidas en `globals.css`).

### Max-width global
Todas las secciones usan `max-w-[1600px]` como ancho máximo de contenido.

---

## 5. Componentes — Ficha Técnica

### `HeroSection`
- **Fondo**: video `Hero-Bg.webm` + overlay `#180a1e/72` + gradiente radial
- **Left**: pill badge + H1 + párrafo + 2 botones — animados con GSAP timeline (delay 0.15s)
- **Right**: `OrbitingCircles` (anillo exterior: 4 iconos, radio 330; anillo interior: 2 iconos + OVNI GIF, radio 190) + partner logos
- **FOUC fix**: `style={{ opacity: 0 }}` inline en los 4 elementos animados (funciona antes del primer paint)
- **Scroll indicator**: mouse SVG + chevrons, keyframes `scrollDot` + `scrollChevron`

### `ServicesSection`
- **Background**: `fondo-servicios.webp` con overlay `bg-white/50` (z-1)
- **Degradados**: `degradado.webp` (z-2) normal arriba + `rotate-180` abajo para blend
- **GSAP**: `gsap.set(cards, { opacity:0, y:60 })` → `fromTo` con ScrollTrigger
- **VanillaTilt**: tilt 3D sobre todas las cards (init después de 1.6s para no chocar con GSAP)
- **Feature card** (servicio 01): `bg-[#291231]`, grid pattern, glow, ocupa 2 rows
- **Regular cards** (02 y 03): mismo estilo dark que feature, tamaño reducido

### `QuienesSomos`
- **Swiper gallery**: `EffectCards` + `Autoplay` (3.2s), 3 slides de stats con gradiente oscuro
- **CountUp**: `countup.js` — del 0 al 5+ cuando el badge entra al viewport (ScrollTrigger `onEnter`)
- **Accordion**: `@radix-ui/react-accordion`, tipo `single + collapsible`, keyframes `accordionDown/Up` en globals.css usando `--radix-accordion-content-height`
- **GSAP**: left column slide desde X:-50, right items stagger Y:32 → 0

### `LoadingScreen`
- **z-index**: 9999 (sobre todo)
- **Timing**: muestra 750ms → fade 300ms → elimina del DOM a 1050ms
- **Elementos**: logo blanco centrado + barra naranja (keyframe `loadBar` scaleX 0→1 en 0.78s)

### `OrbitingCircles`
- CSS animation `orbit` con variables `--duration`, `--radius`, `--angle`, `--icon-size`
- Prop `reverse` invierte la dirección
- Prop `strokeWidth` controla el grosor del path SVG (via `style={{ strokeWidth }}`)

### `SmoothScroll`
- Lenis con `duration: 1.1` sincronizado con GSAP ticker via `gsap.ticker.add()`
- `ScrollTrigger.update` conectado al evento `scroll` de Lenis
- `gsap.ticker.lagSmoothing(0)` para evitar saltos

### `Navbar`
- Fixed con `backdrop-blur`; logo cambia de `logo-white.webp` → `logo-dark.webp` al hacer scroll > 10px
- Hamburguesa visual (`.svg`), aún no funcional (pendiente de implementar menú)

### `MovingBorderButton`
- Glassmorphism: `bg-white/12 border border-white/30` (sin `backdrop-blur` — se removió por flash de 1s)
- Flecha `→` con animación `arrowLoop` solo en hover

### `ShimmerButton`
- Fondo naranja sólido con barrido shimmer animado
- SVG flecha con `arrowLoop` en hover

---

## 6. Keyframes Globales (`globals.css`)

| Keyframe | Uso |
|---|---|
| `shimmer` | Barrido de luz en ShimmerButton |
| `gridMove` | Grid animado del hero |
| `badgePulse` | Pulso badge (no usado actualmente) |
| `floatY` | Float suave (alien, logo hero, astronauta) |
| `sline` | Línea scroll (legacy, reemplazada) |
| `arrowLoop` | Flecha que sale y reaparece en botones |
| `rocketFlip` | Flip horizontal del cohete (legacy) |
| `accordionDown` | Apertura smooth del accordion Radix |
| `accordionUp` | Cierre smooth del accordion Radix |
| `loadBar` | Barra de progreso pantalla de carga |
| `scrollDot` | Punto que baja dentro del mouse SVG |
| `scrollChevron` | Chevrons del scroll indicator |
| `mq` / `cliScroll` | Marquee de marcas / clientes |

---

## 7. Patrones Importantes

### Anti-FOUC (Flash of Unstyled Content)
```tsx
// ✅ Correcto — opacity 0 en HTML, antes del primer paint
<div ref={ref} style={{ opacity: 0 }}>

// ❌ Incorrecto — useEffect corre DESPUÉS del primer paint
gsap.set(ref.current, { opacity: 0 }); // ← tarde, ya flasheó
```

### ScrollTrigger + Lenis
```ts
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

### CountUp con ScrollTrigger
```ts
const cu = new CountUp(element, 5, { suffix: "+", duration: 2.2 });
ScrollTrigger.create({
  trigger: element,
  start: "top 85%",
  once: true,
  onEnter: () => cu.start(),
});
```

---

## 8. Pendientes / Roadmap

- [ ] **Navbar hamburguesa funcional** — menú desplegable mobile
- [ ] **Imágenes reales** en Swiper de QuienesSomos (actualmente slides de stats)
- [ ] **Imagen real** en placeholder izquierdo de QuienesSomos
- [ ] **ContactSection** — conectar formulario a backend/email service
- [ ] **Página `/nosotros`** — ruta actualmente redirige a placeholder
- [ ] **SEO** — OG tags, sitemap, robots.txt
- [ ] **Lighthouse** — auditoría performance/accesibilidad

---

*Generado automáticamente · Websy Dev Docs · 2026*
