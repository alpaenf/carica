"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Upload,
  Plus,
  Save,
  CheckCircle,
  HelpCircle,
  Info,
  ShieldCheck,
  Package
} from "lucide-react";

export default function TambahProdukPage() {
  const [formData, setFormData] = useState({
    name: "",
    sku: "CG-PRD-821",
    category: "Jar Kaca",
    size: "",
    priceRetail: "",
    priceReseller: "",
    initialStock: "",
    minOrderReseller: "1",
    lotNumber: "LOT-CG-2405",
    brixLevel: "15.5",
    expiredMonths: "24",
    description: "",
    ingredients: "Buah Carica Dieng Pilihan, Air Steril Mata Air Kejajar, Gula Tebu Alami.",
    isPublished: true,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header Back & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/produk"
            className="p-2 rounded-xl border border-[#e2e8dd] hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Tambah Produk Baru
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Input data komoditas olahan carica, spesifikasi sterilisasi retort, dan penetapan harga.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/produk"
            className="px-4 py-2.5 rounded-xl border border-[#e2e8dd] hover:bg-gray-100 text-gray-700 text-sm font-semibold transition-colors"
          >
            Batal
          </Link>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2e6a41] hover:bg-[#265b37] text-white text-sm font-bold shadow-xs transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Simpan Produk</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            Mockup berhasil disimpan! (Data siap dikoneksikan ke database API backend).
          </span>
        </div>
      )}

      {/* Main Form Formats */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Essential Product Data */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Card 1: Informasi Pokok */}
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-4">
            <h2 className="text-base font-bold text-gray-900 border-b border-[#e2e8dd] pb-3 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#2e6a41]" />
              <span>Informasi Pokok Produk</span>
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Nama Produk Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Carica Dieng Premium Jar Kaca 350g"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Kategori Kemasan
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20 font-medium"
                  >
                    <option value="Jar Kaca">Jar Kaca Steril (Premium)</option>
                    <option value="Cup Plastik">Cup Pack Praktis</option>
                    <option value="Sirup Konsentrat">Sirup Sari Buah Carica</option>
                    <option value="Hampers & Gift">Hampers & Souvenir Box</option>
                    <option value="Camilan Kering">Manisan Kering Carica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Berat Bersih / Isi Kemasan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 350 gram / 12 x 120 gram"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Deskripsi Narasi Produk
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan keistimewaan rasa, terroir buah pegunungan, tekstur, dan saran penyajian dingin..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Komposisi Bahan (Standardisasi BPOM)
                </label>
                <input
                  type="text"
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Penetapan Harga & Inventori */}
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-4">
            <h2 className="text-base font-bold text-gray-900 border-b border-[#e2e8dd] pb-3 flex items-center gap-2">
              <span className="material-symbols-outlined notranslate text-[#2e6a41] text-[20px]" translate="no">payments</span>
              <span>Penetapan Harga & Inventori</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Harga Eceran Tertinggi (HET)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2.5 text-xs font-bold text-gray-500">Rp</span>
                  <input
                    type="number"
                    placeholder="28.000"
                    value={formData.priceRetail}
                    onChange={(e) => setFormData({ ...formData, priceRetail: e.target.value })}
                    className="w-full pl-11 pr-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Harga Grosir / Mitra Reseller
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2.5 text-xs font-bold text-gray-500">Rp</span>
                  <input
                    type="number"
                    placeholder="22.500"
                    value={formData.priceReseller}
                    onChange={(e) => setFormData({ ...formData, priceReseller: e.target.value })}
                    className="w-full pl-11 pr-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Stok Siap Distribusi (Karton/Pcs)
                </label>
                <input
                  type="number"
                  placeholder="500"
                  value={formData.initialStock}
                  onChange={(e) => setFormData({ ...formData, initialStock: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                  Min. Order Reseller (Karton)
                </label>
                <input
                  type="number"
                  value={formData.minOrderReseller}
                  onChange={(e) => setFormData({ ...formData, minOrderReseller: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#f8faf5] border border-[#e2e8dd] rounded-xl text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#2e6a41]/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Metadata & Batch Specifications */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Foto Produk Upload Box */}
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-gray-900">Foto Kemasan Produk</h3>
            <div className="border-2 border-dashed border-[#e2e8dd] hover:border-[#2e6a41] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[#f8faf5]">
              <div className="w-12 h-12 rounded-full bg-[#e8f5e9] text-[#2e6a41] flex items-center justify-center mx-auto mb-2">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-800">Unggah Gambar Resolusi Tinggi</p>
              <p className="text-[11px] text-gray-400 mt-1">PNG, JPG, WEBP hingga 5MB (Rasio 1:1 disarankan)</p>
            </div>
          </div>

          {/* Standard Mutu Laboratorium CPPOB */}
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#e2e8dd] pb-3">
              <ShieldCheck className="w-5 h-5 text-[#2e6a41]" />
              <h3 className="text-sm font-bold text-gray-900">Audit & Mutu Retort</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-500 font-semibold mb-1">Nomor Lot Produksi</label>
                <input
                  type="text"
                  value={formData.lotNumber}
                  onChange={(e) => setFormData({ ...formData, lotNumber: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8faf5] border border-[#e2e8dd] rounded-lg font-mono text-xs text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-500 font-semibold mb-1">Kadar Kemanisan Brix Terstandar</label>
                <input
                  type="text"
                  value={formData.brixLevel + "° Brix"}
                  onChange={(e) => setFormData({ ...formData, brixLevel: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8faf5] border border-[#e2e8dd] rounded-lg text-xs font-bold text-[#2e6a41]"
                />
              </div>

              <div>
                <label className="block text-gray-500 font-semibold mb-1">Masa Simpan (Kedaluwarsa)</label>
                <input
                  type="text"
                  value={formData.expiredMonths + " Bulan (Sterilisasi Retort)"}
                  className="w-full px-3 py-2 bg-[#f8faf5] border border-[#e2e8dd] rounded-lg text-xs font-medium text-gray-800"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Status Publikasi */}
          <div className="bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-gray-900 block">Tampilkan di Web Publik</span>
                <span className="text-[11px] text-gray-400">Langsung muncul di katalog frontend</span>
              </div>
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="w-5 h-5 text-[#2e6a41] rounded focus:ring-[#2e6a41]"
              />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}

