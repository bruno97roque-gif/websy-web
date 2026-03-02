"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[900] flex h-[78px] items-center justify-between px-8 transition-all duration-400 md:px-[72px] ${
        solid
          ? "border-b border-[#e4e2ea] bg-white/94 shadow-[0_2px_32px_rgba(41,18,49,.06)] backdrop-blur-[18px]"
          : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="nav-logo group flex items-center gap-3 no-underline">
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[9px] bg-[#291231]">
          <div className="absolute inset-0 translate-y-full rounded-[9px] bg-[#F18C1B] transition-transform duration-300 group-hover:translate-y-0" />
          <span className="relative z-10 font-montserrat text-xl font-black text-[#F18C1B] transition-colors group-hover:text-[#291231]">
            W
          </span>
        </div>
        <span
          className={`font-montserrat text-[21px] font-black uppercase tracking-[3px] transition-colors ${
            solid ? "text-[#291231]" : "text-white"
          }`}
        >
          Websy
        </span>
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-9 list-none">
        {[
          { href: "/nosotros", label: "Nosotros" },
          { href: "/#servicios", label: "Servicios" },
          { href: "/#clientes", label: "Clientes" },
        ].map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`group relative pb-1 font-montserrat text-[12px] font-semibold uppercase tracking-[1.5px] no-underline transition-colors hover:text-[#F18C1B] ${
                solid ? "text-[#1a1020]" : "text-white/80"
              }`}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F18C1B] transition-all group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contacto"
            className="rounded-full bg-[#F18C1B] px-6 py-2.5 font-montserrat text-[12px] font-black uppercase tracking-[1.5px] text-[#291231] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(241,140,27,.4)]"
          >
            Contáctanos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
