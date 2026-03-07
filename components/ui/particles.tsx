"use client";

import { useCallback, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;      // speed of opacity pulsing
  pulsePhase: number; // offset so they don't all pulse together
}

interface ParticlesProps {
  /** Number of floating dots */
  count?: number;
  /** Hex colors to sample from */
  colors?: string[];
  className?: string;
  /** 0–1, overall brightness multiplier */
  brightness?: number;
}

/**
 * Lightweight canvas-based particles — no external deps.
 * Dots float slowly and pulse in opacity.
 */
export function Particles({
  count      = 70,
  colors     = ["#ffffff", "#F18C1B"],
  className  = "",
  brightness = 1,
}: ParticlesProps) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const particles    = useRef<Particle[]>([]);
  const rafRef       = useRef<number>(0);
  const timeRef      = useRef<number>(0);

  // Reduce particle count on mobile/low-power devices to improve FPS
  const effectiveCount = typeof window !== "undefined" && window.innerWidth < 768
    ? Math.min(count, 30)
    : count;

  const hexToRgb = useCallback((hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }, []);

  const initParticles = useCallback(
    (w: number, h: number) => {
      particles.current = Array.from({ length: effectiveCount }, () => ({
        x:          Math.random() * w,
        y:          Math.random() * h,
        vx:         (Math.random() - 0.5) * 0.25,
        vy:         (Math.random() - 0.5) * 0.25,
        size:       Math.random() * 1.8 + 0.4,
        opacity:    Math.random() * 0.4 + 0.1,
        color:      colors[Math.floor(Math.random() * colors.length)],
        pulse:      Math.random() * 0.008 + 0.003,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    },
    [effectiveCount, colors]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (ts: number) => {
      const dt = ts - (timeRef.current || ts);
      timeRef.current = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -4)              p.x = canvas.width  + 4;
        if (p.x > canvas.width + 4) p.x = -4;
        if (p.y < -4)              p.y = canvas.height + 4;
        if (p.y > canvas.height + 4) p.y = -4;

        // Pulse opacity
        p.pulsePhase += p.pulse * dt;
        const alpha = (Math.sin(p.pulsePhase) * 0.15 + p.opacity) * brightness;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [initParticles, hexToRgb, brightness]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
