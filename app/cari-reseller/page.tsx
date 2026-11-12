import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-80px)]" dangerouslySetInnerHTML={{ __html: `<div class="w-full pt-20"><div class="flex flex-col w-full">
<!-- Hero & Terroir Elevation Banner -->
<section class="relative w-full bg-surface-container-lowest overflow-hidden py-12 lg:py-16">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<!-- Left: Copy & Value Proposition -->
<div class="lg:col-span-8 flex flex-col gap-5">
<div class="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-primary-fixed/60 text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
<span class="material-symbols-outlined text-[16px] text-primary notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">verified</span>
<span>Jaringan Distribusi Resmi di 34 Kota Indonesia</span>
</div>
<h1 class="font-display-xl text-display-xl text-on-surface leading-tight">
            Beli Langsung di Dekat Anda: <br class="hidden sm:inline">
<span class="text-secondary font-extrabold">Temukan Gerai &amp; Reseller Resmi</span> Carica Gemilang
          </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Nikmati cita rasa asam manis segar buah carica asli lereng Dieng hari ini tanpa menunggu pengiriman paket. Seluruh gerai mitra terdaftar menjamin fresh batch, penyimpanan higienis, dan standar harga resmi terverifikasi.
          </p>
<!-- Quick Metrics Bar -->
<div class="grid grid-cols-3 gap-4 pt-3 max-w-xl">
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col">
<span class="font-headline-md text-headline-md text-secondary font-bold">140+</span>
<span class="font-label-md text-label-md text-on-surface-variant">Toko &amp; Swalayan Aktif</span>
</div>
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col">
<span class="font-headline-md text-headline-md text-primary font-bold">100%</span>
<span class="font-label-md text-label-md text-on-surface-variant">Garansi Fresh Batch</span>
</div>
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col">
<span class="font-headline-md text-headline-md text-secondary font-bold">4.9 ★</span>
<span class="font-label-md text-label-md text-on-surface-variant">Kepuasan Pelanggan</span>
</div>
</div>
</div>
<!-- Right: Highland Terroir Card Specimen -->
<div class="lg:col-span-4 flex justify-center">
<div class="w-full max-w-sm rounded-2xl bg-secondary text-on-secondary p-6 shadow-xl relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-tertiary-container/20 blur-2xl pointer-events-none"></div>
<div class="flex items-center justify-between pb-4">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">Batch Asal Kebun</span>
<span class="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-fixed font-label-sm text-label-sm">Grade Super A</span>
</div>
<div class="relative w-full h-44 rounded-xl overflow-hidden mb-5 shadow-inner">
<img class="w-full h-full object-cover" data-alt="Traditional glass jars of glistening golden diced Carica fruit bathed in mountain mist, placed on rustic teak wood with rolling volcanic Dieng terrace hills in the background under soft golden morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GhgFwMlHVhlt27F8-x-EQP0YiTmw80Y0ghAsSzaQWur8P_aJGYAJnEmdrCU2IKD_Db-vGlHzQ0OeUoLFs-LLUTx85voC32qc1mjHs1iWZ3qe4FwExIRWkP8oIDzwIqF3IbH-JwsitYd-LpFocszaSpdiTqeHnB-u0OQ-QiivDF7PFfTH7biJWMdNpDck_i6TuO5vfkMrs8A7KN8FHy406zrD9HfPRaB6nwATmGqL">
<div class="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
<div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-secondary font-label-sm text-label-sm">
<span>Elevasi: 2.093 mdpl</span>
<span>Panen: Tiap Pekan</span>
</div>
</div>
<p class="font-body-sm text-body-sm text-secondary-fixed mb-4">
              Setiap toples di gerai mitra didistribusikan langsung dari sentra Kejajar Wonosobo dengan sistem cold-distribution terpantau.
            </p>
