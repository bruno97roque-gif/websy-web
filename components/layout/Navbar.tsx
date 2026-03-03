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
      className={`fixed left-0 right-0 top-0 z-[900] transition-all duration-400 ${
        solid
          ? "border-b border-[#e4e2ea] bg-white/94 shadow-[0_2px_32px_rgba(41,18,49,.06)] backdrop-blur-[18px]"
          : ""
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1600px] items-center justify-between px-8 md:px-[72px]">

        {/* Logo — swap /images/logo-white.png and /images/logo-dark.png with your files */}
        <Link href="/" className="nav-logo flex items-center no-underline">
          {/* Logo para header transparente (versión blanca/clara) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-white.png"
            alt="Websy"
            className={`h-10 w-auto object-contain ${solid ? "hidden" : "block"}`}
          />
          {/* Logo para header sticky (versión oscura) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-dark.png"
            alt="Websy"
            className={`h-10 w-auto object-contain ${solid ? "block" : "hidden"}`}
          />
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
      </div>
    </nav>
  );
}
