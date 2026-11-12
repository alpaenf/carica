import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-80px)]" dangerouslySetInnerHTML={{ __html: `<div class="w-full pt-20"><div class="flex flex-col w-full">
<!-- BREADCRUMB & HERO SECTION -->
<section class="relative w-full bg-surface-container-low py-12 lg:py-16 overflow-hidden">
<div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
<div class="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<!-- Text Column -->
<div class="lg:col-span-7 flex flex-col gap-6">
<div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-fixed/60 w-fit">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed font-bold">
              Peluang Agribisnis &amp; Distribusi Kuliner Tradisi Dieng
            </span>
</div>
<h1 class="text-[32px] sm:text-[40px] lg:text-display-xl font-bold lg:font-extrabold text-on-surface tracking-tight leading-[1.15]">
            Bangun Bisnis Menguntungkan Bersama Produk Legendaris <span class="text-secondary">Carica Gemilang.</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Menghadirkan produk olahan buah carica berkualitas premium langsung dari lereng Dataran Tinggi Dieng dengan margin kompetitif hingga 35%, proteksi wilayah keagenan, garansi retur 100%, dan dukungan materi promosi komprehensif.
          </p>
<div class="flex flex-wrap items-center gap-4 pt-2">
<a class="px-7 py-3.5 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-fixed-dim transition-all flex items-center gap-2" href="#form-pendaftaran">
<span>Daftar Kemitraan Sekarang</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">arrow_downward</span>
</a>
<a class="px-7 py-3.5 rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg font-semibold shadow-sm hover:bg-surface-container transition-all flex items-center gap-2" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20unduh%20Proposal%20dan%20Pricelist%20Grosir" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">download</span>
<span>Unduh Proposal &amp; Pricelist (PDF)</span>
</a>
</div>
<!-- Quick Proof Chips -->
<div class="grid grid-cols-3 gap-3 pt-6 max-w-xl">
<div class="p-3 rounded-lg bg-surface-container-lowest/80 shadow-sm flex flex-col">
<span class="font-headline-sm text-headline-sm text-secondary font-bold">180+</span>
<span class="font-label-md text-label-md text-on-surface-variant">Mitra di 34 Kota</span>
</div>
<div class="p-3 rounded-lg bg-surface-container-lowest/80 shadow-sm flex flex-col">
<span class="font-headline-sm text-headline-sm text-primary font-bold">100%</span>
<span class="font-label-md text-label-md text-on-surface-variant">Garansi Retur Pecah</span>
</div>
<div class="p-3 rounded-lg bg-surface-container-lowest/80 shadow-sm flex flex-col">
<span class="font-headline-sm text-headline-sm text-tertiary font-bold">35%</span>
<span class="font-label-md text-label-md text-on-surface-variant">Estimasi Margin Laba</span>
</div>
</div>
</div>
<!-- Visual Hero Column -->
<div class="lg:col-span-5 relative">
<div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-surface-container">
<img class="w-full h-full object-cover" data-alt="Penandatanganan nota kesepahaman kemitraan distributor Carica Gemilang di ruang rapat modern dengan jajaran produk carica kemasan jar dan pouch premium tertata rapi di atas meja kayu solid." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwBe5rTPL5gE8SpJtypYO7aImpd5YXLk19zJekmfJhiUNmQy3IR199vg-GiHhDLFEcQDB5QHj1DV5JzVsGC0zNlfVEonwoVefW_5tJq_TgEXIG9kjNWks5tBO92ufbyWSlkkiVSMyQ_oMfCIKXsKtGjvY7IbxndxNhR_WgF86T7OZqPtoze74j6wKUEqfAz_byJZQaYRomOQJ0W3l1U-SYbs-mlpPdX25H6pc67f1M">
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent"></div>
</div>
<!-- Floating Badge Top-Left -->
<div class="absolute -top-4 -left-4 bg-surface-container-lowest p-3.5 rounded-xl shadow-lg flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[24px] notranslate" translate="no">verified</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase">Sertifikasi Resmi</p>
<p class="font-label-lg text-label-lg text-on-surface font-bold">BPOM &amp; Halal MUI</p>
</div>
</div>
<!-- Floating Badge Bottom-Right -->
<div class="absolute -bottom-6 right-2 sm:right-6 bg-secondary text-on-secondary p-4 rounded-xl shadow-xl flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-secondary-fixed">
<span class="material-symbols-outlined text-[24px] notranslate" translate="no">local_shipping</span>
</div>
<div>
<p class="font-label-md text-label-md text-secondary-fixed">Kargo Pangan Khusus</p>
<p class="font-label-lg text-label-lg font-bold">Pengiriman Rutin Jawa-Bali</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- KEY VALUE PROPOSITIONS (6 KEUNTUNGAN MITRA) -->
<section class="w-full py-16 lg:py-24 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<span class="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-semibold tracking-wide uppercase mb-3">
          Keunggulan Eksklusif Mitra
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Mengapa Bermitra dengan Carica Gemilang?
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-3">
          Kami memadukan tradisi kuliner otentik Wonosobo dengan sistem dukungan distribusi modern yang transparan, amanah, dan terukur.
        </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Benefit 1 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-secondary-fixed mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">payments</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Margin Usaha Tinggi</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Dapatkan potensi keuntungan hingga 35% dengan skema harga berjenjang yang adil, memungkinkan perputaran kas cepat dan margin grosir sehat.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Hingga 35% Laba Bersih</span>
