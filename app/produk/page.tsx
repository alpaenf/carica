import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-80px)]" dangerouslySetInnerHTML={{ __html: `<div class="w-full pt-20"><div class="flex flex-col w-full">
<!-- Catalog Header / Editorial Hero Banner -->
<section class="w-full relative overflow-hidden py-14 lg:py-20 bg-gradient-to-b from-surface-container-low/80 to-surface">
<div class="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
<div class="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-secondary-fixed/25 blur-3xl pointer-events-none"></div>
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
<div class="max-w-3xl flex flex-col gap-5">
<div class="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
<span class="material-symbols-outlined text-[15px] notranslate" translate="no">eco</span>
<span>Authentic High-Altitude Harvest</span>
</div>
<h1 class="font-display-lg text-display-lg text-on-surface tracking-tight text-balance">
          Katalog Produk Olahan Buah Carica Asli Dieng
        </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Dipetik langsung dari perkebunan lereng vulkanik Wonosobo di ketinggian 2.093 mdpl. Pilihan kemasan jar kaca premium, cup praktis, sirup sari buah murni, dan manisan kering higienis tanpa pemanis buatan sintesis.
        </p>
</div>
<!-- Quick Trust Badges -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
<div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div class="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">nutrition</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-on-surface font-bold">100% Buah Segar Pilihan</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Carica pubescens grade super</p>
</div>
</div>
<div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">verified</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-on-surface font-bold">BPOM RI &amp; Halal MUI</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Higienis terstandarisasi resmi</p>
</div>
</div>
<div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div class="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container shrink-0">
<span class="material-symbols-outlined text-[26px] notranslate" translate="no">package_2</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-on-surface font-bold">Kemasan Ekspor &amp; Suvenir</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Aman kirim seluruh Nusantara</p>
</div>
</div>
</div>
</div>
</section>
<!-- Interactive Search, Filter & Controls Bar -->
<section class="w-full sticky top-20 z-40 bg-surface/95 backdrop-blur-md shadow-sm py-4">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col gap-4">
<div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
<!-- Search Input -->
<div class="relative flex-1 max-w-lg">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant notranslate" translate="no">search</span>
<input class="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm" id="searchInput" placeholder="Cari nama produk, kemasan, atau ukuran..." type="text">
</div>
<!-- Sorting & Toggle Controls -->
<div class="flex flex-wrap items-center gap-3">
<div class="relative inline-block">
<select class="appearance-none pl-4 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm" id="sortSelect">
<option value="populer">Urutkan: Produk Terpopuler</option>
<option value="harga-rendah">Harga: Rendah ke Tinggi</option>
<option value="harga-tinggi">Harga: Tinggi ke Rendah</option>
<option value="terbaru">Terbaru</option>
</select>
<span class="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] notranslate" translate="no">expand_more</span>
</div>
<label class="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest cursor-pointer shadow-sm select-none hover:bg-surface-container transition-colors">
<input class="w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary" id="giftFilter" type="checkbox">
<span class="font-label-md text-label-md text-on-surface">Kemasan Hadiah</span>
</label>
<label class="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-container-lowest cursor-pointer shadow-sm select-none hover:bg-surface-container transition-colors">
<input class="w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary" id="wholesaleFilter" type="checkbox">
<span class="font-label-md text-label-md text-on-surface">Promo Grosir</span>
</label>
</div>
</div>
<!-- Category Filter Tabs -->
<div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" id="categoryTabs">
<button class="category-btn active px-4 py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md shrink-0 transition-all shadow-sm" data-cat="all">
          Semua Produk (8)
        </button>
<button class="category-btn px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all shadow-sm" data-cat="jar">
          Jar Kaca Premium (3)
        </button>
<button class="category-btn px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all shadow-sm" data-cat="cup">
          Cup Praktis / Harian (2)
        </button>
<button class="category-btn px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all shadow-sm" data-cat="sirup">
          Sirup Sari Carica (2)
        </button>
<button class="category-btn px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container font-label-md text-label-md shrink-0 transition-all shadow-sm" data-cat="manisan">
          Manisan Kering &amp; Olahan Khusus (1)
        </button>