<div class="p-3 rounded-lg bg-on-secondary/10 flex items-center gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[24px] notranslate" translate="no">verified_user</span>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-secondary font-bold">Sertifikasi Halal &amp; BPOM RI</span>
<span class="font-label-sm text-label-sm text-secondary-fixed">MD 217611001099</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Comprehensive Search & Filter Console -->
<section class="w-full bg-surface-container py-8 shadow-sm">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-6">
<!-- Primary Search Inputs Row -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
<!-- Keyword Search -->
<div class="md:col-span-5 relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px] notranslate" translate="no">search</span>
<input class="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-secondary/40 transition-all" id="storeSearchInput" placeholder="Cari nama kota, mall, atau toko oleh-oleh..." type="text">
</div>
<!-- Province & City Selector -->
<div class="md:col-span-4 relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px] notranslate" translate="no">location_city</span>
<select class="w-full pl-12 pr-10 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-secondary/40 appearance-none cursor-pointer" id="regionFilterSelect">
<option value="all">Semua Wilayah (Nasional)</option>
<option value="jabodetabek">DKI Jakarta &amp; Bodetabek</option>
<option value="jabar">Jawa Barat (Bandung, Cirebon, dll)</option>
<option value="jateng">Jawa Tengah (Semarang, Solo, Wonosobo)</option>
<option selected="" value="diy">D.I. Yogyakarta</option>
<option value="jatim">Jawa Timur (Surabaya, Malang, dll)</option>
<option value="bali-luar">Bali &amp; Luar Pulau Jawa</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px] notranslate" translate="no">expand_more</span>
</div>
<!-- GPS "Gunakan Lokasi Saya" Trigger -->
<div class="md:col-span-3">
<button class="w-full py-3.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm hover:bg-secondary/90 active:scale-[0.99] transition-all" id="btnUseCurrentLocation" type="button">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">my_location</span>
<span>Gunakan Lokasi Saya</span>
</button>
</div>
</div>
<!-- Secondary Filters & Segment Chips -->
<div class="flex flex-wrap items-center justify-between gap-4 pt-2">
<!-- Store Type Filter Pills -->
<div class="flex flex-wrap items-center gap-2">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Tipe Gerai:</span>
<button class="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-secondary text-on-secondary shadow-sm transition-all" data-type="all" type="button">
            Semua Gerai (142)
          </button>
<button class="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all" data-type="oleh-oleh" type="button">
            Pusat Oleh-Oleh Khas (86)
          </button>
<button class="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all" data-type="supermarket" type="button">
            Supermarket Premium (34)
          </button>
<button class="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all" data-type="cafe-resto" type="button">
            Cafe &amp; Resto Rekanan (12)
          </button>
<button class="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-all" data-type="distributor" type="button">
            Depo Hub Wilayah (10)
          </button>
</div>
<!-- Rating & Sort Selectors -->
<div class="flex items-center gap-3 ml-auto">
<div class="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
<span>Urutkan:</span>
<select class="bg-surface-container-lowest text-on-surface py-1.5 px-3 rounded-lg font-label-md text-label-md outline-none cursor-pointer shadow-sm">
<option value="nearest">Jarak Terdekat</option>
<option value="rating">Rating Tertinggi (4.8+)</option>
<option value="stock">Stok Paling Lengkap</option>
</select>
</div>
</div>
</div>
</div>
</section>
<!-- Main Store Locator Workspace: Split View (List + Interactive Visual Map) -->
<section class="w-full py-10 lg:py-14 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Column: Store Directory List -->
<div class="lg:col-span-6 flex flex-col gap-5">
<!-- Results Header & Counter -->
<div class="flex items-center justify-between pb-1">
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">12 Gerai Terverifikasi di Sekitarmu</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Menampilkan data gerai dengan ketersediaan stok fresh terkonfirmasi</span>
</div>
<div class="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>Online Terverifikasi</span>
</div>
</div>
<!-- Store Card 1 (Active / Featured) -->
<article class="store-card group p-6 rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all relative flex flex-col gap-4 cursor-pointer" data-id="1">
<div class="flex items-start justify-between gap-3">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
                    Reseller Resmi Terverifikasi
                  </span>
<span class="font-label-sm text-label-sm text-secondary font-bold">1.2 km dari Anda</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors font-bold pt-1">
                  Pusat Oleh-Oleh Primadona Malioboro
                </h2>
</div>
<div class="flex flex-col items-end flex-shrink-0">
<div class="flex items-center gap-1 text-primary font-bold font-headline-sm text-headline-sm">
<span>4.9</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">(420+ Ulasan)</span>
</div>
</div>
<!-- Address and Status -->
<div class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5 notranslate" translate="no">location_on</span>
<span class="text-on-surface">Jl. Malioboro No. 58, Sosromenduran, Gedong Tengen, Kota Yogyakarta, D.I. Yogyakarta 55271</span>
</div>
<div class="flex items-center gap-4 text-label-md font-label-md">
<span class="flex items-center gap-1.5 text-secondary font-bold">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Buka Hari Ini (07.30 - 22.00 WIB)
                </span>