</div>
<!-- Benefit 2 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">verified_user</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Legalitas &amp; Mutu Terjamin</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Diproduksi dengan standar CPPOB, terdaftar resmi di BPOM RI, serta mengantongi Sertifikat Halal MUI dan izin P-IRT higienis terverifikasi.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Standar Higienis Modern</span>
</div>
<!-- Benefit 3 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">share_location</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Proteksi Wilayah Eksklusif</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Slot kuota agen eksklusif per kecamatan/kota untuk melindungi pasar Anda dan mencegah perang harga tidak sehat antar mitra Carica Gemilang.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Radius Distribusi Terjaga</span>
</div>
<!-- Benefit 4 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center text-error mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">sync_problem</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Garansi 100% Produk Pecah</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Penggantian produk baru gratis tanpa birokrasi berbelit. Cukup sertakan video unboxing bila terjadi kerusakan jar kaca selama ekspedisi.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Klaim Penggantian Mudah</span>
</div>
<!-- Benefit 5 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-secondary-fixed mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">photo_camera_back</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Toolkit Marketing Gratis</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Disediakan standing banner toko, brosur promosi, foto &amp; video katalog studio profesional beresolusi tinggi yang siap tayang di media sosial.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Siap Pakai untuk Promosi</span>
</div>
<!-- Benefit 6 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed mb-5">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">rv_hookup</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Ekspedisi Terjangkau &amp; Aman</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Kerjasama khusus dengan kargo rekanan berbiaya rendah dan handal untuk rute darat, laut, hingga udara ke seluruh pelosok Nusantara.
            </p>
</div>
<span class="font-label-sm text-label-sm text-secondary font-bold tracking-wider uppercase mt-6 block">Jaringan Ekspedisi Handal</span>
</div>
</div>
</div>
</section>
<!-- PILIHAN TIER KEMITRAAN (3 PAKET KERJASAMA) -->
<section class="w-full py-16 lg:py-24 bg-surface-container-low">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<span class="px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wide mb-3">
          Pilihan Paket
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Pilih Jenjang Kemitraan Sesuai Kapasitas Bisnis Anda
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-3">
          Tersedia paket kemitraan fleksibel mulai dari toko pemula hingga kontrak pasokan hotel, restoran, dan hampers korporat.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
<!-- Tier 1 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-4">
<div>
<span class="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">Tier 1</span>
<h3 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">Reseller Pemula</h3>
</div>
<span class="material-symbols-outlined text-[28px] text-on-surface-variant notranslate" translate="no">storefront</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Cocok untuk perintis toko oleh-oleh, warung modern, reseller online, atau penggiat bazar kuliner lokal.
            </p>
<div class="p-4 rounded-xl bg-surface-container-low mb-6">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Modal Awal Mulai</span>
<p class="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-0.5">Rp 1.500.000</p>
<div class="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-secondary font-bold">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">trending_up</span>
<span>Margin Estimasi: 18% - 22%</span>
</div>
</div>
<ul class="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Minimum Order: <strong>3 Karton</strong> (Bisa campur kemasan cup &amp; jar)</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Bahan konten promosi WhatsApp &amp; Instagram Stories mingguan</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Panduan edukasi manfaat &amp; story brand Carica Dieng</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Kemasan karton bergelombang ekstra tebal &amp; bubble wrap</span>
</li>
</ul>
</div>
<a class="w-full py-3 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold hover:bg-primary-container transition-colors text-center block" href="#form-pendaftaran" onclick="selectTier('Reseller Starter')">
            Pilih Paket Reseller
          </a>