</div>
</div>
</section>
<!-- Product Catalog Grid -->
<section class="w-full py-12 lg:py-16">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<!-- Active Results Indicator -->
<div class="flex items-center justify-between pb-8">
<div class="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
<span>Menampilkan</span>
<span class="font-bold text-on-surface" id="itemCount">8</span>
<span>produk olahan carica pilihan</span>
</div>
<div class="hidden sm:flex items-center gap-2 font-body-sm text-body-sm text-tertiary">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">local_shipping</span>
<span>Pengiriman aman dengan bubble wrap ganda &amp; kardus corrugated</span>
</div>
</div>
<!-- Catalog Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="productGrid">
<!-- Product 1 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="jar" data-gift="true" data-price="35000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img alt="Carica Dieng Premium Jar Kaca 350g" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBykQKpjyd8zY_fBxa9pop7Ng9k1NJ7Qfp6wVPHZbzZ8p7C_w36Mr5YmojMhFow0C7FqZ4K07J188GmwN0-go1o0DBOd9eTSxyT3cHZJ_Io1V11Y-DzjNYI_jYEg-lBqQQ5MINKA6nvqtEfIpgMFch9uywtKZegv-0KWGHGMYpzR_b_EnhpUt-3SzbFrr5bAboV5JQ6_7-lVDZOIAX8mAgkYLWeWNNAg08NWgkzLtQi">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  Terlaris
                </span>
<span class="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-bold">
                  Rekomendasi Oleh-oleh
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Jar Kaca
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Jar Kaca Premium</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Carica Dieng Premium Jar Kaca 350g
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Potongan buah carica renyah dalam sirup gula tebu murni. Wadah toples kaca kedap udara elegan bernuansa heritage.
              </p>
