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
 * MovingBorderButton — ghost CTA with an animated rotating border beam.
 * Use for secondary/ghost action buttons throughout the site.
 */
export function MovingBorderButton({
  children,
  href,
  className,
  onClick,
  type = "button",
}: MovingBorderButtonProps) {
  const base = cn(
    "group relative inline-flex overflow-hidden rounded-full p-[1.5px]",
    className
  );

  const inner = (
    <>
      {/* Rotating conic-gradient — creates the animated border beam */}
      <span
        aria-hidden
        className="absolute inset-[-200%] animate-[spin_4s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 30%, #F18C1B 42%, rgba(255,255,255,.85) 50%, #F18C1B 58%, transparent 70%, transparent 100%)",
        }}
      />
      {/* Content — dark bg hides the gradient except at the 1.5 px border strip */}
      <span
        className={cn(
          "relative flex items-center gap-2 rounded-full",
          "bg-[#100618]/60 px-8 py-[15px] backdrop-blur-md",
          "font-montserrat text-[13px] font-bold uppercase tracking-[1.5px] text-white",
          "transition-all duration-300 group-hover:bg-[#F18C1B]/12"
        )}
      >
        {children}
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