</div>
<!-- Tier 2 (Featured) -->
<div class="p-8 rounded-2xl bg-secondary text-on-secondary shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
<div class="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-primary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold shadow-md uppercase tracking-wider">
            Paling Banyak Dipilih
          </div>
<div>
<div class="flex justify-between items-start mb-4">
<div>
<span class="font-label-md text-label-md text-primary-fixed font-semibold uppercase tracking-wider">Tier 2</span>
<h3 class="font-headline-md text-headline-md text-white font-bold mt-1">Agen Kota / Wilayah</h3>
</div>
<span class="material-symbols-outlined text-[28px] text-primary-fixed notranslate" translate="no">domain</span>
</div>
<p class="font-body-sm text-body-sm text-secondary-fixed-dim mb-6">
              Diperuntukkan bagi distributor kota, pusat oleh-oleh kabupaten, dan jaringan pasokan retail yang ingin memegang wilayah.
            </p>
<div class="p-4 rounded-xl bg-on-secondary-fixed/40 mb-6">
<span class="font-label-sm text-label-sm text-primary-fixed uppercase">Modal Awal Mulai</span>
<p class="font-headline-lg text-headline-lg text-white font-extrabold mt-0.5">Rp 7.500.000</p>
<div class="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-primary-fixed font-bold">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">trending_up</span>
<span>Margin Estimasi: 25% - 30%</span>
</div>
</div>
<ul class="flex flex-col gap-3 font-body-sm text-body-sm text-surface-container-highest mb-8">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5 notranslate" translate="no">verified</span>
<span>Minimum Order: <strong>15 Karton</strong> per alokasi</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5 notranslate" translate="no">verified</span>
<span><strong>Proteksi Wilayah Eksklusif</strong> di radius kecamatan/kota</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5 notranslate" translate="no">verified</span>
<span>Gratis 1 Standing Banner Akrilik Display &amp; 1 Box Tester Suvenir</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5 notranslate" translate="no">verified</span>
<span>Prioritas stok saat puncak panen raya &amp; libur panjang</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5 notranslate" translate="no">verified</span>
<span>Akses grup mentoring distributor langsung dari tim operasional</span>
</li>
</ul>
</div>
<a class="w-full py-3 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold hover:bg-primary-fixed-dim transition-colors text-center block shadow-md" href="#form-pendaftaran" onclick="selectTier('Agen Wilayah')">
            Pilih Agen Wilayah
          </a>
</div>
<!-- Tier 3 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-4">
<div>
<span class="font-label-md text-label-md text-tertiary font-semibold uppercase tracking-wider">Tier 3</span>
<h3 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">Mitra B2B &amp; Horeka</h3>
</div>
<span class="material-symbols-outlined text-[28px] text-on-surface-variant notranslate" translate="no">corporate_fare</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Kebutuhan khusus hotel bintang, katering, restoran, dan paket hampers bingkisan korporat akhir tahun.
            </p>
<div class="p-4 rounded-xl bg-surface-container-low mb-6">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Investasi Sesuai Kontrak</span>
<p class="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-0.5">Custom PO</p>
<div class="flex items-center gap-2 mt-2 font-label-sm text-label-sm text-secondary font-bold">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">handshake</span>
<span>Margin Kontrak: 30% - 35%</span>
</div>
</div>
<ul class="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant mb-8">
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Minimum Order: <strong>50+ Karton</strong> atau kemasan drum/jerigen</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Kustomisasi label / sleeve hangtag logo perusahaan</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Termin pembayaran terverifikasi (TOP untuk korporasi resmi)</span>
</li>
<li class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-[18px] text-secondary mt-0.5 notranslate" translate="no">check_circle</span>
<span>Penerbitan faktur pajak resmi &amp; Certificate of Analysis (CoA)</span>
</li>
</ul>
</div>
<a class="w-full py-3 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg font-bold hover:bg-primary-container transition-colors text-center block" href="#form-pendaftaran" onclick="selectTier('B2B Horeka')">
            Ajukan Kerjasama B2B
          </a>