<!-- Specs Micro-chips -->
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Netto 350g</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Isi Buah 65%</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Tahan 12 Bln</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 35.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ jar</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Grosir: Rp 30.000 (min. 12 jar)</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Carica%20Dieng%20Premium%20Jar%20Kaca%20350g" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 2 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="jar" data-gift="true" data-price="115000" data-wholesale="false">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Commercial luxury product packaging photography of Carica Dieng Gift Box Hampers featuring an elegant cream hardbox with golden Dieng batik debossed motifs, jute twine ribbon tie, containing 3 premium glass jars of golden carica fruit slices in clear syrup, isolated on soft studio warm beige surface, warm rim lighting, ultra sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHO-XKyFcLwF8bv9V_gO6TN8j69QXDamPxFOuG-UQOSyzWuN_vugA7dZd-BKibUjnXOxVcvBMGGyaUJyoUhGp-nAGIZGIO_pvrSkzCPXtsfoUHjwSAhBoqadv7YPuellUZcTiXnK6UBJi71zOjVVjsMkbraWGmLmfUX3QBtDQOrS8rHBFq75OZ74ony_-3UMy04MTcpTJlQilc7qd0tfnIgQfEHxF--lHfxvgXV-5M">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold shadow-sm">
                  Edisi Suvenir Mewah
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Hardbox Set
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Jar Kaca Premium</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Carica Dieng Gift Box Hampers (Isi 3 Jar)
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Paket bingkisan eksklusif dengan kotak hardbox motif batik Dieng, pita rami, dan kartu ucapan kustom.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">3 x 350g</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Hardbox Kokoh</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Free Greeting Card</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 115.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ box</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Cocok untuk parcel VIP &amp; korporat</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Gift%20Box%20Hampers%20Carica" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 3 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="cup" data-gift="false" data-price="48000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High resolution commercial studio packshot of Carica Cup Family Pack showing 12 clear sealed cups with vibrant golden carica slices inside crisp cardboard carrier box, condensation drops on plastic lid, bright high-key tropical morning lighting, warm cream background, appetizing and fresh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDou0SG3od8IKd41U_XfHjlB3tKIXTNel9MRr_Xk8nXo30A1ge3YVNHD4DWugDPD4ocw21jIVdRnx08R4iW9OcDzVAWXrf9M5nk45iwcZJwKTTCNT0nS-pcHoLaoXS1IyGu53B8fAgZKvlxuwCkIrUCQc32bSW0JnS0J17Z1QQ_8IMnxiFAnljXz0G9zV2NDAA3-y9M4F2Ej3qwhpnyrN17W7rrT5WoiTYGu6Xm5ylu">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  Porsi Keluarga
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Dus Isi 12
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Cup Praktis / Harian</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Carica Cup Family Pack (12 Cup @ 120gr)
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Kemasan cup sealer higienis siap santap langsung bersama keluarga. Paling segar dinikmati dalam keadaan dingin.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">12 Cup x 120gr</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Higienis Seal Cup</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Siap Santap</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 48.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ dus</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Grosir: Rp 42.000 (min. 10 dus)</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Carica%20Cup%20Family%20Pack" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 4 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="cup" data-gift="false" data-price="26000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Packshot of Carica Cup Mini Bento pack of 6 cups with carrying handle packaging, golden yellow mountain carica fruit chunks inside clear cups, wooden rustic table background, natural diffused morning daylight, clean organic minimalist product photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyV6thITSLBUn0LnMRw8BOF2NNkZbXtYAqabhbMq9ecotsWipaZ2lmy375nvrxw5n51V71AW3gycmxzNgZESquc3cm_tUusT9rF-g4p1URFz63JoMHDqg-9Ao0PmkeuVX2vm4tPthI7PvpCPiD0XsVGjNwDZINAwgFugocXehzsoGpQdwwmlfPmjr-KRkii5NXI8spywoNApgvj6-IE4dd4bOIMR1IQwOzZeh5x88">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold shadow-sm">
                  Travel Pack
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Pack Isi 6
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Cup Praktis / Harian</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Carica Cup Mini Bento (6 Cup @ 120gr)
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Kemasan kompak cocok untuk bekal perjalanan dan oleh-oleh praktis ramah bagasi pesawat maupun kereta api.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">6 Cup x 120gr</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Pegangan Tenteng</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Praktis Wisata</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 26.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ pack</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Grosir: Rp 22.500 (min. 15 pack)</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Carica%20Cup%20Mini%20Bento" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 5 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="sirup" data-gift="false" data-price="30000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial commercial photo of a slim elegant 500ml glass bottle of golden Carica syrup concentrate, with authentic botanical paper label, next to a glass of iced carica mocktail garnished with fresh mint leaves and whole carica fruit, clean warm natural light, Dieng aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABGzTIyL5hZ7FcX2ymnMmFfdns6-YAXvM9LSkfh9Z0vTN1S_L3a0agW4Ql-v4yVHA6-kBngiV6H1UST06jY4yZCXI2WLAMj79zXuEm6hr0Vy1yRAH86UTWD4mnDLggvhFHc-1VxfjE82jvIY5LDidt9ObkaMvFTPwuyG7XrbnE5Pss2JdsVMfxnYGY7FW-55KzgwpZcQ8ZXoOuEK6yHzt-LYGDiXE_W4YlCDyF5WyW">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  100% Sari Buah Asli
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Botol 500ml
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Sirup Sari Carica</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Sirup Konsentrat Murni Buah Carica 500ml
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Ekstrak murni sari buah carica khas pegunungan tanpa pengawet sintesis. Cukup dilarutkan air es atau soda segar.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Botol Kaca 500ml</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Rasio 1:4</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Tanpa Pewarna</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 30.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ botol</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Grosir: Rp 25.000 (min. 12 botol)</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Sirup%20Konsentrat%20Carica%20500ml" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 6 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="sirup" data-gift="false" data-price="55000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Commercial agribusiness photo of a 1-liter food grade HDPE jerrycan filled with thick golden carica syrup, clean studio setup with white and forest green background, professional food service packaging label, high resolution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHw0IiwXwFbFhs-u6s07AI61GfSTI77_a54gwKsfwcm8rgqGR0vFRe9jRVgNOzSM82r5KKo8bcldHph0nB0Bud1QyngLANr5cXjG48ibo2z_csQgcYAox8o2dm70UaUzK88ZM9Qgg8ATVUxW3mdvMkg5xCXXo7-8cl-spJOZ0Y4fpN7D-dgVHWHbolndev_qJYi_z7jOF0mTuv81NA8BKtOB2UGCEoIIAkxkjhhqkT">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold shadow-sm">
                  Hemat Usaha / Horeka
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Jerigen 1 Liter
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Sirup Sari Carica</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Sirup Carica Kemasan Jerigen 1 Liter
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Diformulasikan khusus untuk kebutuhan hotel, cafe, dan restoran yang ingin menyajikan signature drink khas Dieng.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Food Grade HDPE</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Ekonomis B2B</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Sertifikasi Halal</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 55.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ jerigen</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Harga grosir Horeka tersedia</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20tanya%20Sirup%20Jerigen%201L%20untuk%20Cafe/Resto" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 7 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="manisan" data-gift="false" data-price="26000" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Packshot of dehydrated dried candied mountain carica fruit inside a premium matte white aluminum stand-up zipper pouch with clear window, revealing chewy translucent golden yellow candied fruit chunks, wooden surface, warm organic styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIY_M6sHXPXBR09UE5WBZSDL7BBFVp2Jm47WOuFBCC5kVeHn6TFtKwu3Nz7Kb1IdHzx5F7JmHCBoA59MbHte3cv0KfTPJsavrgWiLormhy0qJ-yoDtl5FHh5qiEeK-YYAE6o5gnowFIobGsYBB0lcIIN7EbceJbZ8V5V40pHRadRGe15TbQFygW2USufRbzumNBXK_OBXP8BNDWEhSnoN70pgh_3UR7-tACnH4oHRf">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm font-bold shadow-sm">
                  Camilan Sehat
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Pouch 200g
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Manisan Kering &amp; Olahan</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Manisan Kering Buah Carica Spesial 200g
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Dibuat dengan teknik dehidrasi higienis temperatur rendah. Menjaga nutrisi vitamin C dan serat alami buah tetap utuh.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Zipper Pouch</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Rendah Gula</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Kenyal Alami</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 26.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ pouch</span>
</div>
<span class="font-label-sm text-label-sm text-tertiary">Grosir: Rp 22.000 (min. 20 pouch)</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20pesan%20Manisan%20Kering%20Carica%20200g" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
<!-- Product 8 -->
<article class="product-item group flex flex-col justify-between rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" data-category="jar" data-gift="true" data-price="16500" data-wholesale="true">
<div>
<div class="relative w-full aspect-square bg-surface-container-low overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Delicate product photo of mini glass jar 150g carica jam with rustic twine wrap and custom calligraphy wedding favor tag, placed on textured linen tablecloth beside soft botanicals, soft golden hour sunlight, luxury souvenir aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_1Cb9qnPaqQ8Smhjxa7z6-Qo8i0NpYQtLWHU4_uSfnaHzwQu0_2NaBdhRasd0ehFSx2GV3Gtp8wT_bEFNLLlZ9ceuXWkhvcK7FtDoZ76Wc10Gce-xIrclAJ0PiM9Cg_8qR76qC6fo22hqwr6ENgt7WbkiwgCrgE5s5rg0dO9EgK0SJFyCO9iIJcFdBDFIiWTKeF0G716NLFnlomw-b7bzsgH4Jc6_zYt5S4382VL">
<div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
<span class="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  Pre-Order Event
                </span>
