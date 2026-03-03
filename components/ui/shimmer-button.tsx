"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * ShimmerButton — primary CTA with animated light sweep.
 * Use for the main orange action buttons throughout the site.
 */
export function ShimmerButton({
  children,
  href,
  className,
  onClick,
  type = "button",
}: ShimmerButtonProps) {
  const base = cn(
    "group relative inline-flex items-center overflow-hidden rounded-full bg-[#F18C1B]",
    "px-9 py-4 font-montserrat text-[13px] font-black uppercase tracking-[1.5px] text-[#291231]",
    "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(241,140,27,.55)]",
    className
  );

  const shimmer = (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-y-0 w-[45%] animate-[shimmer_2.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent [transform:skewX(-12deg)_translateX(-150%)]" />
    </span>
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {shimmer}
        <span className="relative flex items-center gap-2.5">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {shimmer}
      <span className="relative flex items-center gap-2.5">{children}</span>
    </button>
  );
}