</div>
</div>
</div>
</section>
<!-- SIMULATOR KALKULATOR POTENSI LABA (INTERACTIVE PROFIT CALCULATOR UI) -->
<section class="w-full py-16 lg:py-20 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="bg-surface-container-low rounded-3xl p-8 lg:p-12 shadow-sm">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<!-- Controls Column -->
<div class="lg:col-span-6 flex flex-col gap-6">
<div>
<span class="px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wider">
                Simulasi Bisnis
              </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold mt-2">
                Hitung Potensi Keuntungan Anda
              </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">
                Kalkulasikan estimasi perputaran modal dan laba bersih bulanan dengan menggeser target penjualan di bawah ini.
              </p>
</div>
<!-- Package Selection Radio -->
<div class="flex flex-col gap-2">
<label class="font-label-lg text-label-lg text-on-surface font-semibold">Tipe Kemitraan:</label>
<div class="grid grid-cols-2 gap-3">
<button class="p-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold text-center transition-all" id="btn-calc-starter" onclick="setCalcTier('starter')" type="button">
                  Reseller Starter
                </button>
<button class="p-3 rounded-xl bg-secondary text-white font-label-md text-label-md font-bold text-center transition-all" id="btn-calc-agen" onclick="setCalcTier('agen')" type="button">
                  Agen Kota (Disarankan)
                </button>
</div>
</div>
<!-- Range Slider: Jars Sold Per Day -->
<div class="flex flex-col gap-3">
<div class="flex justify-between items-center">
<label class="font-label-lg text-label-lg text-on-surface font-semibold" for="jar-slider">
                  Estimasi Penjualan per Hari:
                </label>
<span class="px-3 py-1 rounded-lg bg-surface-container-highest text-secondary font-headline-sm text-headline-sm font-bold">
<span id="slider-jar-val">8</span> Jar / Hari
                </span>
</div>
<input class="w-full accent-secondary h-2 bg-surface-container-highest rounded-lg cursor-pointer" id="jar-slider" max="30" min="2" oninput="updateCalculator()" step="1" type="range" value="8">
<div class="flex justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>2 Jar/hari (Santai)</span>
<span>15 Jar/hari (Rame)</span>
<span>30 Jar/hari (Grosir)</span>
</div>
</div>
<!-- Price Breakdown Tag -->
<div class="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-lowest">
<div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Harga Beli Mitra</span>
<p class="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5" id="calc-buy-price">Rp 24.500</p>
<span class="font-label-sm text-label-sm text-on-surface-variant">per Jar 350gr</span>
</div>
<div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Harga Jual Konsumen</span>
<p class="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">Rp 35.000</p>
<span class="font-label-sm text-label-sm text-on-surface-variant">HET Rekomendasi</span>
</div>
</div>
</div>
<!-- Output Display Card -->
<div class="lg:col-span-6">
<div class="p-8 lg:p-10 rounded-2xl bg-secondary text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
<div>
<div class="flex items-center justify-between pb-6 border-b border-surface-container-highest/20">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[24px] text-primary-fixed notranslate" translate="no">analytics</span>
<span class="font-label-lg text-label-lg text-primary-fixed uppercase tracking-wider font-bold">Hasil Proyeksi Usaha</span>
</div>
<span class="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-on-secondary-fixed/50 text-surface-container-highest">Periode 30 Hari</span>
</div>
<div class="py-6 flex flex-col gap-6">
<div>
<span class="font-label-md text-label-md text-secondary-fixed-dim">Estimasi Laba Bersih Bulanan:</span>
<p class="font-display-lg text-display-lg font-extrabold text-primary-fixed mt-1 tracking-tight" id="calc-profit-output">
                      Rp 2.520.000
                    </p>
</div>
<div class="grid grid-cols-2 gap-4 pt-2">
<div>
<span class="font-label-sm text-label-sm text-secondary-fixed-dim">Omzet Penjualan/Bulan:</span>
<p class="font-headline-sm text-headline-sm font-bold text-white mt-0.5" id="calc-omzet-output">Rp 8.400.000</p>
</div>
<div>
<span class="font-label-sm text-label-sm text-secondary-fixed-dim">Volume Terjual/Bulan:</span>
<p class="font-headline-sm text-headline-sm font-bold text-white mt-0.5" id="calc-volume-output">240 Jar</p>
</div>
</div>
</div>
</div>
<div class="pt-6 border-t border-surface-container-highest/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<span class="font-label-sm text-label-sm text-secondary-fixed-dim">Estimasi Balik Modal (BEP):</span>
<p class="font-label-lg text-label-lg font-bold text-primary-fixed" id="calc-roi-output">30 - 45 Hari Kerja</p>
</div>
<a class="px-5 py-2.5 rounded-lg bg-primary-container text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-primary-fixed-dim transition-all" href="#form-pendaftaran">
                  Ambil Paket Ini
                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 4 LANGKAH ALUR KERJASAMA (WORKFLOW) -->