<span class="text-outline-variant">•</span>
<span class="text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">local_parking</span> Parkir Bus &amp; Mobil
                </span>
</div>
</div>
<!-- Live Stock Indicator Chips -->
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Status Stok Fresh Batch Hari Ini:</span>
<div class="flex flex-wrap items-center gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-secondary text-label-sm font-label-sm font-semibold shadow-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Jar Kaca 350g (Ready 48 toples)
                </span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-secondary text-label-sm font-label-sm font-semibold shadow-sm">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Cup Family Pack 12 (Ready)
                </span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary text-label-sm font-label-sm font-semibold shadow-sm">
<span class="w-2 h-2 rounded-full bg-primary"></span> Sirup Carica 500ml (Sisa 6 botol)
                </span>
</div>
</div>
<!-- Action Buttons Row -->
<div class="flex flex-wrap items-center gap-3 pt-1">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary-fixed-dim transition-all" href="https://maps.google.com" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">directions</span>
<span>Rute Google Maps</span>
</a>
<a class="py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all" href="https://wa.me/6281234567890?text=Halo%20Primadona%20Malioboro,%20apakah%20stok%20Carica%20Gemilang%20masih%20tersedia%20hari%20ini?" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">chat</span>
<span>Chat WhatsApp</span>
</a>
<button class="p-2.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" title="Lihat Foto Toko" type="button">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">photo_camera</span>
</button>
</div>
</article>
<!-- Store Card 2 -->
<article class="store-card group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-4 cursor-pointer" data-id="2">
<div class="flex items-start justify-between gap-3">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">storefront</span>
                    Toko Oleh-Oleh Wisata Bu Rudy
                  </span>
<span class="font-label-sm text-label-sm text-on-surface-variant">2.4 km dari Anda</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors font-bold pt-1">
                  Sentra Oleh-Oleh Khas Nusantara Babarsari
                </h2>
</div>
<div class="flex flex-col items-end flex-shrink-0">
<div class="flex items-center gap-1 text-primary font-bold font-headline-sm text-headline-sm">
<span>4.8</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">(318 Ulasan)</span>
</div>
</div>
<div class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5 notranslate" translate="no">location_on</span>
<span class="text-on-surface">Jl. Babarsari No. 12B, Caturtunggal, Depok, Sleman, D.I. Yogyakarta</span>
</div>
<div class="flex items-center gap-4 text-label-md font-label-md">
<span class="flex items-center gap-1.5 text-secondary font-bold">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Buka Hari Ini (08.00 - 21.30 WIB)
                </span>
<span class="text-outline-variant">•</span>
<span>Kemasan Dus Traveling Tersedia</span>
</div>
</div>
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Status Stok:</span>
<div class="flex flex-wrap items-center gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-secondary text-label-sm font-label-sm font-semibold">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Jar Kaca 350g (Tersedia)
                </span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-secondary text-label-sm font-label-sm font-semibold">
<span class="w-2 h-2 rounded-full bg-secondary"></span> Manisan Carica 250g (Tersedia)
                </span>
</div>
</div>
<div class="flex flex-wrap items-center gap-3 pt-1">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors" href="https://maps.google.com">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">directions</span>
<span>Rute Navigasi</span>
</a>
<a class="py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all" href="https://wa.me/6281234567890">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">chat</span>
<span>WhatsApp</span>
</a>
</div>
</article>
<!-- Store Card 3 -->
<article class="store-card group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-4 cursor-pointer" data-id="3">
<div class="flex items-start justify-between gap-3">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">local_grocery_store</span>
                    Supermarket Rekanan
                  </span>
<span class="font-label-sm text-label-sm text-on-surface-variant">3.8 km dari Anda</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors font-bold pt-1">
                  Harmoni Gourmet &amp; Swalayan Buah Premium
                </h2>