</div>
<span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                Mini 150g
              </span>
</div>
<div class="p-5 flex flex-col gap-3">
<span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Jar Kaca Premium</span>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-secondary transition-colors line-clamp-1">
                Carica Jar Mini Souvenir 150g (Custom Event)
              </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Kemasan toples mini dengan opsi custom label nama pernikahan, gathering instansi, atau suvenir eksklusif acara Anda.
              </p>
<div class="flex flex-wrap items-center gap-1.5 pt-1">
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Netto 150g</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Min. Order 50 pcs</span>
<span class="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Custom Label Free</span>
</div>
</div>
</div>
<div class="p-5 pt-0 flex flex-col gap-4">
<div class="flex flex-col">
<div class="flex items-baseline gap-1.5">
<span class="font-title-md text-title-md text-secondary font-bold">Rp 16.500</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ jar</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Pengerjaan 3-7 hari kerja</span>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim text-center font-label-md text-label-md font-bold transition-all shadow-sm" href="/produk/detail">
                Lihat Detail
              </a>
<a aria-label="Pesan via WhatsApp" class="p-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20tertarik%20konsultasi%20Jar%20Mini%20Souvenir%20Event" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
</a>
</div>
</div>
</article>
</div>
<!-- Empty State -->
<div class="hidden flex-col items-center justify-center py-20 text-center" id="emptyState">
<div class="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-4">
<span class="material-symbols-outlined text-[32px] notranslate" translate="no">inventory_2</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold">Tidak ada produk ditemukan</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-1">
          Coba gunakan kata kunci pencarian lain atau ubah kategori filter produk.
        </p>
<button class="mt-4 px-5 py-2 rounded-xl bg-primary-container text-on-secondary-fixed font-label-md text-label-md font-bold shadow-sm hover:bg-primary-fixed-dim transition-all" id="resetFilters">
          Reset Semua Filter
        </button>
