"use client";

/**
 * AnimatedMedia
 * — Desktop/PC   → <video> WebM (VP9 con alpha, alta calidad)
 * — Móvil / iOS  → <img>   GIF comprimido (transparencia nativa en todos los browsers)
 *
 * La detección corre solo en el cliente (useEffect) para evitar problemas de hidratación.
 * El servidor y el primer render siempre entregan <video> (default para desktop).
 */

import React, { useEffect, useRef, useState, forwardRef } from "react";

interface AnimatedMediaProps {
  /** Ruta del archivo WebM (para desktop) */
  webmSrc: string;
  /** Ruta del GIF comprimido (para móvil / iOS) */
  gifSrc: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean | "true" | "false";
  draggable?: boolean;
}

function isMobileOrIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const AnimatedMedia = forwardRef<HTMLVideoElement | HTMLImageElement, AnimatedMediaProps>(
  function AnimatedMedia({ webmSrc, gifSrc, className, style, draggable = false, ...rest }, ref) {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      setMobile(isMobileOrIOS());
    }, []);

    if (mobile) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref as React.Ref<HTMLImageElement>}
          src={gifSrc}
          alt=""
          loading="eager"
          // @ts-expect-error fetchPriority no está en los tipos de React aún
          fetchPriority="high"
          className={className}
          style={style}
          draggable={draggable}
          {...rest}
        />
      );
    }

    return (
      <video
        ref={ref as React.Ref<HTMLVideoElement>}
        src={webmSrc}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={style}
        {...rest}
      />
    );
  }
);

AnimatedMedia.displayName = "AnimatedMedia";
export { AnimatedMedia };