</div>
<div class="flex flex-col items-end flex-shrink-0">
<div class="flex items-center gap-1 text-primary font-bold font-headline-sm text-headline-sm">
<span>4.9</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">(185 Ulasan)</span>
</div>
</div>
<div class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5 notranslate" translate="no">location_on</span>
<span class="text-on-surface">Jl. Gejayan (Affandi) No. 42, Sleman, Yogyakarta</span>
</div>
<div class="flex items-center gap-4 text-label-md font-label-md">
<span class="flex items-center gap-1.5 text-secondary font-bold">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Buka (09.00 - 22.00 WIB)
                </span>
<span class="text-outline-variant">•</span>
<span>Tersedia Dingin Siap Santap</span>
</div>
</div>
<div class="flex flex-wrap items-center gap-3 pt-1">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors" href="https://maps.google.com">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">directions</span>
<span>Rute Navigasi</span>
</a>
<a class="py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all" href="https://wa.me/6281234567890">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">chat</span>
<span>WhatsApp</span>
</a>
</div>
</article>
<!-- Store Card 4 -->
<article class="store-card group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-4 cursor-pointer" data-id="4">
<div class="flex items-start justify-between gap-3">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">hub</span>
                    Titik Depo Distribusi Resmi
                  </span>
<span class="font-label-sm text-label-sm text-on-surface-variant">5.2 km dari Anda</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors font-bold pt-1">
                  Depo Gemilang Wilayah Jogja-Solo
                </h2>
</div>
<div class="flex flex-col items-end flex-shrink-0">
<div class="flex items-center gap-1 text-primary font-bold font-headline-sm text-headline-sm">
<span>5.0</span>
<span class="material-symbols-outlined text-[20px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">(92 Ulasan)</span>
</div>
</div>
<div class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<div class="flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5 notranslate" translate="no">location_on</span>
<span class="text-on-surface">Jl. Ringroad Timur No. 88, Banguntapan, Bantul, D.I. Yogyakarta</span>
</div>
<div class="flex items-center gap-4 text-label-md font-label-md">
<span class="flex items-center gap-1.5 text-secondary font-bold">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Melayani Pembelian Kartonan &amp; Dus Oleh-Oleh
                </span>