<section class="w-full py-16 lg:py-24 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<span class="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wide mb-3">
          Langkah Mudah
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Alur Menjadi Mitra Resmi Carica Gemilang
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-3">
          Proses onboarding yang cepat, terstruktur, dan didampingi langsung oleh staf hubungan kemitraan kami.
        </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Step 1 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
<div class="w-12 h-12 rounded-xl bg-primary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-extrabold flex items-center justify-center mb-6">
            01
          </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Isi Formulir &amp; Verifikasi</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Lengkapi data diri, jenis usaha, dan wilayah operasional Anda melalui form di bawah ini untuk pemeriksaan kuota keagenan.
          </p>
</div>
<!-- Step 2 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
<div class="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-extrabold flex items-center justify-center mb-6">
            02
          </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Konsultasi Paket</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Tim representatif kami akan menghubungi Anda via WhatsApp untuk mendiskusikan komposisi varian produk &amp; simulasi ongkos kirim.
          </p>
</div>
<!-- Step 3 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
<div class="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-headline-sm font-extrabold flex items-center justify-center mb-6">
            03
          </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Pembayaran &amp; Packing</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Konfirmasi pesanan diproses di pabrik Wonosobo dengan pengepakan kardus berlapis serta segel keamanan pangan anti-pecah.
          </p>
</div>
<!-- Step 4 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col relative">
<div class="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed font-headline-sm text-headline-sm font-extrabold flex items-center justify-center mb-6">
            04
          </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Pengiriman &amp; Materi Siap</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Pesanan dikirim via kargo rekanan disertai nomor resi, paket media promosi cetak, dan akses link aset digital untuk langsung berjualan.
          </p>
</div>
</div>
</div>
</section>
<!-- FORMULIR PENDAFTARAN & INQUIRY KEMITRAAN (PRD SEKSI 4.4) -->
<section class="w-full py-16 lg:py-24 bg-surface-container-low scroll-mt-24" id="form-pendaftaran">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<!-- Left Side: Information & Commitment -->
<div class="lg:col-span-5 flex flex-col gap-6">
<span class="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider w-fit">
            Pendaftaran Kemitraan
          </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
            Mulai Kerjasama Bisnis Sekarang
          </h2>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Silakan isi rincian profil bisnis Anda. Staf khusus kemitraan Carica Gemilang akan memverifikasi alokasi kuota wilayah Anda dan memberikan proposal penawaran harga grosir terbaik.
          </p>
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 mt-2">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[24px] text-secondary notranslate" translate="no">support_agent</span>
<p class="font-headline-sm text-headline-sm text-on-surface font-bold">Layanan Cepat Tanggap</p>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
              Tim Kemitraan Carica Gemilang akan menghubungi Anda via WhatsApp dalam waktu maksimal <strong>1x24 jam kerja</strong> setelah formulir diserahkan.
            </p>
<div class="flex items-center gap-2 pt-2 text-secondary font-label-md text-label-md font-bold">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">verified</span>
<span>Kerahasiaan Data Usaha Dijamin Penuh</span>
</div>
</div>
<!-- Contact directly shortcut -->
<div class="p-6 rounded-2xl bg-surface-container-high/60 flex items-center justify-between">
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase">Butuh Konsultasi Kilat?</p>
<p class="font-headline-sm text-headline-sm text-on-surface font-bold">+62 812-3456-7890</p>
</div>
<a class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition-colors" href="https://wa.me/6281234567890" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
<!-- Right Side: Clean Structured Form -->
<div class="lg:col-span-7">
<form class="p-8 lg:p-10 rounded-3xl bg-surface-container-lowest shadow-md flex flex-col gap-6" id="partnership-form" onsubmit="handleFormSubmit(event)">
<h3 class="font-headline-md text-headline-md text-on-surface font-bold pb-2">
              Formulir Pendaftaran &amp; Verifikasi Wilayah
            </h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<!-- Nama Lengkap -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="full-name">
                  Nama Lengkap Calon Mitra <span class="text-error">*</span>
