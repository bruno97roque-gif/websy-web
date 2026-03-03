"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MovingBorderButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * MovingBorderButton — white glassmorphism CTA.
 * Hover: solo la flecha se mueve en loop, el botón NO sube.
 */
export function MovingBorderButton({
  children,
  href,
  className,
  onClick,
  type = "button",
}: MovingBorderButtonProps) {
  const base = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full",
    "border border-white/30 bg-white/12",
    "px-8 py-[15px]",
    "font-montserrat text-[13px] font-bold uppercase tracking-[1.5px] text-white",
    "transition-colors duration-300 hover:bg-white/18 hover:border-white/45",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {/* Flecha animada en loop solo en hover */}
      <span
        aria-hidden
        className="inline-block group-hover:animate-[arrowLoop_0.75s_ease-in-out_infinite]"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
