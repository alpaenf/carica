export default function AdminDashboardPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `

      <!-- Welcome Banner -->
      <div class="relative overflow-hidden bg-white rounded-2xl border border-[#e2e8dd] p-6 sm:p-8 shadow-xs">
        <div class="absolute -right-16 -top-20 w-80 h-80 rounded-full bg-[#f6c900]/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-12 -bottom-20 w-72 h-72 rounded-full bg-[#b1f2be]/25 blur-2xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div class="space-y-3">
            <div class="flex flex-wrap items-center gap-2 text-[12px] text-gray-500 font-semibold">
              <span class="inline-flex items-center gap-1 text-[#2e6a41] bg-[#e8f5e9] px-2.5 py-0.5 rounded-full font-bold">
                <span class="material-symbols-outlined text-[15px] notranslate" translate="no">location_on</span>
                Sentra Pengolahan Kejajar (2.093 mdpl)
              </span>
              <span>•</span>
              <span>Selasa, 14 Mei 2024</span>
            </div>

            <div>
              <h1 class="text-[26px] sm:text-[30px] font-extrabold text-[#181d17] tracking-tight">
                Selamat Datang, <span class="text-[#2e6a41]">Pak Bagus Wicaksono</span>
              </h1>
              <p class="text-[14px] text-gray-500 mt-1 max-w-2xl leading-relaxed">
                Ringkasan kendali mutu higienis, distribusi pasar nusantara, dan pemrosesan komoditas Carica Dieng hari ini.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2 pt-1 text-[12px]">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6c900]/20 text-gray-800 font-bold border border-[#f6c900]/40">
                <span class="w-2 h-2 rounded-full bg-[#725c00] animate-ping"></span>
                <span>Batch Aktif: LOT-20240514-A (Retort 121°C)</span>
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2e6a41] font-bold border border-[#c8e6c9]">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">verified</span> CPPOB Grade A
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">thermostat</span> Cold Storage: 4.2°C
              </span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <button id="download-report-btn" class="flex-1 xl:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f1f5eb] hover:bg-[#e2edd7] text-[#181d17] font-bold text-[13px] border border-[#d5e0cb] transition-colors shadow-xs">
              <span class="material-symbols-outlined text-[18px] notranslate" translate="no">file_download</span>
              <span>Unduh Rekap Bulanan</span>
            </button>
            <button id="new-batch-btn" class="flex-1 xl:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f6c900] hover:bg-[#eec200] text-[#181d17] font-bold text-[13px] transition-all shadow-xs">
              <span class="material-symbols-outlined text-[18px] notranslate" translate="no">add_circle</span>
              <span>+ Catat Batch Baru</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 4 KPI Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <!-- KPI 1 -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-5 shadow-xs flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[12px] font-bold uppercase tracking-wider text-gray-400">Total Penjualan Mei</span>
            <div class="w-10 h-10 rounded-xl bg-[#e8f5e9] text-[#2e6a41] flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px] notranslate" translate="no">payments</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-[24px] font-bold text-[#181d17] tracking-tight">Rp 24.850.000</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="inline-flex items-center gap-0.5 text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">arrow_upward</span> +14.2%
              </span>
              <span class="text-[12px] text-gray-400">vs bulan lalu</span>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-100 text-[12px] text-gray-500 flex justify-between">
            <span>Target Bulanan</span>
            <span class="font-bold text-[#2e6a41]">71% Tercapai</span>
          </div>
        </div>

        <!-- KPI 2 -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-5 shadow-xs flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[12px] font-bold uppercase tracking-wider text-gray-400">Volume Produksi</span>
            <div class="w-10 h-10 rounded-xl bg-[#f6c900]/20 text-[#725c00] flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px] notranslate" translate="no">inventory_2</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-[24px] font-bold text-[#181d17] tracking-tight">3.420 Karton</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="inline-flex items-center gap-0.5 text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">check_circle</span> 92% Kapasitas
              </span>
              <span class="text-[12px] text-gray-400">18.250 Cup &amp; Jar</span>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-100 text-[12px] text-gray-500 flex justify-between">
            <span>Sterilisasi Hari Ini</span>
            <span class="font-bold text-[#2e6a41]">480 Karton</span>
          </div>
        </div>

        <!-- KPI 3 -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-5 shadow-xs flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[12px] font-bold uppercase tracking-wider text-gray-400">Jaringan Reseller</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px] notranslate" translate="no">storefront</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-[24px] font-bold text-[#181d17] tracking-tight">184 Mitra</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="inline-flex items-center gap-0.5 text-[12px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">add</span> +6 Bulan Ini
              </span>
              <span class="text-[12px] text-gray-400">di 34 Kota</span>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-100 text-[12px] text-gray-500 flex justify-between">
            <span>Repeat Order Aktif</span>
            <span class="font-bold text-[#2e6a41]">88% Mitra</span>
          </div>
        </div>

        <!-- KPI 4 -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-5 shadow-xs flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[12px] font-bold uppercase tracking-wider text-gray-400">Wisata Edukasi</span>
            <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px] notranslate" translate="no">groups</span>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-[24px] font-bold text-[#181d17] tracking-tight">1.280 Wisatawan</div>
            <div class="flex items-center gap-2 mt-1">
              <span class="inline-flex items-center gap-0.5 text-[12px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[14px] notranslate" translate="no">event_available</span> 8 Rombongan
              </span>
              <span class="text-[12px] text-gray-400">minggu ini</span>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-100 text-[12px] text-gray-500 flex justify-between">
            <span>Kepuasan Peserta</span>
            <span class="font-bold text-[#2e6a41]">4.9 / 5.0 ★</span>
          </div>
        </div>
      </div>

      <!-- Section: Tren Grafik Mingguan (Full Width) -->
      <div id="grafik" class="bg-white rounded-2xl border border-[#e2e8dd] p-6 sm:p-7 shadow-xs space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2.5">
              <h2 class="text-[18px] font-bold text-[#181d17]">Tren Distribusi &amp; Penjualan Mingguan</h2>
              <span class="px-2.5 py-0.5 rounded-full bg-[#f1f5eb] text-[#2e6a41] text-[11px] font-bold">Mei 2024</span>
            </div>
            <p class="text-[13px] text-gray-500 mt-0.5">Monitoring pergerakan karton keluar dari Sentra Pengolahan Kejajar</p>
          </div>

          <!-- Channel Filter Tabs -->
          <div class="inline-flex p-1 bg-[#f1f5eb] rounded-xl gap-1 border border-[#e2e8dd]">
            <button class="px-3.5 py-1.5 rounded-lg text-[12px] font-bold bg-white text-[#181d17] shadow-xs transition-all" data-tab="all">Semua Jalur</button>
            <button class="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-gray-500 hover:text-gray-800 transition-all" data-tab="b2b">Reseller B2B</button>
            <button class="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-gray-500 hover:text-gray-800 transition-all" data-tab="store">Offline Kejajar</button>
            <button class="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-gray-500 hover:text-gray-800 transition-all" data-tab="gift">Merchandise</button>
          </div>
        </div>

        <!-- Bar Chart Container -->
        <div class="bg-[#f8faf5] rounded-xl p-6 border border-[#e2e8dd] space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 text-[12px] text-gray-500">
            <div class="flex flex-wrap items-center gap-4">
              <span class="inline-flex items-center gap-2">
                <span class="w-3 h-3 rounded-xs bg-[#2e6a41]"></span> Volume Pengiriman Aktual (Karton)
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="w-3 h-3 rounded-xs bg-[#f6c900]"></span> Target Panen Harian (Retort)
              </span>
            </div>
            <span class="px-3 py-1 rounded-md bg-[#e8f5e9] text-[#2e6a41] font-bold inline-flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] notranslate" translate="no">insights</span> Puncak Distribusi: Kamis &amp; Sabtu
            </span>
          </div>

          <!-- Bars -->
          <div class="relative w-full h-56 flex items-end justify-between gap-3 sm:gap-6 pt-6 pb-2 px-2 border-b border-gray-200">
            <!-- Senin -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">185</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 52%;" title="Aktual: 185 Karton"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 60%;" title="Target: 220 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Sen</span>
            </div>

            <!-- Selasa (Today) -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-[#2e6a41]">220</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm ring-2 ring-[#f6c900]" style="height: 68%;" title="Aktual: 220 Karton (Hari ini)"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 60%;" title="Target: 220 Karton"></div>
              </div>
              <span class="text-[12px] font-extrabold text-[#2e6a41]">Sel (Hari Ini)</span>
            </div>

            <!-- Rabu -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">240</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 72%;" title="Aktual: 240 Karton"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 65%;" title="Target: 230 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Rab</span>
            </div>

            <!-- Kamis (Peak 1) -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">310</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 94%;" title="Aktual: 310 Karton (Panen Puncak)"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 85%;" title="Target: 290 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Kam</span>
            </div>

            <!-- Jumat -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">215</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 65%;" title="Aktual: 215 Karton"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 60%;" title="Target: 210 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Jum</span>
            </div>

            <!-- Sabtu (Peak 2) -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">345</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 100%;" title="Aktual: 345 Karton (Puncak Weekend)"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 90%;" title="Target: 320 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Sab</span>
            </div>

            <!-- Minggu -->
            <div class="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span class="text-[11px] font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">190</span>
              <div class="w-full max-w-[42px] flex items-end gap-1 h-full">
                <div class="w-1/2 bg-[#2e6a41] rounded-t-sm hover:opacity-90 transition-all" style="height: 58%;" title="Aktual: 190 Karton"></div>
                <div class="w-1/2 bg-[#f6c900] rounded-t-sm" style="height: 55%;" title="Target: 180 Karton"></div>
              </div>
              <span class="text-[12px] font-bold text-gray-600 group-hover:text-[#2e6a41]">Min</span>
            </div>
          </div>
        </div>

        <!-- Proportions -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd]">
            <span class="text-[11px] text-gray-400 font-semibold uppercase">Jar Kaca Premium</span>
            <div class="text-[16px] font-bold text-[#181d17] mt-0.5">48% Distribusi</div>
            <span class="text-[11px] text-emerald-600 font-semibold">Primadona Ekspor &amp; Souvenir</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd]">
            <span class="text-[11px] text-gray-400 font-semibold uppercase">Cup Pack Praktis</span>
            <div class="text-[16px] font-bold text-[#181d17] mt-0.5">34% Distribusi</div>
            <span class="text-[11px] text-gray-500 font-medium">Harian &amp; Swalayan</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd]">
            <span class="text-[11px] text-gray-400 font-semibold uppercase">Sirup &amp; Manisan</span>
            <div class="text-[16px] font-bold text-[#181d17] mt-0.5">18% Distribusi</div>
            <span class="text-[11px] text-gray-500 font-medium">Kafe &amp; Resto Mitra</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd]">
            <span class="text-[11px] text-gray-400 font-semibold uppercase">Tingkat Ketepatan</span>
            <div class="text-[16px] font-bold text-[#2e6a41] mt-0.5">99.2% On-Time</div>
            <span class="text-[11px] text-emerald-600 font-semibold">Cold-Chain Terpadu</span>
          </div>
        </div>
      </div>

      <!-- Section: Real-Time Orders & Delivery Table (Full Width) -->
      <div id="pesanan" class="bg-white rounded-2xl border border-[#e2e8dd] p-6 sm:p-7 shadow-xs space-y-5 scroll-mt-24">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2.5">
              <h2 class="text-[18px] font-bold text-[#181d17]">Daftar Distribusi Pesanan Terbaru</h2>
              <span class="px-2.5 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e6a41] text-[11px] font-bold">14 Live Orders</span>
            </div>
            <p class="text-[13px] text-gray-500 mt-0.5">Pengiriman armada langsung dari Pabrik Kejajar ke mitra gerai &amp; reseller</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[12px] text-gray-400">Status Filter:</span>
            <span class="px-2.5 py-1 rounded-md bg-[#f1f5eb] text-[#2e6a41] font-bold text-[12px]">Semua Status</span>
          </div>
        </div>

        <!-- Table Responsive Container (whitespace-nowrap prevents broken wraps) -->
        <div class="overflow-x-auto rounded-xl border border-[#e2e8dd]">
          <table id="tabel-pesanan-body" class="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr class="bg-[#f8faf5] text-gray-500 text-[12px] font-bold uppercase tracking-wider border-b border-[#e2e8dd]">
                <th class="py-3.5 px-5 whitespace-nowrap">No. Pesanan &amp; Waktu</th>
                <th class="py-3.5 px-5 whitespace-nowrap">Pemesan / Mitra Toko</th>
                <th class="py-3.5 px-5 whitespace-nowrap">Detail Produk</th>
                <th class="py-3.5 px-5 whitespace-nowrap">Nominal</th>
                <th class="py-3.5 px-5 whitespace-nowrap">Status Pengiriman</th>
                <th class="py-3.5 px-5 whitespace-nowrap text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-[13px] text-gray-800">
              <!-- Row 1 -->
              <tr class="hover:bg-[#fbfcf9] transition-colors">
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#2e6a41]">#ORD-CG-8821</div>
                  <div class="text-[11px] text-gray-400">14 Mei 2024, 09:30 WIB</div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#181d17]">Pusat Oleh-Oleh Primadona</div>
                  <div class="text-[11px] text-gray-400 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[13px] notranslate" translate="no">location_on</span> Jl. Malioboro, Yogyakarta
                  </div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="px-2.5 py-1 rounded-md bg-gray-100 font-semibold text-gray-700">50 Karton Jar Kaca 350g</span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap font-bold text-[#181d17]">
                  Rp 18.500.000
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold border border-emerald-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Siap Kirim
                  </span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap text-right">
                  <button class="px-3 py-1.5 rounded-lg bg-[#f1f5eb] hover:bg-[#e4edd9] text-[#2e6a41] text-[12px] font-bold transition-colors" onclick="alert('Membuka rincian pesanan #ORD-CG-8821')">
                    Detail
                  </button>
                </td>
              </tr>

              <!-- Row 2 -->
              <tr class="hover:bg-[#fbfcf9] transition-colors">
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#2e6a41]">#ORD-CG-8820</div>
                  <div class="text-[11px] text-gray-400">14 Mei 2024, 08:15 WIB</div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#181d17]">Toko Oleh-Oleh Bu Rudy</div>
                  <div class="text-[11px] text-gray-400 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[13px] notranslate" translate="no">location_on</span> Surabaya, Jawa Timur
                  </div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="px-2.5 py-1 rounded-md bg-gray-100 font-semibold text-gray-700">120 Box Cup Pack (12x120g)</span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap font-bold text-[#181d17]">
                  Rp 24.200.000
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[12px] font-bold border border-amber-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span> QC &amp; Packing
                  </span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap text-right">
                  <button class="px-3 py-1.5 rounded-lg bg-[#f1f5eb] hover:bg-[#e4edd9] text-[#2e6a41] text-[12px] font-bold transition-colors" onclick="alert('Membuka rincian pesanan #ORD-CG-8820')">
                    Detail
                  </button>
                </td>
              </tr>

              <!-- Row 3 -->
              <tr class="hover:bg-[#fbfcf9] transition-colors">
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#2e6a41]">#ORD-CG-8819</div>
                  <div class="text-[11px] text-gray-400">13 Mei 2024, 16:40 WIB</div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#181d17]">Koperasi Pegawai Bappeda Jateng</div>
                  <div class="text-[11px] text-gray-400 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[13px] notranslate" translate="no">location_on</span> Semarang, Jawa Tengah
                  </div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="px-2.5 py-1 rounded-md bg-gray-100 font-semibold text-gray-700">45 Paket VIP Hampers</span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap font-bold text-[#181d17]">
                  Rp 9.800.000
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[12px] font-bold border border-blue-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Cold-Chain OTW
                  </span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap text-right">
                  <button class="px-3 py-1.5 rounded-lg bg-[#f1f5eb] hover:bg-[#e4edd9] text-[#2e6a41] text-[12px] font-bold transition-colors" onclick="alert('Membuka rincian pesanan #ORD-CG-8819')">
                    Detail
                  </button>
                </td>
              </tr>

              <!-- Row 4 -->
              <tr class="hover:bg-[#fbfcf9] transition-colors">
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#2e6a41]">#ORD-CG-8818</div>
                  <div class="text-[11px] text-gray-400">13 Mei 2024, 14:10 WIB</div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <div class="font-bold text-[#181d17]">Gourmet Market Grand Indonesia</div>
                  <div class="text-[11px] text-gray-400 flex items-center gap-1">
                    <span class="material-symbols-outlined text-[13px] notranslate" translate="no">location_on</span> Jakarta Pusat, DKI Jakarta
                  </div>
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="px-2.5 py-1 rounded-md bg-gray-100 font-semibold text-gray-700">80 Karton Jar Kaca 350g</span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap font-bold text-[#181d17]">
                  Rp 29.600.000
                </td>
                <td class="py-4 px-5 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold border border-emerald-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Selesai Terkirim
                  </span>
                </td>
                <td class="py-4 px-5 whitespace-nowrap text-right">
                  <button class="px-3 py-1.5 rounded-lg bg-[#f1f5eb] hover:bg-[#e4edd9] text-[#2e6a41] text-[12px] font-bold transition-colors" onclick="alert('Membuka rincian pesanan #ORD-CG-8818')">
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Section: 3 Kartu Operasional (Grid 3 Kolom Seimbang) -->
      <div id="stok-batch" class="grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-mt-24">
        <!-- Card 1: Stok & Batch CPPOB -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div class="flex items-center justify-between border-b border-gray-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#2e6a41] notranslate" translate="no">inventory_2</span>
              <h3 class="text-[16px] font-bold text-[#181d17]">Stok &amp; Batch CPPOB</h3>
            </div>
            <span class="px-2 py-0.5 rounded-md bg-[#e8f5e9] text-[#2e6a41] text-[11px] font-bold">Kejajar Plant</span>
          </div>

          <div class="space-y-3.5 text-[13px]">
            <div>
              <div class="flex justify-between font-semibold text-gray-700">
                <span>Jar Kaca Premium 350g</span>
                <span class="text-[#2e6a41]">840 Karton (84%)</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                <div class="h-full bg-[#2e6a41] rounded-full" style="width: 84%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold text-gray-700">
                <span>Cup Pack 12x120g</span>
                <span class="text-[#2e6a41]">1.250 Box (95%)</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                <div class="h-full bg-[#2e6a41] rounded-full" style="width: 95%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold text-gray-700">
                <span>Sirup Sari Carica 500ml</span>
                <span class="text-amber-600">410 Botol (62%)</span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                <div class="h-full bg-[#f6c900] rounded-full" style="width: 62%;"></div>
              </div>
            </div>

            <div class="p-3 bg-[#f8faf5] rounded-xl border border-[#e2e8dd] text-[12px]">
              <span class="text-gray-400 font-medium">Bahan Baku Buah Segar Kejajar:</span>
              <div class="text-[#181d17] font-bold text-[14px] mt-0.5">2.8 Ton (Kebutuhan 3 Hari)</div>
            </div>
          </div>
        </div>

        <!-- Card 2: Permintaan Eduwisata -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div class="flex items-center justify-between border-b border-gray-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#725c00] notranslate" translate="no">tour</span>
              <h3 class="text-[16px] font-bold text-[#181d17]">Reservasi Edukasi</h3>
            </div>
            <span class="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[11px] font-bold">5 Pending</span>
          </div>

          <div class="space-y-3">
            <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd] space-y-2">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <div class="font-bold text-[13px] text-[#181d17]">SMP Negeri 1 Wonosobo</div>
                  <div class="text-[11px] text-gray-400">Paket Kebun Carica &amp; Cupping Test</div>
                </div>
                <span class="px-2 py-0.5 rounded-md bg-gray-200 text-gray-700 text-[11px] font-bold whitespace-nowrap">80 Siswa</span>
              </div>
              <div class="flex items-center gap-1.5 text-[12px] text-gray-500">
                <span class="material-symbols-outlined text-[15px] text-[#2e6a41] notranslate" translate="no">calendar_today</span>
                <span>22 Mei 2024 (09:00 WIB)</span>
              </div>
              <div class="flex items-center gap-2 pt-1">
                <button class="flex-1 py-1.5 rounded-lg bg-[#2e6a41] text-white font-bold text-[12px] hover:bg-[#1e482b] transition-colors" onclick="alert('Jadwal SMPN 1 Wonosobo disetujui!')">Terima</button>
                <button class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 font-semibold text-[12px] hover:bg-gray-200 transition-colors" onclick="alert('Reschedule jadwal...')">Reschedule</button>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-[#f8faf5] border border-[#e2e8dd] space-y-2">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <div class="font-bold text-[13px] text-[#181d17]">Dharma Wanita Semarang</div>
                  <div class="text-[11px] text-gray-400">Tur Gastronomi &amp; Belanja Oleh-Oleh</div>
                </div>
                <span class="px-2 py-0.5 rounded-md bg-[#e8f5e9] text-[#2e6a41] text-[11px] font-bold whitespace-nowrap">45 Peserta</span>
              </div>
              <div class="flex items-center gap-1.5 text-[12px] text-gray-500">
                <span class="material-symbols-outlined text-[15px] text-[#2e6a41] notranslate" translate="no">calendar_today</span>
                <span>28 Mei 2024 (13:30 WIB)</span>
              </div>
              <div class="flex items-center justify-between pt-1 text-[11px]">
                <span class="text-[#2e6a41] font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] notranslate" translate="no">check_circle</span> DP Terverifikasi
                </span>
                <button class="px-2.5 py-1 rounded-md bg-[#f6c900] text-[#181d17] font-bold hover:bg-[#eec200] transition-colors" onclick="alert('Mencetak tiket...')">Cetak Tiket</button>
              </div>
            </div>
          </div>

          <a href="/admin/wisata" class="w-full py-2 rounded-xl bg-[#f1f5eb] text-[#2e6a41] font-bold text-[12px] hover:bg-[#e4edd9] transition-colors flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] notranslate" translate="no">calendar_month</span>
            <span>Buka Kalender Booking Lengkap</span>
          </a>
        </div>

        <!-- Card 3: Aktivitas Sistem & Log Audit Terkini -->
        <div class="bg-white rounded-2xl border border-[#e2e8dd] p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div class="flex items-center justify-between border-b border-gray-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-gray-500 notranslate" translate="no">history</span>
              <h3 class="text-[16px] font-bold text-[#181d17]">Log Mutu &amp; Audit Terkini</h3>
            </div>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>

          <div class="relative pl-5 space-y-4 text-[12px]">
            <!-- Timeline vertical guide -->
            <div class="absolute left-1.5 top-1 bottom-1 w-0.5 bg-gray-200"></div>

            <!-- Item 1 -->
            <div class="relative space-y-0.5">
              <span class="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-[#2e6a41] ring-4 ring-white"></span>
              <span class="text-gray-400 font-semibold">10:15 WIB • Mutu &amp; Lab</span>
              <p class="text-gray-700 leading-snug">
                QC Lab menyetujui uji Brix <span class="font-bold text-[#2e6a41]">15.5°</span> &amp; higienitas kemasan untuk Batch <span class="font-mono font-bold">LOT-CG-0514</span>.
              </p>
            </div>

            <!-- Item 2 -->
            <div class="relative space-y-0.5">
              <span class="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-[#f6c900] ring-4 ring-white"></span>
              <span class="text-gray-400 font-semibold">08:45 WIB • Toko Baru</span>
              <p class="text-gray-700 leading-snug">
                Verifikasi gerai resmi baru: <span class="font-bold text-gray-900">Harmoni Gourmet</span> di Sleman, D.I. Yogyakarta disetujui.
              </p>
            </div>

            <!-- Item 3 -->
            <div class="relative space-y-0.5">
              <span class="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-white"></span>
              <span class="text-gray-400 font-semibold">07:30 WIB • Logistik Cold-Chain</span>
              <p class="text-gray-700 leading-snug">
                Truk Distribusi Cold-Chain (AA 8192 ZA) bertolak membawa 320 karton ke Solo &amp; Semarang.
              </p>
            </div>
          </div>

          <div class="pt-2 text-[11px] text-gray-400 text-center border-t border-gray-100">
            Tersinkronisasi otomatis dengan standar ISO 22000 &amp; BPOM RI
          </div>
        </div>
      </div>
    ` }} />
  );
}