</label>
<input class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="full-name" placeholder="Contoh: Budi Santoso" required="" type="text">
</div>
<!-- Nama Usaha / Toko -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="business-name">
                  Nama Toko / Usaha <span class="text-on-surface-variant font-normal">(Opsional)</span>
</label>
<input class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="business-name" placeholder="Contoh: Toko Oleh-oleh Berkah" type="text">
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<!-- WhatsApp -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="whatsapp-number">
                  Nomor WhatsApp Aktif <span class="text-error">*</span>
</label>
<input class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="whatsapp-number" placeholder="Contoh: 081234567890" required="" type="tel">
</div>
<!-- Email -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="email-address">
                  Alamat Email Resmi <span class="text-error">*</span>
</label>
<input class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="email-address" placeholder="nama@domain.com" required="" type="email">
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<!-- Domisili Kota / Kabupaten -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="domicile-city">
                  Provinsi &amp; Kota Domisili <span class="text-error">*</span>
</label>
<input class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="domicile-city" placeholder="Contoh: Kota Surabaya, Jawa Timur" required="" type="text">
</div>
<!-- Pilihan Jenis Kemitraan -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="partnership-type">
                  Jenis Kemitraan <span class="text-error">*</span>
</label>
<select class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm cursor-pointer" id="partnership-type" required="">
<option value="Reseller Starter">Reseller Starter (Mulai 3 Karton)</option>
<option selected="" value="Agen Wilayah">Agen Kota / Wilayah (Mulai 15 Karton)</option>
<option value="B2B Horeka">Mitra B2B / Hotel / Restoran (50+ Karton)</option>
<option value="Souvenir Korporat">Pengadaan Souvenir &amp; Hampers Korporat</option>
</select>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
<!-- Saluran Penjualan Utama -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="sales-channel">
                  Saluran Penjualan Utama <span class="text-error">*</span>
</label>
<select class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm cursor-pointer" id="sales-channel" required="">
<option value="Toko Oleh-oleh Fisik">Toko Oleh-Oleh / Minimarket Fisik</option>
<option value="Online Marketplace">Online / Marketplace / Social Commerce</option>
<option value="Bazar dan Event Kuliner">Bazar &amp; Event Kuliner</option>
<option value="Reseller Komunitas">Jaringan Komunitas &amp; Arisan</option>
<option value="Pengadaan B2B">Hotel, Restoran &amp; Korporat</option>
</select>
</div>
<!-- Rencana Kapasitas Awal -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="sales-volume">
                  Rencana Kapasitas Awal <span class="text-error">*</span>
</label>
<select class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm cursor-pointer" id="sales-volume" required="">
<option value="3-5 Karton">3 - 5 Karton per Pengiriman</option>
<option selected="" value="15-30 Karton">15 - 30 Karton per Pengiriman</option>
<option value="50-100 Karton">50 - 100 Karton per Pengiriman</option>
<option value="Lebih dari 100 Karton">&gt; 100 Karton (Grosir Kontrak Rutin)</option>
</select>
</div>
</div>
<!-- Pesan Tambahan / Pertanyaan Khusus -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface font-semibold" for="notes">
                Pesan Tambahan / Catatan Wilayah Anda
              </label>
<textarea class="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-body-md font-body-md placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-sm" id="notes" placeholder="Ceritakan rencana distribusi Anda, perkiraan tanggal mulai, atau pertanyaan terkait pengiriman kargo..." rows="3"></textarea>
</div>
<!-- Agreement Checkbox -->
<div class="flex items-start gap-3 pt-2">
<input class="w-5 h-5 rounded text-secondary focus:ring-secondary cursor-pointer mt-0.5" id="consent-check" required="" type="checkbox">
<label class="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" for="consent-check">
                Saya menyetujui data di atas digunakan tim Carica Gemilang untuk komunikasi penawaran kemitraan, verifikasi domisili kuota, dan pengiriman proposal resmi.
              </label>