</div>
</div>
<div class="flex flex-wrap items-center gap-3 pt-1">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors" href="https://maps.google.com">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">directions</span>
<span>Rute Navigasi</span>
</a>
<a class="py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all" href="https://wa.me/6281234567890">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">chat</span>
<span>WhatsApp</span>
</a>
</div>
</article>
<!-- Pagination / Load More -->
<div class="pt-4 flex items-center justify-center">
<button class="px-8 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-lg text-label-lg font-bold flex items-center gap-2 transition-all active:scale-95" type="button">
<span>Tampilkan 8 Toko Lainnya di Wilayah Ini</span>
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">expand_more</span>
</button>
</div>
</div>
<!-- Right Column: Interactive Map View & Selected Gerai Float Sheet -->
<div class="lg:col-span-6 lg:sticky lg:top-24 flex flex-col gap-4">
<!-- Map Container with Visual High-End Canvas -->
<div class="relative w-full h-[620px] rounded-3xl overflow-hidden bg-surface-container-low shadow-lg">
<!-- Real Static Map API Background Component -->
<div class="w-full h-full bg-cover bg-center" data-location="Malioboro, Yogyakarta, Indonesia" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZX7gHRCqZwu25yXZEAbmwtV0YvOSerbitDuxqn5BEm5FcTYs4OFW_oZWSXuPqY0JwAB4VcgxmY1CEh9htRJq-brPy65HXRJEKudqlVZX0dO8yyS_qOQ9fFmdBKycBmp8MlihkkodkfdGwH0G8OmHPd7s-a7BxtI2MexdM1jZeVd5hP0yOWgg2crWQYNCB2MB1Fio5l8yEfXyUHSb2c64sk_b7LCcXNXYjFbTzdPni')"></div>
<!-- Stylized Ambient Overlay to ensure tropical green & warm cream aesthetic -->
<div class="absolute inset-0 bg-gradient-to-t from-surface-dim/40 via-transparent to-surface-dim/20 pointer-events-none"></div>
<!-- Top Floating Quick Filters Bar inside Map -->
<div class="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-auto">
<div class="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
<button class="px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-sm font-label-sm text-label-sm text-on-surface hover:bg-surface-container-lowest flex items-center gap-1" type="button">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span>Buka Sekarang</span>
</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-sm font-label-sm text-label-sm text-on-surface hover:bg-surface-container-lowest flex items-center gap-1" type="button">
<span class="material-symbols-outlined text-[14px] text-primary notranslate" translate="no">inventory_2</span>
<span>Stok Toples Jar</span>
</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-sm font-label-sm text-label-sm text-on-surface hover:bg-surface-container-lowest flex items-center gap-1" type="button">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">local_parking</span>
<span>Parkir Bus</span>
</button>
</div>
<!-- Map View Reset / Zoom Controls -->
<div class="flex flex-col gap-1 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-1 shadow-sm flex-shrink-0">
<button class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-high text-on-surface" title="Perbesar" type="button">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">add</span>
</button>
<button class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-high text-on-surface" title="Perkecil" type="button">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">remove</span>
</button>
</div>
</div>
<!-- Custom Botanical Carica Map Pins -->
<!-- Pin 1 (Active - Primadona Malioboro) -->
<div class="absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer group">
<div class="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-lg flex items-center gap-1 transform transition-transform group-hover:scale-110">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">star</span>
<span>Primadona (4.9 ★)</span>
</div>
<div class="w-7 h-7 rounded-full bg-primary-container text-on-secondary-fixed flex items-center justify-center shadow-lg -mt-1 ring-4 ring-surface-container-lowest">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
<div class="w-2 h-2 rounded-full bg-on-surface/40 mt-1 blur-[1px]"></div>
</div>
<!-- Pin 2 (Bu Rudy Babarsari) -->
<div class="absolute top-[28%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer group opacity-90 hover:opacity-100">
<div class="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-md flex items-center gap-1 group-hover:scale-105">
<span>Bu Rudy (4.8 ★)</span>
</div>
<div class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md -mt-1 ring-2 ring-surface-container-lowest">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">storefront</span>
</div>
</div>
<!-- Pin 3 (Harmoni Gejayan) -->
<div class="absolute top-[52%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer group opacity-90 hover:opacity-100">
<div class="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-md flex items-center gap-1 group-hover:scale-105">
<span>Harmoni (4.9 ★)</span>
</div>
<div class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md -mt-1 ring-2 ring-surface-container-lowest">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">shopping_bag</span>
</div>
</div>
<!-- Pin 4 (Depo Ringroad) -->
<div class="absolute top-[68%] left-[64%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer group opacity-90 hover:opacity-100">
<div class="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-md flex items-center gap-1 group-hover:scale-105">
<span>Depo Hub (5.0 ★)</span>
</div>
<div class="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md -mt-1 ring-2 ring-surface-container-lowest">
<span class="material-symbols-outlined text-[14px] notranslate" translate="no">hub</span>
</div>
</div>
<!-- Floating Active Store Detail Sheet (Card on Map) -->
<div class="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-2xl bg-surface-container-lowest/98 backdrop-blur-xl shadow-2xl flex flex-col gap-3">
<div class="flex items-start gap-4">
<div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm relative">
<img class="w-full h-full object-cover" data-alt="Interior storefront shelf of a high-end Indonesian specialty souvenir store displaying neat stacks of glowing golden Carica Gemilang glass jars and fresh packaging with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj9Uy7GoqS6lIF4J1KgG1eyMM0Dh4qwo79aB9VBWrg0EoiKLdcJSm0cikJoi2ayUrq0V7dZKbz6sNq61ynNyik8Tj32GA6vyHGZcUcvFSdv4tkr0B4L6vyL8kHt1D50R8FBtUbffWJfmk1RYjbjPq3KG-edu9PbZVT9lB_9cCMizNC4P_i2F4xA-Q36Ot3f5AjQQrXLuR9N7kVtmBnxyCfDGfpo-RxoJZNDyYaTbdj">
<span class="absolute bottom-1 right-1 px-1 rounded bg-secondary text-on-secondary font-label-sm text-[10px]">Verified</span>
</div>
<div class="flex flex-col flex-1 min-w-0">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Toko Pilihan Aktif</span>
<span class="font-label-sm text-label-sm text-secondary font-bold">12 Menit Perjalanan</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Pusat Oleh-Oleh Primadona Malioboro</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">Jl. Malioboro No. 58, Sosromenduran, Yogyakarta</p>
<div class="flex items-center gap-3 pt-1 text-label-sm font-label-sm text-on-surface-variant">
<span class="text-secondary font-semibold">Tersedia 48 Jar Kaca</span>
<span>•</span>
<span class="text-on-surface">Harga Standar HET Pabrik</span>
</div>
</div>
</div>
<!-- Quick CTA Row inside Map Card -->
<div class="grid grid-cols-2 gap-2 pt-1">
<a class="py-2.5 px-3 rounded-xl bg-primary-container text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-primary-fixed-dim transition-all text-center" href="https://maps.google.com" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">navigation</span>
<span>Mulai Navigasi</span>
</a>
<a class="py-2.5 px-3 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary/90 transition-all text-center" href="https://wa.me/6281234567890" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">call</span>
<span>Hubungi Toko</span>
</a>
</div>
</div>
</div>
<!-- Terroir Quality Footnote on Map -->
<div class="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[28px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">verified</span>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-bold">Seluruh Gerai Menggunakan Barcode Keaslian Resmi</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Pindai QR code pada kemasan untuk memverifikasi nomor batch panen Dieng Anda.</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Jaminan Belanja di Reseller Resmi Carica Gemilang -->
<section class="w-full py-16 bg-surface-container-low">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
<div class="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
<span class="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
          Standar Mutu &amp; Konsumen
        </span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">
          Mengapa Belanja di Mitra Resmi Kami?
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant">
          Carica Gemilang berkomitmen memastikan setiap botol dan toples buah carica yang sampai ke tangan Anda tetap mempertahankan kesegaran otentik pegunungan.
        </p>
