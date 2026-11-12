"use client";

import { useState } from "react";
import { Truck, Search, CheckCircle2, Clock, MapPin, Phone, FileText } from "lucide-react";

export default function AdminPesananPage() {
  const [orders] = useState([
    {
      id: "#ORD-CG-8821",
      customer: "Pusat Oleh-Oleh Primadona",
      city: "Yogyakarta",
      address: "Jl. Malioboro No. 42",
      items: "50 Karton Jar Kaca 350g",
      total: 18500000,
      status: "Siap Kirim",
      date: "14 Mei 2024, 09:30"
    },
    {
      id: "#ORD-CG-8820",
      customer: "Toko Oleh-Oleh Bu Rudy",
      city: "Surabaya",
      address: "Jl. Dharmahusada 140",
      items: "120 Box Cup Pack (12x120g)",
      total: 24200000,
      status: "QC & Packing",
      date: "14 Mei 2024, 08:15"
    },
    {
      id: "#ORD-CG-8819",
      customer: "Koperasi Pegawai Bappeda Jateng",
      city: "Semarang",
      address: "Jl. Pemuda No. 127",
      items: "45 Paket VIP Hampers Carica",
      total: 9800000,
      status: "Cold-Chain OTW",
      date: "13 Mei 2024, 16:40"
    },
    {
      id: "#ORD-CG-8818",
      customer: "Gourmet Market Grand Indonesia",
      city: "Jakarta Pusat",
      address: "East Mall LG Floor",
      items: "80 Karton Jar Premium Export",
      total: 31600000,
      status: "Selesai Terkirim",
      date: "13 Mei 2024, 14:10"
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Pesanan & Distribusi Mitra</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#f6c900] text-[#181d17] text-xs font-bold">14 Order Aktif</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Pantau alur logistik cold-chain armada Dieng ke sentra ritel nusantara.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8dd] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#f8faf5] border-b border-[#e2e8dd] text-gray-500 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-6">No. PO & Waktu</th>
                <th className="py-3.5 px-4">Mitra Pemesan & Kota</th>
                <th className="py-3.5 px-4">Rincian Muatan</th>
                <th className="py-3.5 px-4">Total Tagihan</th>
                <th className="py-3.5 px-4">Status Pengiriman</th>
                <th className="py-3.5 px-6 text-right">Surat Jalan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8dd]/60 text-gray-700">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-[#f8faf5]/80 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="font-bold text-[#2e6a41] text-sm block">{o.id}</span>
                    <span className="text-[11px] text-gray-400">{o.date}</span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="font-bold text-gray-900 block">{o.customer}</span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {o.city}
                    </span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded bg-[#f8faf5] border border-[#e2e8dd] font-medium text-gray-700">
                      {o.items}
                    </span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap font-bold text-gray-900">
                    Rp {o.total.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#e8f5e9] text-[#2e6a41] border border-[#2e6a41]/20">
                      {o.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <button className="px-3 py-1.5 rounded-lg border border-[#e2e8dd] hover:bg-gray-100 font-semibold text-gray-700 transition-colors inline-flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Cetak DO</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

