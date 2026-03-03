"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const cur2Ref = useRef<HTMLDivElement>(null);

  // Guardamos la posición del mouse y el ID de la animación
  const mouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Loop de animación sincronizado con el refresco de la pantalla
    const animate = () => {
      const { x, y } = mouse.current;
      if (curRef.current) {
        // 2. Usamos transform3d para aceleración por hardware (GPU)
        curRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (cur2Ref.current) {
        cur2Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    
    // Iniciamos el loop
    rafId.current = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", onMove);

    // Funciones de estilo
    const enlarge = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width = "18px";
      curRef.current.style.height = "18px";
      curRef.current.style.background = "#291231";
      cur2Ref.current.style.width = "48px";
      cur2Ref.current.style.height = "48px";
    };

    const reset = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width = "10px";
      curRef.current.style.height = "10px";
      curRef.current.style.background = "#F18C1B";
      cur2Ref.current.style.width = "32px";
      cur2Ref.current.style.height = "32px";
    };

    // 3. Delegación de eventos para el hover (funciona con elementos dinámicos)
    const selectors = "a, button, .glass-card, .trust-item, .qs-pillar";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) enlarge();
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(selectors)) reset();
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Añadimos top-0, left-0 y will-change-transform. Quitamos los translate estáticos de tailwind */}
      <div
        ref={curRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full bg-[#F18C1B] transition-[width_.2s,height_.2s,background_.2s] will-change-transform"
      />
      <div
        ref={cur2Ref}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-[#F18C1B] opacity-45 transition-[width_.25s,height_.25s] will-change-transform"
      />
    </>
  );
}