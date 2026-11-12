"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, User } from "lucide-react";

function NavContent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Produk", href: "/produk" },
    { label: "Kemitraan", href: "/kemitraan" },
    { label: "Galeri", href: "/galeri" },
    { label: "Wisata Edukasi", href: "/wisata-edukasi" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f6fbf1]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-black/5">
      <div className="h-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <img
            src="/logo.webp"
            alt="Logo Carica Gemilang"
            className="w-10 h-10 rounded-full object-contain shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-[#181d17] text-[18px] tracking-tight leading-tight flex items-center gap-1">
              <span>CARICA</span>
              <span className="text-[#e29d00]">GEMILANG</span>
            </span>
            <span className="text-[9px] font-bold text-[#7f765f] tracking-[0.16em] uppercase leading-none">
              DIENG HIGHLAND WONOSOBO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#2e6a41] font-bold border-b-2 border-[#2e6a41]"
                    : "text-[#4d4632] hover:text-[#181d17]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f6c900] text-[#00210d] font-bold text-sm shadow-sm hover:bg-[#eec200] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </a>
          <Link
            href="/admin"
            title="Panel Admin & CMS"
            className="w-9 h-9 rounded-full bg-[#725c00] flex items-center justify-center text-white hover:opacity-90 transition-all shadow-xs"
          >
            <User className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-xl text-[#181d17] hover:bg-black/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#f6fbf1]/95 backdrop-blur-xl border-t border-black/5 px-6 py-4 shadow-lg transition-all animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-base font-semibold ${
                    isActive ? "text-[#2e6a41] font-bold" : "text-[#4d4632]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/cari-reseller"
              onClick={() => setIsOpen(false)}
              className="py-2 text-base font-semibold text-[#4d4632]"
            >
              Cari Reseller & Toko Resmi
            </Link>
            <div className="pt-3 border-t border-black/5">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#f6c900] text-[#00210d] font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Kami (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-20 bg-[#f6fbf1]/90" />}>
      <NavContent />
    </Suspense>
  );
}