</div>
<!-- Submit Button -->
<button class="w-full py-4 rounded-xl bg-primary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-bold shadow-md hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-2 mt-2" id="submit-btn" type="submit">
<span class="material-symbols-outlined text-[22px] notranslate" translate="no">send</span>
<span>Kirim Pengajuan Kemitraan</span>
</button>
<!-- Success Alert Area -->
<div class="hidden p-4 rounded-xl bg-secondary-container text-on-secondary-fixed font-body-md text-body-md flex items-center gap-3" id="form-success-alert">
<span class="material-symbols-outlined text-secondary text-[24px] notranslate" translate="no">check_circle</span>
<div>
<p class="font-bold">Terima kasih! Formulir Anda telah terkirim.</p>
<p class="text-sm">Tim representatif kami akan menyapa via WhatsApp dalam 1x24 jam kerja.</p>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
<!-- TESTIMONI MITRA SUKSES & DISTRIBUSI KOTA -->
<section class="w-full py-16 lg:py-24 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<span class="px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wider mb-3">
          Kisah Sukses Mitra
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Tumbuh Bersama Ratusan Pengusaha Kuliner Se-Nusantara
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-3">
          Dari toko cinderamata legendaris hingga reseller online mandiri, simak pengalaman langsung para mitra kami.
        </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Testimonial 1 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md text-body-md text-on-surface italic leading-relaxed mb-6">
              "Kualitas rasa Carica Gemilang sangat konsisten manis-segarnya, tidak ada aftertaste asam menyengat. Di Surabaya, varian jar kaca mereka jadi best seller untuk bingkisan keluarga dan oleh-oleh premium."
            </p>
</div>
<div class="flex items-center gap-3 pt-4">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-secondary font-bold">
              EW
            </div>
<div>
<p class="font-label-lg text-label-lg text-on-surface font-bold">Erna Wijayanti</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Agen Wilayah Surabaya Timur (120 Karton/bln)</p>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md text-body-md text-on-surface italic leading-relaxed mb-6">
              "Awalnya saya ragu kirim kaca dari Wonosobo ke Jakarta Barat. Ternyata packing kardusnya solid banget dan ada garansi retur tanpa ribet. Repeat order pelanggan di marketplace saya sangat tinggi."
            </p>
</div>
<div class="flex items-center gap-3 pt-4">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-secondary font-bold">
              HP
            </div>
<div>
<p class="font-label-lg text-label-lg text-on-surface font-bold">Hendra Pratama</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Owner Toko Kudapan Nusantara, Jakarta Barat</p>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div class="flex items-center gap-1 text-primary mb-4">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-body-md text-body-md text-on-surface italic leading-relaxed mb-6">
              "Kami menyajikan manisan carica dingin untuk menu welcome drink di hotel butik kami di Yogyakarta. Tamu luar kota dan mancanegara sangat terkesan dengan kesegaran asli buah dataran tinggi Dieng."
            </p>
</div>
<div class="flex items-center gap-3 pt-4">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm text-secondary font-bold">
              SA
            </div>
<div>
<p class="font-label-lg text-label-lg text-on-surface font-bold">Siti Aminah, S.Tr.Par</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">F&amp;B Procurement Manager, Yogyakarta</p>
</div>
</div>
</div>
</div>
<!-- City distribution band -->
<div class="mt-12 p-8 rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-[28px] notranslate" translate="no">hub</span>
</div>
<div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Jaringan Distribusi 34 Kota</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Tersedia di Jabodetabek, Bandung, Semarang, Solo, Yogyakarta, Surabaya, Denpasar, Medan, hingga Makassar.</p>
</div>
</div>
<a class="px-6 py-3 rounded-xl bg-surface-container-lowest text-secondary font-label-md text-label-md font-bold shadow-sm hover:bg-primary-container transition-colors flex-shrink-0" href="#form-pendaftaran">
          Cek Ketersediaan Kota Anda
        </a>
</div>
</div>
</section>
<!-- FAQ SEPUTAR KEMITRAAN & RESELLER -->
<section class="w-full py-16 lg:py-24 bg-surface-container-low">
<div class="max-w-[960px] mx-auto px-6 lg:px-12">
<div class="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
<span class="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider mb-3">
          Tanya Jawab
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Pertanyaan Seputar Kemitraan
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">
          Semua hal yang perlu Anda ketahui sebelum memulai perjalanan bisnis carica bersama kami.
        </p>
</div>
<div class="flex flex-col gap-4">
<!-- FAQ 1 -->
<details class="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all">
<summary class="flex justify-between items-center font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer list-none">
<span>Apakah pemula yang belum punya toko fisik bisa bergabung?</span>
<span class="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 notranslate" translate="no">expand_more</span>
</summary>
<div class="mt-4 pt-4 border-t border-surface-container-high/40 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Sangat bisa! Paket Reseller Starter (Tier 1) dirancang khusus bagi individu yang ingin berjualan secara online via WhatsApp story, Instagram, marketplace, maupun sistem pre-order di lingkungan kantor atau perumahan tanpa keharusan memiliki toko fisik.
          </div>