</div>
</div>
</section>
<!-- Wholesale / B2B & Reseller Feature Showcase -->
<section class="w-full py-16 bg-surface-container-low">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="relative overflow-hidden rounded-3xl bg-secondary text-on-secondary p-8 sm:p-12 lg:p-16 shadow-xl">
<!-- Botanical decorative overlay rings -->
<div class="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border-[40px] border-primary-container/10 pointer-events-none"></div>
<div class="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-tertiary/20 blur-2xl pointer-events-none"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div class="lg:col-span-7 flex flex-col gap-6">
<div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold w-fit uppercase tracking-wider">
<span class="material-symbols-outlined text-[16px] notranslate" translate="no">storefront</span>
<span>Peluang Kemitraan Agribisnis Dieng</span>
</div>
<h2 class="font-display-lg text-display-lg font-bold leading-tight text-balance">
              Ingin Membuka Usaha Oleh-Oleh atau Menjadi Reseller Resmi Carica Gemilang?
            </h2>
<p class="font-body-md text-body-md text-on-secondary/90 leading-relaxed max-w-2xl">
              Dapatkan pasokan tangan pertama langsung dari pabrik pengolahan di Wonosobo dengan margin kompetitif, jaminan kontinuitas pasokan buah segar berkualitas, serta sertifikasi lengkap untuk penjualan modern.
            </p>
<!-- Benefit Pillars -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] shrink-0 mt-0.5 notranslate" translate="no">percent</span>
<div>
<h4 class="font-label-lg text-label-lg font-bold text-on-secondary">Margin Hingga 35%</h4>
<p class="font-body-sm text-body-sm text-on-secondary/80">Skema diskon berjenjang sesuai volume</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] shrink-0 mt-0.5 notranslate" translate="no">verified_user</span>
<div>
<h4 class="font-label-lg text-label-lg font-bold text-on-secondary">Garansi Retur 100%</h4>
<p class="font-body-sm text-body-sm text-on-secondary/80">Penggantian aman jika terjadi pecah saat kirim</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] shrink-0 mt-0.5 notranslate" translate="no">campaign</span>
<div>
<h4 class="font-label-lg text-label-lg font-bold text-on-secondary">Materi Promosi Gratis</h4>
<p class="font-body-sm text-body-sm text-on-secondary/80">Banner, foto resolusi tinggi &amp; panduan jualan</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-fixed text-[22px] shrink-0 mt-0.5 notranslate" translate="no">local_shipping</span>
<div>
<h4 class="font-label-lg text-label-lg font-bold text-on-secondary">Ekspedisi Khusus Pangan</h4>
<p class="font-body-sm text-body-sm text-on-secondary/80">Tarif kargo ekonomis ke seluruh pulau Jawa &amp; luar pulau</p>
</div>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-wrap items-center gap-4 pt-4">
<a class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold hover:bg-primary-fixed-dim transition-all shadow-md" href="/kemitraan">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">download</span>
<span>Download Katalog Grosir (PDF)</span>
</a>
<a class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest/15 backdrop-blur-md text-on-secondary hover:bg-surface-container-lowest/25 font-label-lg text-label-lg font-bold transition-all" href="https://wa.me/6281234567890?text=Halo%20Tim%20Carica%20Gemilang,%20saya%20ingin%20konsultasi%20menjadi%20reseller/agen%20grosir" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px] notranslate" translate="no">chat</span>
<span>Konsultasi Kemitraan WhatsApp</span>
</a>
</div>
</div>
<!-- Infographic Data Box -->
<div class="lg:col-span-5 flex flex-col gap-4">
<div class="p-6 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md shadow-inner flex flex-col gap-4">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-primary-fixed uppercase tracking-wider font-bold">Traceability &amp; Batch Metrics</span>
<span class="material-symbols-outlined text-primary-fixed notranslate" translate="no">award_star</span>
</div>
<!-- Mini SVG Sparkline / Progress Vis -->
<div class="flex items-center justify-between pt-2">
<div class="flex flex-col">
<span class="font-headline-md text-headline-md font-bold text-on-secondary">18.500+</span>
<span class="font-body-sm text-body-sm text-on-secondary/70">Jar Terdistribusi / Bulan</span>
</div>
<div class="w-32 h-10">
<svg class="w-full h-full stroke-primary-container fill-none" stroke-linecap="round" stroke-width="2.5" viewBox="0 0 128 40">
<path d="M4 32 L28 26 L52 30 L76 14 L100 18 L124 6"></path>
</svg>
</div>
</div>
<div class="h-px w-full bg-on-secondary/15 my-1"></div>
<div class="grid grid-cols-2 gap-3 text-left">
<div class="p-3 rounded-xl bg-surface-container-lowest/5">
<span class="block font-headline-sm text-headline-sm font-bold text-primary-fixed">142+</span>
<span class="font-label-sm text-label-sm text-on-secondary/80">Mitra Reseller Aktif</span>
</div>
<div class="p-3 rounded-xl bg-surface-container-lowest/5">
<span class="block font-headline-sm text-headline-sm font-bold text-primary-fixed">99.4%</span>
<span class="font-label-sm text-label-sm text-on-secondary/80">Kepuasan Pengiriman</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Product Catalog FAQ Section -->
<section class="w-full py-16 lg:py-24 bg-surface">
<div class="max-w-[1320px] mx-auto px-6 lg:px-12">
<div class="max-w-2xl mx-auto text-center flex flex-col gap-3 pb-12">
<span class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Pertanyaan Sering Diajukan</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
          Panduan Pembelian &amp; Informasi Produk
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant">
          Segala hal yang perlu Anda ketahui mengenai kualitas, masa simpan, dan prosedur pengiriman produk Carica Gemilang.
        </p>
