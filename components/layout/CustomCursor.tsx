"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const cur2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No registrar nada en dispositivos touch (móvil/tablet sin mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // 1. Actualización directa (mucho más simple, sin loops extraños)
    const onMove = (e: MouseEvent) => {
      if (curRef.current) {
        curRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (cur2Ref.current) {
        cur2Ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
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

    const selectors = "a, button, .glass-card, .trust-item, .qs-pillar";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) enlarge();
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) reset();
    };

    // Ocultar cursor cuando el mouse entra a una service card.
    // mouseenter/mouseleave NO burbujean → no se disparan al moverse entre hijos.
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

    // Adjuntar a los cards cuando el DOM esté listo
    let cards: NodeListOf<HTMLElement> | null = null;
    const cardTimer = window.setTimeout(() => {
      cards = document.querySelectorAll<HTMLElement>(".js-serv");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", hideCursor);
        card.addEventListener("mouseleave", showCursor);
      });
    }, 300);

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      clearTimeout(cardTimer);
      cards?.forEach((card) => {
        card.removeEventListener("mouseenter", hideCursor);
        card.removeEventListener("mouseleave", showCursor);
      });
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {/* hidden en touch/móvil — md:block solo lo hace visible en desktop con mouse */}
      <div
        ref={curRef}
        className="pointer-events-none fixed top-0 left-0 z-[100001] hidden h-2.5 w-2.5 rounded-full bg-[#F18C1B] will-change-transform md:block"
        style={{ transition: "width 0.2s, height 0.2s, background-color 0.2s", transform: "translate3d(-200px, -200px, 0)" }}
      />
      <div
        ref={cur2Ref}
        className="pointer-events-none fixed top-0 left-0 z-[100000] hidden h-8 w-8 rounded-full border border-[#F18C1B] opacity-45 will-change-transform md:block"
        style={{ transition: "width 0.25s, height 0.25s", transform: "translate3d(-200px, -200px, 0)" }}
      />
    </>
  );
}