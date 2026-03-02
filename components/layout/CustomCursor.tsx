"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef  = useRef<HTMLDivElement>(null);
  const cur2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, fx = 0, fy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top  = my + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      fx += (mx - fx) * 0.11;
      fy += (my - fy) * 0.11;
      if (cur2Ref.current) {
        cur2Ref.current.style.left = fx + "px";
        cur2Ref.current.style.top  = fy + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const enlarge = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width    = "18px";
      curRef.current.style.height   = "18px";
      curRef.current.style.background = "#291231";
      cur2Ref.current.style.width  = "48px";
      cur2Ref.current.style.height = "48px";
    };
    const reset = () => {
      if (!curRef.current || !cur2Ref.current) return;
      curRef.current.style.width    = "10px";
      curRef.current.style.height   = "10px";
      curRef.current.style.background = "#F18C1B";
      cur2Ref.current.style.width  = "32px";
      cur2Ref.current.style.height = "32px";
    };

    const targets = document.querySelectorAll("a, button, .glass-card, .trust-item, .qs-pillar");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enlarge);
      el.addEventListener("mouseleave", reset);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enlarge);
        el.removeEventListener("mouseleave", reset);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={curRef}
        className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F18C1B] transition-[width_.2s,height_.2s,background_.2s]"
      />
      <div
        ref={cur2Ref}
        className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F18C1B] opacity-45 transition-[width_.25s,height_.25s]"
      />
    </>
  );
}
