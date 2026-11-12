"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit3,
  Trash2,
  Package,
  Layers,
  ArrowUpDown,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  price: number;
  stock: number;
  status: "Tersedia" | "Hampir Habis" | "Kosong";
  lot: string;
}

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const [products] = useState<Product[]>([
    {
      id: "PROD-001",
      name: "Carica Dieng Premium Jar Kaca",
      category: "Jar Kaca",
      size: "350 gram",
      price: 28000,
      stock: 1840,
      status: "Tersedia",
      lot: "LOT-CG-0514-A"
    },
    {
      id: "PROD-002",
      name: "Carica Cup Praktis Family Pack",
      category: "Cup Plastik",
      size: "12 x 120 gram",
      price: 45000,
      stock: 420,
      status: "Hampir Habis",
      lot: "LOT-CG-0514-B"
    },
    {
      id: "PROD-003",
      name: "Sirup Sari Buah Carica Botol",
      category: "Sirup Konsentrat",
      size: "500 ml",
      price: 32000,
      stock: 950,
      status: "Tersedia",
      lot: "LOT-CG-0512-C"
    },
    {
      id: "PROD-004",
      name: "Carica Dieng Gift Box Exclusive",
      category: "Hampers & Gift",
      size: "Paket 3 Jar Batik",
      price: 95000,
      stock: 160,
      status: "Tersedia",
      lot: "LOT-CG-0510-D"
    },
    {
      id: "PROD-005",
      name: "Manisan Kering Buah Carica",
      category: "Camilan Kering",
      size: "200 gram",
      price: 25000,
      stock: 35,
      status: "Hampir Habis",
      lot: "LOT-CG-0508-E"
    }
  ]);

  const categories = ["Semua", "Jar Kaca", "Cup Plastik", "Sirup Konsentrat", "Hampers & Gift", "Camilan Kering"];

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "Semua" || p.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Page Title & Top Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Katalog Produk</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e6a41] text-xs font-bold">
              {products.length} SKU Aktif
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Kelola master data produk olahan carica, harga eceran/grosir, dan status ketersediaan inventori.
          </p>
        </div>
        <Link
          href="/admin/produk/tambah"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2e6a41] hover:bg-[#265b37] text-white text-sm font-bold shadow-xs transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Produk Baru</span>
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Cari nama produk, SKU, nomor lot..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#2e6a41] text-white"
                    : "bg-[#f8faf5] text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Table Card */}
      <div className="bg-white rounded-2xl border border-[#e2e8dd] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#f8faf5] border-b border-[#e2e8dd] text-gray-500 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-6">Produk & SKU</th>
                <th className="py-3.5 px-4">Kategori & Ukuran</th>
                <th className="py-3.5 px-4">Harga Pabrik</th>
                <th className="py-3.5 px-4">Sisa Stok</th>
                <th className="py-3.5 px-4">Batch Produksi</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8dd]/60 text-gray-700">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-[#f8faf5]/80 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="font-bold text-gray-900 text-sm">{product.name}</div>
                    <span className="text-[11px] font-mono text-gray-400">{product.id}</span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-800">{product.category}</span>
                    <span className="text-gray-400 block text-[11px]">{product.size}</span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap font-bold text-gray-900">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="font-bold text-[#2e6a41]">{product.stock.toLocaleString("id-ID")}</span>
                    <span className="text-gray-400 text-[11px] ml-1">pcs</span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap font-mono text-gray-500 text-[11px]">
                    {product.lot}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        product.status === "Tersedia"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          product.status === "Tersedia" ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      />
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        title="Lihat Detail"
                        className="p-1.5 rounded-lg border border-[#e2e8dd] hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        title="Ubah Produk"
                        className="p-1.5 rounded-lg border border-[#e2e8dd] hover:bg-[#e8f5e9] text-[#2e6a41] transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        title="Hapus"
                        className="p-1.5 rounded-lg border border-[#e2e8dd] hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-[#f8faf5] border-t border-[#e2e8dd] flex items-center justify-between text-xs text-gray-500">
          <span>Menampilkan {filtered.length} dari {products.length} data produk carica</span>
          <span className="font-semibold text-gray-700">Tersinkronisasi dengan Standar CPPOB Grade A</span>
        </div>
      </div>
    </div>
  );
}

