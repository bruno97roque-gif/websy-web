"use client";

/**
 * AnimatedMedia
 * — Desktop/PC   → <video> WebM (VP9 con alpha, alta calidad)
 * — Móvil / iOS  → <img>   WebP animado (transparencia nativa, pesa 3× menos que el GIF)
 *
 * La detección corre solo en el cliente (useEffect) para evitar problemas de hidratación.
 *
 * IMPORTANTE — ninguna de las dos fuentes se pide hasta saber qué dispositivo es.
 * El servidor pintaba el <video> con `src` y el móvil descargaba el WebM Y DESPUÉS el
 * archivo de móvil: las dos animaciones por cada bloque. En la portada eran ~5 MB de más.
 * Por eso el `src` se asigna solo tras montar, cuando ya se sabe cuál toca.
 */

import React, { useEffect, useState, forwardRef } from "react";

interface AnimatedMediaProps {
  /** Ruta del archivo WebM (para desktop) */
  webmSrc: string;
  /** Ruta del WebP animado o GIF (para móvil / iOS) */
  gifSrc: string;
  /**
   * Cuando la misma animación se pinta dos veces (una maquetación para móvil y otra
   * para escritorio) y el CSS esconde una, hay que decir aquí a cuál pertenece cada
   * copia. Sin esto la copia escondida se descarga igual: pesa lo mismo aunque no
   * se vea. Se compara contra el mismo corte de 768px que usa el CSS.
   */
  soloEn?: "movil" | "escritorio";
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
  function AnimatedMedia(
    { webmSrc, gifSrc, soloEn, className, style, draggable = false, ...rest },
    ref
  ) {
    const [dispositivo, setDispositivo] = useState<"sinSaber" | "movil" | "escritorio">(
      "sinSaber"
    );
    const [pantallaAncha, setPantallaAncha] = useState<boolean | null>(null);

    useEffect(() => {
      setDispositivo(isMobileOrIOS() ? "movil" : "escritorio");
      const anchas = window.matchMedia("(min-width: 768px)");
      const aplicar = () => setPantallaAncha(anchas.matches);
      aplicar();
      anchas.addEventListener("change", aplicar);
      return () => anchas.removeEventListener("change", aplicar);
    }, []);

    // Esta copia la esconde el CSS en el tamaño actual: no se pide ningún archivo.
    const fueraDeSuSitio =
      soloEn !== undefined &&
      pantallaAncha !== null &&
      ((soloEn === "escritorio" && !pantallaAncha) || (soloEn === "movil" && pantallaAncha));

    if (soloEn !== undefined && (pantallaAncha === null || fueraDeSuSitio)) {
      return <span className={className} style={style} aria-hidden="true" />;
    }

    if (dispositivo === "movil") {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref as React.Ref<HTMLImageElement>}
          src={gifSrc}
          alt=""
          loading="eager"
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
        src={dispositivo === "escritorio" ? webmSrc : undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={className}
        style={style}
        {...rest}
      />
    );
  }
);

AnimatedMedia.displayName = "AnimatedMedia";
export { AnimatedMedia };
