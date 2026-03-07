"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal — Lightweight scroll reveal using native IntersectionObserver.
 * Replaces GSAP ScrollTrigger for simple fade-in animations.
 *
 * Usage:
 *   const ref = useReveal<HTMLDivElement>();
 *   <div ref={ref} className="reveal"> ... </div>
 *
 * For staggered children:
 *   <div ref={ref} className="reveal-stagger"> ... </div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target); // fire only once
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useRevealList — Reveals multiple refs with staggered delay.
 * Each item gets a `reveal-item` class + data-delay applied via CSS.
 */
export function useRevealList<T extends HTMLElement = HTMLDivElement>(
  count: number,
  threshold = 0.1,
) {
  const containerRef = useRef<T>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemRefs.current.forEach((item, i) => {
              if (!item) return;
              setTimeout(() => item.classList.add("is-revealed"), i * 90);
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, threshold]);

  return { containerRef, itemRefs };
}