</details>
<!-- FAQ 2 -->
<details class="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all">
<summary class="flex justify-between items-center font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer list-none">
<span>Bagaimana jika produk pecah dalam pengiriman kargo antarpulau?</span>
<span class="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 notranslate" translate="no">expand_more</span>
</summary>
<div class="mt-4 pt-4 border-t border-surface-container-high/40 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kami memberikan <strong>Garansi Retur 100%</strong>. Setiap kardus dikemas dengan partisi khusus per botol dan bubble wrap tebal. Jika ada botol yang pecah selama perjalanan, cukup rekam video unboxing saat paket tiba dan kirimkan ke tim CS. Penggantian akan dikirimkan di pesanan berikutnya atau dikompensasi tanpa biaya.
          </div>
</details>
<!-- FAQ 3 -->
<details class="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all">
<summary class="flex justify-between items-center font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer list-none">
<span>Apakah harga jual konsumen ditentukan oleh Carica Gemilang (HET)?</span>
<span class="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 notranslate" translate="no">expand_more</span>
</summary>
<div class="mt-4 pt-4 border-t border-surface-container-high/40 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kami menetapkan Harga Eceran Tertinggi (HET) rekomendasi untuk menjaga stabilitas pasar dan margin sehat seluruh mitra. Namun, mitra diperbolehkan menyesuaikan harga di wilayah luar pulau Jawa dengan mempertimbangkan komponen biaya ongkos kirim lokal.
          </div>
</details>
<!-- FAQ 4 -->
<details class="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all">
<summary class="flex justify-between items-center font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer list-none">
<span>Berapa lama estimasi pengiriman dari pabrik Kejajar Wonosobo ke kota mitra?</span>
<span class="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 notranslate" translate="no">expand_more</span>
</summary>
<div class="mt-4 pt-4 border-t border-surface-container-high/40 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Untuk wilayah Pulau Jawa (Jabodetabek, Bandung, Semarang, Surabaya), estimasi waktu kargo berkisar antara 1 - 2 hari kerja. Untuk wilayah Bali dan Sumatera sekitar 3 - 5 hari kerja, sedangkan Kalimantan &amp; Sulawesi rata-rata 5 - 8 hari kerja tergantung ekspedisi pilihan.
          </div>
</details>
</div>
</div>
</section>
<!-- BANNER CTA KONSULTASI LANGSUNG -->
<section class="w-full py-16 lg:py-20 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="rounded-3xl bg-secondary text-white p-8 lg:p-14 relative overflow-hidden shadow-xl">
<div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div class="lg:col-span-8 flex flex-col gap-4">
<span class="px-3.5 py-1 rounded-full bg-primary-container text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider w-fit">
              Dukungan Penuh Bisnis Anda
            </span>
<h2 class="font-headline-lg text-headline-lg text-white font-extrabold tracking-tight">
              Masih Ragu Memilih Paket Kemitraan yang Tepat?
            </h2>
<p class="font-body-md text-body-md text-secondary-fixed-dim max-w-2xl leading-relaxed">
              Diskusikan kondisi pasar, kapasitas modal, dan potensi lokasi penjualan Anda bersama tim konsultan bisnis Carica Gemilang langsung via WhatsApp resmi kami.
            </p>
</div>
<div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
<a class="px-6 py-4 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-fixed-dim transition-all text-center flex items-center justify-center gap-2" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20konsultasi%20paket%20kemitraan" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
<span>Chat WhatsApp Tim Kemitraan</span>
</a>
<a class="px-6 py-3.5 rounded-xl bg-on-secondary-fixed/50 text-white font-label-lg text-label-lg font-semibold hover:bg-on-secondary-fixed/80 transition-all text-center flex items-center justify-center gap-2" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20mohon%20kirimkan%20Brosur%20Peluang%20Bisnis%20PDF" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">download</span>
<span>Unduh Brosur Bisnis (PDF)</span>
</a>
<a class="px-6 py-3.5 rounded-xl bg-surface-container-lowest text-secondary font-label-lg text-label-lg font-bold shadow-sm hover:bg-surface-container hover:text-on-surface transition-all text-center flex items-center justify-center gap-2" href="/cari-reseller">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">storefront</span>
<span>Cari Reseller Terdekat</span>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</div>` }} />
      <Footer />
    </>
  );
}
