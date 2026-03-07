"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NosotrosHero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);   // text block → collision wall
  const tagRef       = useRef<HTMLParagraphElement>(null);
  const h1Ref        = useRef<HTMLHeadingElement>(null);
  const descRef      = useRef<HTMLParagraphElement>(null);
  const alienWrapRef = useRef<HTMLDivElement>(null);
  const alienImgRef  = useRef<HTMLImageElement>(null);

  /* ── GSAP entry — text only ── */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(tagRef.current,  { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" })
      .fromTo(h1Ref.current,   { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" }, "-=0.25")
      .fromTo(descRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.45");
  }, []);

  /* ── Drag + Bounce Physics ── */
  useEffect(() => {
    const wrap    = alienWrapRef.current;
    const img     = alienImgRef.current;
    const section = sectionRef.current;
    const h1El    = h1Ref.current;    // tightest wall = the actual heading
    if (!wrap || !img || !section) return;

    let x = 0, y = 0;
    let vx = 0, vy = 0;
    let dragging = false;
    let prevX = 0, prevY = 0, prevTime = 0;
    let rafId = 0;

    const pauseFloat  = () => { img.style.animationPlayState = "paused";  };
    const resumeFloat = () => { img.style.animationPlayState = "running"; };

    /* Position alien: centered horizontally, bottom of section */
    const init = () => {
      const sw = section.offsetWidth;
      const sh = section.offsetHeight;
      const aw = wrap.offsetWidth;
      const ah = wrap.offsetHeight;
      x = (sw - aw) / 2;
      y = sh - ah - 28;
      wrap.style.transform = `translate(${x}px, ${y}px)`;
      gsap.fromTo(wrap, { opacity: 0 }, { opacity: 1, duration: 0.75, ease: "power3.out" });
    };

    /* Physics tick */
    const tick = () => {
      const sw = section.offsetWidth;
      const sh = section.offsetHeight;
      const aw = wrap.offsetWidth;
      const ah = wrap.offsetHeight;

      // No gravity — outer space 🚀
      vx *= 0.991;
      vy *= 0.991;
      x  += vx;
      y  += vy;

      const rest = 0.65;

      /* ── Section wall collisions ── */
      if (x < 0)        { x = 0;       vx =  Math.abs(vx) * rest; }
      if (x + aw > sw)  { x = sw - aw; vx = -Math.abs(vx) * rest; }
      if (y < 0)        { y = 0;       vy =  Math.abs(vy) * rest; }
      if (y + ah > sh)  { y = sh - ah; vy = -Math.abs(vy) * rest; }

      /* ── Text AABB collision — h1 bounding box = tight wall ── */
      if (h1El) {
        const sRect = section.getBoundingClientRect();
        const cRect = h1El.getBoundingClientRect();
        const cL = cRect.left   - sRect.left;
        const cT = cRect.top    - sRect.top;
        const cR = cRect.right  - sRect.left;
        const cB = cRect.bottom - sRect.top;

        const overlapX = x + aw > cL && x < cR;
        const overlapY = y + ah > cT && y < cB;

        if (overlapX && overlapY) {
          const dLeft   = (x + aw) - cL;
          const dRight  = cR - x;
          const dTop    = (y + ah) - cT;
          const dBottom = cB - y;
          const min = Math.min(dLeft, dRight, dTop, dBottom);

          if (min === dTop)    { y = cT - ah; vy = -Math.abs(vy) * rest; }
          else if (min === dBottom) { y = cB;       vy =  Math.abs(vy) * rest; }
          else if (min === dLeft)   { x = cL - aw;  vx = -Math.abs(vx) * rest; }
          else                      { x = cR;        vx =  Math.abs(vx) * rest; }
        }
      }

      wrap.style.transform = `translate(${x}px, ${y}px)`;

      if (Math.hypot(vx, vy) < 0.15) {
        resumeFloat();
      } else {
        rafId = requestAnimationFrame(tick);
      }
    };

    /* ── Pointer events ── */
    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      dragging = true;
      cancelAnimationFrame(rafId);
      pauseFloat();
      wrap.setPointerCapture(e.pointerId);
      prevX = e.clientX;
      prevY = e.clientY;
      prevTime = e.timeStamp;
      vx = vy = 0;
      wrap.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dt = Math.max(e.timeStamp - prevTime, 1);
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      x += dx; y += dy;
      vx = dx / dt * 16;
      vy = dy / dt * 16;
      prevX = e.clientX;
      prevY = e.clientY;
      prevTime = e.timeStamp;
      wrap.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      wrap.style.cursor = "grab";
      vx = Math.max(-22, Math.min(22, vx * 2.4));
      vy = Math.max(-22, Math.min(22, vy * 2.4));
      rafId = requestAnimationFrame(tick);
    };

    wrap.addEventListener("pointerdown",   onPointerDown,  { passive: false });
    wrap.addEventListener("pointermove",   onPointerMove);
    wrap.addEventListener("pointerup",     onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);

    const t = setTimeout(init, 450);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t);
      wrap.removeEventListener("pointerdown",   onPointerDown);
      wrap.removeEventListener("pointermove",   onPointerMove);
      wrap.removeEventListener("pointerup",     onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#291231] px-8 pt-[100px] pb-[320px] text-center select-none md:px-[72px] md:pt-[140px] md:pb-[400px]"
      style={{
        backgroundImage: "url('/images/fondo-page-nosotros.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.11)_0%,transparent_65%)] blur-[90px]" />

      {/* Text content — also a collision wall for the alien */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-[960px]">
        <p
          ref={tagRef}
          style={{ opacity: 0 }}
          className="font-poppins mb-5 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]"
        >
          Sobre nosotros
        </p>

        <h1
          ref={h1Ref}
          style={{ opacity: 0 }}
          className="font-montserrat mb-6 text-[clamp(26px,4.6vw,62px)] font-bold leading-[1.06] tracking-tight text-white"
        >
          Somos una agencia con más de
          <em className="not-italic text-[#F18C1B]"> 5 años de experiencia</em>
        </h1>

        <p
          ref={descRef}
          style={{ opacity: 0 }}
          className="font-poppins mx-auto max-w-[560px] text-[14px] leading-[1.85] text-white sm:text-[15px]"
        >
          En Websy, no nos limitamos a &quot;estar en internet&quot;. Diseñamos marcas
          que buscan un impacto real.
        </p>
      </div>

      {/* ── Alien — absolutely positioned, draggable + physics ── */}
      <div
        ref={alienWrapRef}
        style={{
          opacity: 0,
          position: "absolute",
          left: 0,
          top: 0,
          cursor: "grab",
          touchAction: "none",
          zIndex: 20,
          userSelect: "none",
        }}
      >
        {/* WebP animated (74% smaller) → GIF fallback */}
        <picture style={{ pointerEvents: "none" }}>
          <source srcSet="/images/alien-floating.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={alienImgRef}
            src="/images/alien-floating.gif"
            alt=""
            className="h-auto w-[260px] animate-[floatY_6s_ease-in-out_infinite] object-contain drop-shadow-2xl sm:w-[280px] md:w-[320px]"
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
        </picture>
      </div>
    </section>
  );
}