</div>
<!-- 4 Pillars Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Pillar 1 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
<div class="w-12 h-12 rounded-xl bg-primary-fixed/50 text-on-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no" style="font-variation-settings: 'FILL' 1;">spa</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Produk Asli &amp; Fresh Batch</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Pasokan dikirim berkala langsung dari fasilitas Kejajar Wonosobo dengan tanggal kedaluwarsa maksimal dan tekstur buah yang tetap renyah kenyal.
          </p>
</div>
<!-- Pillar 2 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
<div class="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">price_check</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Harga HET Terstandar</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Mitra resmi mematuhi Harga Eceran Tertinggi (HET) yang transparan dan adil, menjamin Anda tidak terkena mark-up liar toko oleh-oleh.
          </p>
</div>
<!-- Pillar 3 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
<div class="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">sanitizer</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Segel Utuh &amp; Higienis</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Kemasan toples kaca dengan pengaman goni tradisional dan seal vakum ganda menjaga larutan gula alami bebas dari kontaminasi udara.
          </p>
</div>
<!-- Pillar 4 -->
<div class="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
<div class="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">published_with_changes</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Garansi Tukar Baru</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Jika Anda mendapati cacat segel atau kemasan toples bocor saat pembelian di gerai resmi, mitra kami siap menukar produk baru seketika.
          </p>
</div>
</div>
</div>
</section>
<!-- Section: Callout untuk Pemilik Usaha / Toko Oleh-Oleh -->
<section class="w-full py-16 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="relative w-full rounded-3xl bg-secondary text-on-secondary p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
<!-- Botanical Ambient Glows -->
<div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none"></div>
<div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div class="lg:col-span-8 flex flex-col gap-4">
<div class="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-on-secondary/15 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">store</span>
<span>Peluang Kemitraan Agribisnis Dieng</span>
</div>
<h2 class="font-display-lg text-display-lg text-on-secondary font-extrabold leading-tight">
              Punya Toko Oleh-Oleh, Supermarket, atau Resto? <br class="hidden sm:inline">
<span class="text-primary-fixed">Jadilah Titik Distribusi Resmi Carica Gemilang</span>
</h2>
<p class="font-body-lg text-body-lg text-secondary-fixed max-w-2xl leading-relaxed">
              Daftarkan usaha Anda ke dalam sistem Store Locator kami dan dapatkan eksposur langsung ke ribuan wisatawan dan pencinta kuliner yang mencari buah carica Dieng segar di kotamu.
            </p>
<div class="flex flex-wrap items-center gap-4 pt-3">
<a class="px-7 py-3.5 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-fixed-dim transition-all" data-path="kemitraan" href="/kemitraan">
                Gabung Jadi Mitra &amp; Daftarkan Toko
              </a>
