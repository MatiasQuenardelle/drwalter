"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Reservar Turno
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Reservar Turno
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
