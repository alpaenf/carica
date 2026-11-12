import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2d322c] text-[#eef2e9] pt-16 pb-10 mt-auto">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5 py-1">
              <span className="w-9 h-9 rounded-xl bg-[#f6c900] flex items-center justify-center text-[#2e6a41] shadow-xs shrink-0">
                <span className="material-symbols-outlined text-[22px]">eco</span>
              </span>
              <span className="flex flex-col text-left">
                <span className="font-bold text-white text-[17px] tracking-tight leading-tight flex items-center gap-1">
                  <span>CARICA</span>
                  <span className="text-[#f6c900] font-extrabold">GEMILANG</span>
                </span>
                <span className="text-[9px] font-bold text-emerald-200/80 tracking-[0.16em] uppercase leading-none">
                  DIENG HIGHLAND WONOSOBO
                </span>
              </span>
            </Link>
            <p className="text-sm text-[#dfe4db] max-w-sm leading-relaxed">
              Kelezatan Carica, Kekayaan Alam Asli Dataran Tinggi Dieng Wonosobo. Menghadirkan olahan buah carica berkualitas premium dan edukasi agrowisata berkelanjutan.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-sm font-bold text-[#ffe081] tracking-wide uppercase">Navigasi Cepat</span>
            <ul className="flex flex-col gap-2 text-sm text-[#dfe4db]">
              <li><Link href="/" className="hover:text-[#ffe081] transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-[#ffe081] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/produk" className="hover:text-[#ffe081] transition-colors">Katalog Produk</Link></li>
              <li><Link href="/wisata-edukasi" className="hover:text-[#ffe081] transition-colors">Wisata Edukasi</Link></li>
              <li><Link href="/kemitraan" className="hover:text-[#ffe081] transition-colors">Kemitraan & Reseller</Link></li>
              <li><Link href="/cari-reseller" className="hover:text-[#ffe081] transition-colors">Cari Reseller & Gerai Resmi</Link></li>
              <li><Link href="/galeri" className="hover:text-[#ffe081] transition-colors">Galeri Dokumentasi</Link></li>
            </ul>
          </div>

          {/* Wisata Edukasi */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-sm font-bold text-[#ffe081] tracking-wide uppercase">Wisata & Edukasi</span>
            <ul className="flex flex-col gap-2 text-sm text-[#dfe4db]">
              <li><Link href="/wisata-edukasi#jadwal" className="hover:text-[#ffe081] transition-colors">Jadwal Kunjungan</Link></li>
              <li><Link href="/wisata-edukasi#reservasi" className="hover:text-[#ffe081] transition-colors">Reservasi Rombongan</Link></li>
              <li><Link href="/wisata-edukasi#paket" className="hover:text-[#ffe081] transition-colors">Edukasi Pengolahan</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-[#ffe081] transition-colors">Panduan Lokasi Dieng</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-sm font-bold text-[#ffe081] tracking-wide uppercase">Kontak & Alamat</span>
            <div className="flex flex-col gap-2.5 text-sm text-[#dfe4db]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#ffe081] mt-0.5">location_on</span>
                <span>Jl. Raya Dieng KM 14, Kejajar, Wonosobo, Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#ffe081]">call</span>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe081] transition-colors">+62 812-3456-7890</a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#ffe081]">mail</span>
                <a href="mailto:halo@caricagemilang.id" className="hover:text-[#ffe081] transition-colors">halo@caricagemilang.id</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dfe4db]/80">
          <p>© 2026 Carica Gemilang. Seluruh Hak Cipta Dilindungi. Cita Rasa Asli Dataran Tinggi Dieng.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#ffe081] transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-[#ffe081] transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

