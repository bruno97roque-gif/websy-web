"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const cur2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No registrar nada en dispositivos touch (móvil/tablet sin mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // 1. RAF batching — limita actualizaciones a 1 por frame (máx 60fps)
    //    evita acumulación de microtasks en ratones de alta frecuencia
    let rafId: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (curRef.current)
          curRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        if (cur2Ref.current)
          cur2Ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      });
    };

    document.addEventListener("mousemove", onMove);

    // 2. Funciones de estilo para el hover
    const enlarge = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width = "18px";
      curRef.current.style.height = "18px";
      curRef.current.style.backgroundColor = "#291231";
      cur2Ref.current.style.width = "48px";
      cur2Ref.current.style.height = "48px";
    };

    const reset = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width = "10px";
      curRef.current.style.height = "10px";
      curRef.current.style.backgroundColor = "#F18C1B";
      cur2Ref.current.style.width = "32px";
      cur2Ref.current.style.height = "32px";
    };

    // 3. pointerenter/pointerleave directo en elementos interactivos
    //    (no burbujean por todo el DOM como mouseover/mouseout)
    let interactives: NodeListOf<HTMLElement> | null = null;
    const interactiveTimer = window.setTimeout(() => {
      interactives = document.querySelectorAll<HTMLElement>("a, button, .glass-card, .trust-item, .qs-pillar");
      interactives.forEach((el) => {
        el.addEventListener("pointerenter", enlarge);
        el.addEventListener("pointerleave", reset);
      });
    }, 300);

    // 4. Ocultar/mostrar cursor en service cards con fade suave
    //    (transition opacity definida en el JSX)
    const hideCursor = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.opacity  = "0";
      cur2Ref.current.style.opacity = "0";
    };
    const showCursor = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.opacity  = "1";
      cur2Ref.current.style.opacity = "1";
    };

    let cards: NodeListOf<HTMLElement> | null = null;
    const cardTimer = window.setTimeout(() => {
      cards = document.querySelectorAll<HTMLElement>(".js-serv");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", hideCursor);
        card.addEventListener("mouseleave", showCursor);
      });
    }, 300);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(interactiveTimer);
      clearTimeout(cardTimer);
      interactives?.forEach((el) => {
        el.removeEventListener("pointerenter", enlarge);
        el.removeEventListener("pointerleave", reset);
      });
      cards?.forEach((card) => {
        card.removeEventListener("mouseenter", hideCursor);
        card.removeEventListener("mouseleave", showCursor);
      });
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* hidden en touch/móvil — md:block solo lo hace visible en desktop con mouse */}
      <div
        ref={curRef}
        className="pointer-events-none fixed top-0 left-0 z-[100001] hidden h-2.5 w-2.5 rounded-full bg-[#F18C1B] will-change-transform md:block"
        style={{ transition: "width 0.2s, height 0.2s, background-color 0.2s, opacity 0.15s", transform: "translate3d(-200px, -200px, 0)" }}
      />
      <div
        ref={cur2Ref}
        className="pointer-events-none fixed top-0 left-0 z-[100000] hidden h-8 w-8 rounded-full border border-[#F18C1B] opacity-45 will-change-transform md:block"
        style={{ transition: "width 0.25s, height 0.25s, opacity 0.15s", transform: "translate3d(-200px, -200px, 0)" }}
      />
    </>
  );
}