<a class="px-6 py-3.5 rounded-xl bg-on-secondary/15 text-on-secondary hover:bg-on-secondary/25 font-label-lg text-label-lg font-semibold flex items-center gap-2 transition-all" href="https://wa.me/6281234567890?text=Halo%20Tim%20Keagenan%20Carica%20Gemilang,%20saya%20tertarik%20mendaftarkan%20toko%20saya" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[18px] notranslate" translate="no">support_agent</span>
<span>Hubungi Tim Keagenan</span>
</a>
</div>
</div>
<!-- Quick Benefits Badge Box -->
<div class="lg:col-span-4 flex flex-col gap-3 p-6 rounded-2xl bg-on-secondary/10 backdrop-blur-sm">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] notranslate" translate="no">check_circle</span>
<span class="font-label-lg text-label-lg text-on-secondary">Margin Keuntungan Menjanjikan</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] notranslate" translate="no">check_circle</span>
<span class="font-label-lg text-label-lg text-on-secondary">Bantuan Display &amp; Banner Promosi</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] notranslate" translate="no">check_circle</span>
<span class="font-label-lg text-label-lg text-on-secondary">Rekomendasi Rute Pelanggan Terdekat</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] notranslate" translate="no">check_circle</span>
<span class="font-label-lg text-label-lg text-on-secondary">Pendampingan Fresh Inventory Management</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section: Pertanyaan Seputar Pembelian Offline -->
<section class="w-full py-16 bg-surface-container-low">
<div class="max-w-[1000px] mx-auto px-6 lg:px-12 flex flex-col gap-8">
<div class="text-center flex flex-col items-center gap-2">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Panduan Konsumen</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Pertanyaan Umum Seputar Gerai Resmi</h2>
</div>
<div class="flex flex-col gap-4">
<!-- Accordion Item 1 -->
<details class="group p-5 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all cursor-pointer">
<summary class="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold list-none select-none">
<span>Apakah harga di reseller resmi sama dengan harga pabrik di Wonosobo?</span>
<span class="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform notranslate" translate="no">expand_more</span>
</summary>
<div class="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Seluruh reseller dan mitra resmi Carica Gemilang terikat pada standar HET (Harga Eceran Tertinggi) resmi nasional. Terdapat sedikit penyesuaian biaya logistik cold-transport untuk wilayah di luar Pulau Jawa, namun harga tetap dikontrol ketat tanpa mark-up liar yang merugikan konsumen.
          </div>
</details>
<!-- Accordion Item 2 -->
<details class="group p-5 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all cursor-pointer">
<summary class="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold list-none select-none">
<span>Bagaimana cara memverifikasi bahwa gerai tersebut benar-benar mitra resmi?</span>
<span class="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform notranslate" translate="no">expand_more</span>
</summary>
<div class="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Gerai resmi Carica Gemilang selalu dilengkapi sertifikat mitra ber-barcode resmi di etalase toko dan terdaftar di halaman Store Locator ini. Selain itu, toples kaca kami menggunakan segel pita goni khusus dengan hologram keaslian di leher toples.
          </div>
</details>
<!-- Accordion Item 3 -->
<details class="group p-5 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all cursor-pointer">
<summary class="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold list-none select-none">
<span>Apakah saya bisa memesan stok terlebih dahulu via WhatsApp sebelum datang ke toko?</span>
<span class="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform notranslate" translate="no">expand_more</span>
</summary>
<div class="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Tentu bisa! Setiap kartu toko di atas menyediakan tombol langsung "Chat WhatsApp Toko". Anda dapat menanyakan ketersediaan toples jar, paket dus keluarga, maupun meminta toko menyiapkan pesanan oleh-oleh Anda terlebih dahulu sebelum diambil di lokasi.
          </div>
</details>
<!-- Accordion Item 4 -->
<details class="group p-5 rounded-2xl bg-surface-container-lowest shadow-sm open:shadow-md transition-all cursor-pointer">
<summary class="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface font-semibold list-none select-none">
<span>Bagaimana jika kota domisili saya belum memiliki reseller resmi terdekat?</span>
<span class="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform notranslate" translate="no">expand_more</span>
</summary>
<div class="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Jika gerai fisik belum tersedia di kecamatan Anda, Anda tetap dapat memesan secara online langsung dari sentra pengolahan Kejajar Dieng melalui website ini dengan pengemasan bubble wrap kayu bergaransi aman ke seluruh pelosok Indonesia.
          </div>
</details>
</div>
</div>
</section>
</div>
</div>` }} />
      <Footer />
    </>
  );
}
