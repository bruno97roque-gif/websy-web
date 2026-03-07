"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * ShimmerButton — primary CTA con animated light sweep.
 * Hover: solo la flecha/ícono se mueve en loop, el botón NO sube.
 */
export function ShimmerButton({
  children,
  href,
  target,
  rel,
  className,
  onClick,
  type = "button",
}: ShimmerButtonProps) {
  const base = cn(
    "group relative inline-flex items-center overflow-hidden rounded-full bg-[#F18C1B]",
    "px-9 py-4 font-montserrat text-[13px] font-bold uppercase tracking-[1.5px] text-[#291231]",
    "whitespace-nowrap transition-colors duration-200",
    className
  );

  const shimmer = (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-y-0 w-[45%] animate-[shimmer_2.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent [transform:skewX(-12deg)_translateX(-150%)]" />
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {shimmer}
        {/* El SVG (flecha) dentro hereda group-hover y se anima solo */}
        <span className="relative flex items-center gap-2.5 [&_svg]:group-hover:animate-[arrowLoop_0.75s_ease-in-out_infinite]">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {shimmer}
      <span className="relative flex items-center gap-2.5 [&_svg]:group-hover:animate-[arrowLoop_0.75s_ease-in-out_infinite]">
        {children}
      </span>
    </button>
  );
}
