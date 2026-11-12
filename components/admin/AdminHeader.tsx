"use client";

import Link from "next/link";
import { Search, Bell, Menu, PlusCircle, Globe, Shield } from "lucide-react";

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  title?: string;
  subtitle?: string;
}

export default function AdminHeader({ onToggleSidebar, title, subtitle }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 h-20 bg-white/95 backdrop-blur-xl border-b border-[#e2e8dd] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
      {/* Mobile Toggle & Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          onClick={onToggleSidebar}
          type="button"
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Buka Menu Sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="w-full flex items-center bg-[#f8faf5] rounded-xl px-3.5 py-2 border border-[#e2e8dd] focus-within:ring-2 focus-within:ring-[#2e6a41]/20 transition-all">
          <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
          <input
            className="w-full bg-transparent border-0 text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            placeholder="Cari data, produk, nomor batch, atau transaksi..."
            type="text"
          />
        </div>
      </div>

      {/* Quick Controls */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f5e9] text-[#2e6a41] text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#2e6a41] animate-pulse"></span>
          <span>Sistem Operasional: Normal</span>
        </div>

        <Link
          href="/admin/produk/tambah"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f6c900] hover:bg-[#eec200] text-[#181d17] text-xs sm:text-sm font-bold shadow-xs transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Tambah Produk</span>
        </Link>

        <button className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors" title="Notifikasi">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

        {/* User Admin Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:flex flex-col">
            <span className="text-xs font-bold text-gray-900 leading-tight">Bagus Wicaksono</span>
            <span className="text-[11px] text-gray-500">Admin Operasional</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#725c00] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            BW
          </div>
        </div>
      </div>
    </header>
  );
}

