"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Truck,
  Users,
  CalendarDays,
  Images,
  Handshake,
  ExternalLink,
  Factory,
  LogOut
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const navSections = [
    {
      title: "Ringkasan & Operasional",
      items: [
        { label: "Dashboard Utama", href: "/admin", icon: LayoutDashboard },
        { label: "Pesanan & Distribusi", href: "/admin/pesanan", icon: Truck, badge: "14 Baru", badgeColor: "bg-[#f6c900] text-[#181d17]" },
        { label: "Inventori & Batch", href: "/admin/batch", icon: Factory },
      ]
    },
    {
      title: "Katalog & Penjualan",
      items: [
        { label: "Daftar Produk", href: "/admin/produk", icon: Package },
        { label: "Tambah Produk Baru", href: "/admin/produk/tambah", icon: PlusCircle, highlight: true },
        { label: "Jaringan Reseller", href: "/admin/reseller", icon: Users, badge: "34 Kota", badgeColor: "bg-gray-100 text-gray-700" },
      ]
    },
    {
      title: "Layanan & Konten Publik",
      items: [
        { label: "Reservasi Wisata", href: "/admin/wisata", icon: CalendarDays, badge: "5 Pending", badgeColor: "bg-red-100 text-red-700" },
        { label: "Galeri & Media", href: "/admin/galeri", icon: Images },
        { label: "Permohonan Kemitraan", href: "/admin/kemitraan", icon: Handshake },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white z-50 flex flex-col border-r border-[#e2e8dd] shadow-sm transition-transform duration-300 ease-in-out font-sans ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-[#e2e8dd] bg-[#f8faf5]">
          <Link href="/admin" className="flex items-center gap-2.5 group">
            <img
              src="/logo.webp"
              alt="Logo Carica Gemilang"
              className="w-8 h-8 rounded-full object-contain shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[#2e6a41] text-[15px] leading-tight">Carica Gemilang</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Admin & CMS Portal</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <span className="material-symbols-outlined notranslate text-[18px]" translate="no">close</span>
          </button>
        </div>

        {/* Navigation List with more compact & sleek fonts */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-5">
          {navSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-0.5">
              <span className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                {section.title}
              </span>
              {section.items.map((item, iIdx) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={iIdx}
                    href={item.href}
                    onClick={() => onClose()}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                      isActive
                        ? "bg-[#e8f5e9] text-[#2e6a41] shadow-xs font-bold"
                        : item.highlight
                        ? "bg-[#fef9e7] text-[#725c00] hover:bg-[#fdf3ce] font-semibold"
                        : "text-gray-600 hover:bg-[#f1f5eb] hover:text-[#181d17]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#2e6a41]" : "text-gray-400"}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3.5 border-t border-[#e2e8dd] bg-[#f8faf5] flex flex-col gap-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold border border-[#e2e8dd] transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined notranslate text-[16px]" translate="no">arrow_back</span>
              <span>Website Publik</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </Link>

          <button
            type="button"
            onClick={() => {
              if (confirm("Apakah Anda yakin ingin keluar dari panel admin?")) {
                window.location.href = "/";
              }
            }}
            className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-red-50/70 hover:bg-red-100/80 text-red-700 text-xs font-semibold border border-red-200/60 transition-colors"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4 text-red-600" />
              <span>Keluar (Logout)</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Exit</span>
          </button>
        </div>
      </aside>
    </>
  );
}
