"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [solid,    setSolid]    = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[900] transition-all duration-400 ${
          solid && !menuOpen
            ? "border-b border-[#e4e2ea] bg-white/94 shadow-[0_2px_32px_rgba(41,18,49,.06)] backdrop-blur-[18px]"
            : ""
        }`}
      >
        <div className="mx-auto flex h-[78px] w-full max-w-[1600px] items-center justify-between px-8 md:px-[72px]">

          {/* Logo — blanco por defecto, oscuro cuando el nav es sólido y el menú está cerrado */}
          <Link href="/" className="nav-logo flex items-center no-underline">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-white.webp"
              alt="Websy"
              className={`h-10 w-auto object-contain transition-opacity duration-300 ${
                solid && !menuOpen ? "absolute opacity-0" : "opacity-100"
              }`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-dark.webp"
              alt="Websy"
              className={`h-10 w-auto object-contain transition-opacity duration-300 ${
                solid && !menuOpen ? "opacity-100" : "absolute opacity-0"
              }`}
            />
          </Link>

          {/* Botón hamburguesa */}
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center rounded-lg p-1.5 transition-opacity hover:opacity-70"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/menu-burguer-pc-mobil.svg"
              alt=""
              className={`h-8 w-8 object-contain transition-all duration-300 ${
                solid && !menuOpen ? "brightness-0" : "brightness-100"
              }`}
            />
          </button>

        </div>
      </nav>

      {/* Menú fullscreen */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
