"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle, Clock, MapPin, Users, Ticket } from "lucide-react";

export default function AdminWisataPage() {
  const [bookings] = useState([
    {
      id: "EDK-202405-01",
      institution: "SMP Negeri 1 Wonosobo",
      package: "Paket Kebun Carica & Cupping Test",
      participants: 80,
      date: "22 Mei 2024 (Sesi Pagi 09:00 WIB)",
      status: "Menunggu Konfirmasi",
      total: 6400000
    },
    {
      id: "EDK-202405-02",
      institution: "Dharma Wanita Semarang",
      package: "Tur Gastronomi & Belanja Oleh-Oleh",
      participants: 45,
      date: "28 Mei 2024 (Sesi Siang 13:30 WIB)",
      status: "DP Terverifikasi",
      total: 5850000
    },
    {
      id: "EDK-202405-03",
      institution: "SMA Kolese De Britto Yogyakarta",
      package: "Edukasi Industri Retort CPPOB & Praktek Kupas",
      participants: 120,
      date: "02 Juni 2024 (Sesi Pagi 08:30 WIB)",
      status: "Jadwal Disetujui",
      total: 10800000
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e2e8dd] shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Reservasi Eduwisata Pabrik</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">5 Antrean Baru</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Validasi jadwal kunjungan sekolah, universitas, dan rombongan wisata ke Sentra Kejajar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div key={b.id} className="bg-white p-5 rounded-2xl border border-[#e2e8dd] shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">{b.id}</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  b.status === "DP Terverifikasi" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"
                }`}>
                  {b.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mt-1">{b.institution}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{b.package}</p>
            </div>

            <div className="space-y-2 text-xs text-gray-600 bg-[#f8faf5] p-3 rounded-xl border border-[#e2e8dd]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#2e6a41]" />
                <span className="font-semibold">{b.participants} Siswa / Peserta</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#2e6a41]" />
                <span>{b.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button className="flex-1 py-2 rounded-xl bg-[#2e6a41] hover:bg-[#265b37] text-white text-xs font-bold transition-colors">
                Terima Jadwal
              </button>
              <button className="px-3.5 py-2 rounded-xl border border-[#e2e8dd] hover:bg-gray-100 text-gray-700 text-xs font-semibold transition-colors">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