</div>
<div class="max-w-3xl mx-auto flex flex-col gap-4" id="faqAccordion">
<!-- FAQ 1 -->
<div class="faq-item rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
<button aria-expanded="false" class="faq-toggle w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none">
<span class="font-title-md text-title-md text-on-surface font-bold">
              Berapa lama daya tahan produk Carica Gemilang tanpa pengawet sintetis?
            </span>
<span class="material-symbols-outlined faq-icon text-on-surface-variant transition-transform duration-300 notranslate" translate="no">expand_more</span>
</button>
<div class="faq-content max-h-0 overflow-hidden transition-all duration-300 px-6">
<div class="pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Produk Carica Gemilang kemasan Jar Kaca dan Cup Praktis memiliki masa simpan hingga 12 bulan pada suhu ruang sebelum segel dibuka. Ketahanan alami ini didapatkan melalui proses pasteurisasi ganda berstandar industri pangan dan sifat pengawet alami dari sirup gula tebu murni, sehingga 100% bebas dari bahan kimia benzoat atau pemanis sintetis.
            </div>
</div>
</div>
<!-- FAQ 2 -->
<div class="faq-item rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
<button aria-expanded="false" class="faq-toggle w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none">
<span class="font-title-md text-title-md text-on-surface font-bold">
              Apakah produk dalam toples kaca aman dikirim ke luar pulau Jawa?
            </span>
<span class="material-symbols-outlined faq-icon text-on-surface-variant transition-transform duration-300 notranslate" translate="no">expand_more</span>
</button>
<div class="faq-content max-h-0 overflow-hidden transition-all duration-300 px-6">
<div class="pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sangat aman. Setiap toples kaca kami lindungi dengan lapisan air-bubble wrap tebal, sekat pelindung kardus tebal, dan packing kayu opsional untuk ekspedisi luar pulau. Kami juga memberikan garansi penggantian penuh jika terjadi kerusakan fisik atau kebocoran segel selama dalam perjalanan kurir.
            </div>
</div>
</div>
<!-- FAQ 3 -->
<div class="faq-item rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all">
<button aria-expanded="false" class="faq-toggle w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none">
<span class="font-title-md text-title-md text-on-surface font-bold">
              Bagaimana syarat pembelian grosir atau bergabung menjadi kemitraan reseller?
            </span>
<span class="material-symbols-outlined faq-icon text-on-surface-variant transition-transform duration-300 notranslate" translate="no">expand_more</span>
</button>
<div class="faq-content max-h-0 overflow-hidden transition-all duration-300 px-6">
<div class="pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Pembelian grosir dapat dimulai dari minimum 10 hingga 12 unit untuk setiap varian produk. Untuk reseller dan agen resmi, Anda cukup mendaftar melalui form kemitraan WhatsApp kami dengan pembelian perdana paket starter, dan Anda akan langsung mendapatkan proteksi area penjualan serta dukungan materi promosi digital dan cetak.
            </div>
</div>
</div>
</div>
</div>
</section>
<!-- Interactive Client-side Script -->

</div></div>` }} />
      <Footer />
    </>
  );
}
