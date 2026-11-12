import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-80px)]" dangerouslySetInnerHTML={{ __html: `<div class="w-full pt-20"><div class="flex flex-col w-full">
<!-- Main Product Showcase Grid -->
<section class="max-w-[1320px] w-full mx-auto px-6 lg:px-12 py-6">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
<!-- Left Column: Media Showcase (5 cols on lg) -->
<div class="lg:col-span-6 flex flex-col gap-6">
<!-- Main Stage Image -->
<div class="relative w-full aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-sm group">
<img alt="Carica Dieng Premium Jar Kaca 350g" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A luxurious close-up studio shot of a 350g glass jar filled with luminous golden candied Carica fruit slices suspended in glistening pure sugar syrup, rustic twine bow around the lid, craft paper tag, natural daylight catching dew drops on the glass against a soft warm cream linen background." id="main-preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5p8gFVOY0FvFdyIuLHtSG0SwlvuidpAG1WYZPBrHLvo7TSBA4ZdnDcOZ8fw9QlD3rAhpe4eJOJNrDzPze9t5wNkU8qCBwQa05DzMycZODCimd1Kuiuqs0zxhTx81nvxj7P2RAkHc5kiM3fMHJXkCNNU9Jly8qI55pmn_80JVWMZENxvlvjbEa0K6in-OYQIpAF4i3xETarzSE9AUmFAJVERxSr0EEWSjrJjtYjN52">
<!-- Origin & Authenticity Floating Badge -->
<div class="absolute top-4 left-4 z-10 flex flex-col gap-2">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm">
<span class="material-symbols-outlined text-[14px]">verified</span>
              Grade A+ Petani Kejajar
            </span>
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-sm">
<span class="material-symbols-outlined text-[14px]">altitude</span>
              2.093 mdpl Highland
            </span>
</div>
<!-- Glass Zoom Hint -->
<button aria-label="Perbesar gambar" class="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-container-lowest shadow-sm transition-transform active:scale-95">
<span class="material-symbols-outlined text-[20px]">zoom_in</span>
</button>
</div>
<!-- Thumbnails Strip -->
<div class="grid grid-cols-4 gap-3">
<button class="thumb-btn active relative rounded-xl overflow-hidden aspect-square bg-surface-container-lowest shadow-sm transition-all p-1 ring-2 ring-secondary" onclick="changeThumbnail(0)">
<img alt="Front Jar 350g" class="w-full h-full object-cover rounded-lg" data-alt="Classic front angle of the Carica Dieng glass jar with burlap tie, golden yellow fruit slices gleaming inside clear syrup, soft natural wooden tabletop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtZGu2Rlexk38dpV9BS60xj5tcaDPJOs8cfWb3UDdrx8P4vgMCrY3GJWMte1QsYMXALI8RL9bMVDSc-HkrZRdhey0tM2aWABZ8_JUEDjaFtU5jEzxDO6qVAjt4mvGxC8zXL6wRbuK_npur6CV4kOsstnxoYNOjxXYtgfx94fVvB6pk87YWNJwhBnrx5SSZgBQvDQXgdIcTXYjKiNRlNftkJh6ucsmz2x1xDbKm-sq">
</button>
<button class="thumb-btn relative rounded-xl overflow-hidden aspect-square bg-surface-container-lowest shadow-sm transition-all p-1 hover:ring-2 hover:ring-secondary/50" onclick="changeThumbnail(1)">
<img alt="Irisan Buah &amp; Kuah" class="w-full h-full object-cover rounded-lg" data-alt="Macro detail shot of translucent ripe carica mountain papaya fruit slices spooned out into a rustic ceramic dish, crystal clear syrup dripping deliciously." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2YGfY8GUbiEZUqNxWImjWN7rhABg-Tz9X15hIJCQJbBEAtY9NAKdPfHPNo4wrPzfvl9sF0LhHtRRKK20JAO20X2NKizqEOF7vK2k3Z9EZJ3uDXW5QOvywCu30mwK1GKSieGjzpzIIlDgxhso5MvbFxu-Y83Ub1d86ez_MhHS06_OWpqGgN5fVQS28NdwtAGo8N5VdC0BRtrrSMs2whxjBEVO675NC4XvsJ8jTQFF">
</button>
<button class="thumb-btn relative rounded-xl overflow-hidden aspect-square bg-surface-container-lowest shadow-sm transition-all p-1 hover:ring-2 hover:ring-secondary/50" onclick="changeThumbnail(2)">
<img alt="Packaging Segel Alami" class="w-full h-full object-cover rounded-lg" data-alt="Close up of hermetic golden vacuum metal lid with natural jute twine wrapping and artisanal kraft paper tag reading Carica Dieng Premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtfQEP6aHRaLzml8-zpu11TzjyBypOyGk5i2REZUy77Jn4mv9tZjbNtFv7_mHmBj76nIVyk40Abrk6NguFOfdV9INOx7RSCCxjMRpjnobeho4sAjoW635qLoMt7UXEjM5mYJax9JUAOIFecnDHznz2V0f9uWIGgJH3Ez7GxpLc-UD_NqeDWErnt1D0xAnhezLgEcSibAMwOU98JWqjewCFSDPo-C9LlkwDxooXCAPS">
</button>
<button class="thumb-btn relative rounded-xl overflow-hidden aspect-square bg-surface-container-lowest shadow-sm transition-all p-1 hover:ring-2 hover:ring-secondary/50" onclick="changeThumbnail(3)">
<img alt="Penyajian Dingin Segar" class="w-full h-full object-cover rounded-lg" data-alt="Chilled serving suggestion of golden carica slices in a faceted glass tumbler with ice cubes, mint leaf garnish, condensation and sunlit morning warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUltuVvEY7_Zx0QMBbWM4JjqkAyQn-xLsyzfcUv9Nuzqjh93F60898vF2uWVvvTZbz3C5Zs2N4ufGQVugpDmrsOgYyJ84czL5NAqq6Ezi0uHNaqK-mnwsTHkHqYbCLeOHuOev1nbSCYQBcwnD1I9MloRcJAEULoFAkFUjyMjYel3E8_hF9n08f0EqG3yFtrvcA2--ew6IjxnJtGEYfg4V0Qoy1YrvDgeVshh9WYxuS">
</button>
</div>
<!-- Shipping & Packaging Guarantee Bar -->
<div class="grid grid-cols-2 gap-3 p-4 rounded-xl bg-surface-container-low">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span class="material-symbols-outlined text-[20px]">shield</span>
</div>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">Kaca Food-Grade</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Standar Ekspor Steril</p>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span class="material-symbols-outlined text-[20px]">inventory_2</span>
</div>
<div>
<p class="font-label-md text-label-md font-bold text-on-surface">Garansi Pecah</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Bubble 5 Lapis + Dus Kayu</p>
</div>
</div>
</div>
</div>
<!-- Right Column: Specs, Tier Pricing & Cart CTAs (6 cols on lg) -->
<div class="lg:col-span-6 flex flex-col gap-6">
<!-- Category & Badges -->
<div class="flex flex-wrap items-center gap-2">
<span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
            Jar Kaca Premium • Signature Collection
          </span>
<span class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            Netto 350g (Isi Padat 225g)
          </span>
</div>
<!-- Product Name & Social Proof -->
<div class="flex flex-col gap-2">
<h1 class="font-display-lg text-display-lg font-bold text-on-surface leading-tight tracking-tight">
            Carica Dieng Premium Jar Kaca 350g
          </h1>
<div class="flex flex-wrap items-center gap-3">
<div class="flex items-center gap-1 text-primary">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="font-label-lg text-label-lg font-bold text-on-surface">5.0</span>
</div>
<span class="text-outline-variant">•</span>
<span class="font-label-md text-label-md text-on-surface-variant underline decoration-dotted">340+ Ulasan Terverifikasi</span>
<span class="text-outline-variant">•</span>
<span class="inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold">
<span class="material-symbols-outlined text-[16px]">local_mall</span>
              12.800+ Jar Terjual
            </span>
</div>
</div>
<!-- Price Tiering Container -->
<div class="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4">
<div class="flex flex-wrap items-baseline justify-between gap-2">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Harga Satuan Eceran</span>
<div class="flex items-baseline gap-2">
<span class="font-display-lg text-display-lg font-bold text-secondary" id="price-display">Rp 35.000</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">/ jar</span>
</div>
</div>
<span class="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
              Ready Stock Batch Anyar
            </span>
</div>
<!-- Wholesale Tier Info Table -->
<div class="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2">
<div class="flex items-center justify-between font-label-sm text-label-sm text-secondary font-bold">
<span class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">loyalty</span>
                Program Harga Grosir &amp; Rombongan
              </span>
<span class="text-on-surface-variant font-normal">Otomatis Terpotong</span>
</div>
<div class="grid grid-cols-2 gap-2 text-center">
<div class="p-2 rounded-lg bg-surface-container-lowest shadow-xs">
<span class="font-label-sm text-label-sm text-on-surface-variant block">Beli 6 - 11 jar</span>
<span class="font-label-lg text-label-lg font-bold text-on-surface">Rp 31.000 <span class="text-[12px] font-normal text-on-surface-variant">/jar</span></span>
</div>
<div class="p-2 rounded-lg bg-secondary/10 shadow-xs">
<span class="font-label-sm text-label-sm text-secondary font-bold block">Beli ≥ 12 jar (1 Karton)</span>
<span class="font-label-lg text-label-lg font-bold text-secondary">Rp 28.500 <span class="text-[12px] font-normal text-on-surface-variant">/jar</span></span>
</div>
</div>
</div>
</div>
<!-- Short Description -->
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Varian paling diminati untuk cenderamata mewah dan suguhan istimewa. Dibuat eksklusif dari buah carica matang pohon di lereng Dieng pada ketinggian di atas 2.000 mdpl dengan kuah sirup gula tebu murni 100% tanpa aspartam maupun pengawet sintetis.
        </p>
<!-- Packaging Options / Variants -->
<div class="flex flex-col gap-2.5">
<label class="font-label-md text-label-md font-bold text-on-surface">Pilih Kemasan / Paket:</label>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5" id="variant-group">
<button class="variant-opt active p-3 rounded-xl bg-secondary text-on-secondary text-left transition-all shadow-sm" onclick="selectVariant(this, 35000, 'Jar Satuan 350g')" type="button">
<span class="font-label-md text-label-md font-bold block">Jar Satuan 350g</span>
<span class="font-body-sm text-body-sm opacity-90">Kemasan Kaca Eksklusif</span>
</button>
<button class="variant-opt p-3 rounded-xl bg-surface-container-low text-on-surface text-left transition-all hover:bg-surface-container" onclick="selectVariant(this, 102000, 'Gift Box Isi 3 Jar')" type="button">
<span class="font-label-md text-label-md font-bold block">Gift Box (3 Jar)</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Dus Jinjing Kraft</span>
</button>
<button class="variant-opt p-3 rounded-xl bg-surface-container-low text-on-surface text-left transition-all hover:bg-surface-container" onclick="selectVariant(this, 342000, 'Karton 12 Jar')" type="button">
<span class="font-label-md text-label-md font-bold block">Karton Dus (12 Jar)</span>
<span class="font-body-sm text-body-sm text-secondary font-semibold">Hemat Rp 78.000</span>
</button>
</div>
</div>
<!-- Quantity Counter and Action Buttons -->
<div class="flex flex-col gap-3 pt-2">
<div class="flex items-center gap-4">
<div class="flex items-center rounded-xl bg-surface-container-lowest p-1 shadow-sm">
<button aria-label="Kurangi jumlah" class="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onclick="adjustQty(-1)">
<span class="material-symbols-outlined text-[18px]">remove</span>
</button>
<input class="w-12 text-center font-headline-sm text-headline-sm font-bold bg-transparent text-on-surface select-none" id="qty-val" readonly="" type="text" value="1">
<button aria-label="Tambah jumlah" class="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onclick="adjustQty(1)">
<span class="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
<div class="flex-1">
<p class="font-label-sm text-label-sm text-on-surface-variant">Estimasi Subtotal:</p>
<p class="font-headline-sm text-headline-sm font-bold text-on-surface" id="subtotal-display">Rp 35.000</p>
</div>
</div>
<!-- Primary CTA WhatsApp Order -->
<div class="grid grid-cols-1 sm:grid-cols-12 gap-3">
<a class="sm:col-span-8 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary-container hover:bg-primary-fixed-dim text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:-translate-y-0.5 transition-all text-center" href="https://wa.me/6281234567890?text=Halo%20Carica%20Gemilang,%20saya%20ingin%20memesan%201%20Jar%20Carica%20Dieng%20Premium%20350g." id="wa-cta" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[22px]">chat</span>
<span>Pesan via WhatsApp Sekarang</span>
</a>
<button class="sm:col-span-4 flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-secondary font-label-lg text-label-lg font-bold transition-all text-center" onclick="openInquiryModal()" type="button">
<span class="material-symbols-outlined text-[18px]">corporate_fare</span>
<span>Grosir / B2B</span>
</button>
</div>
</div>
<!-- Trust Badges Matrix (4 Micro-Cards) -->
<div class="grid grid-cols-2 gap-3 pt-2">
<div class="p-3 rounded-xl bg-surface-container-lowest shadow-xs flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified</span>
<div>
<p class="font-label-sm text-label-sm font-bold text-on-surface">BPOM &amp; Halal Resmi</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">MD 203611001099</p>
</div>
</div>
<div class="p-3 rounded-xl bg-surface-container-lowest shadow-xs flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">nature</span>
<div>
<p class="font-label-sm text-label-sm font-bold text-on-surface">100% Gula Tebu Alami</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Tanpa pemanis buatan</p>
</div>
</div>
<div class="p-3 rounded-xl bg-surface-container-lowest shadow-xs flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">schedule</span>
<div>
<p class="font-label-sm text-label-sm font-bold text-on-surface">Jaminan Fresh Batch</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Maks 7 hari dari masak</p>
</div>
</div>
<div class="p-3 rounded-xl bg-surface-container-lowest shadow-xs flex items-start gap-2.5">
<span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">published_with_changes</span>
<div>
<p class="font-label-sm text-label-sm font-bold text-on-surface">Garansi Pecah 100%</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Kirim video unboxing</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Detailed Tabbed Specification Section -->
<section class="max-w-[1320px] w-full mx-auto px-6 lg:px-12 py-10">
<div class="bg-surface-container-lowest rounded-3xl p-6 lg:p-10 shadow-sm flex flex-col gap-8">
<!-- Tab Header Strip -->
<div class="flex flex-wrap items-center gap-2 pb-2">
<button class="tab-pill px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg font-bold transition-all shadow-sm" id="tab-btn-0" onclick="switchTab(0)">
          Deskripsi &amp; Cita Rasa
        </button>
<button class="tab-pill px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-lg text-label-lg font-bold transition-all" id="tab-btn-1" onclick="switchTab(1)">
          Komposisi &amp; Nilai Gizi
        </button>
<button class="tab-pill px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-lg text-label-lg font-bold transition-all" id="tab-btn-2" onclick="switchTab(2)">
          Saran Saji &amp; Penyimpanan
        </button>
</div>
<!-- Tab 0: Deskripsi Lengkap & Karakteristik Rasa -->
<div class="tab-content flex flex-col gap-6" id="tab-panel-0">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div class="lg:col-span-7 flex flex-col gap-4">
<h2 class="font-headline-lg text-headline-lg text-on-surface font-bold">
              Keajaiban Rasa Carica Pubescens Asli Dataran Tinggi Dieng
            </h2>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Carica Dieng Gemilang dipanen secara selektif oleh kelompok tani mitra di Kejajar, Wonosobo pada ketinggian di atas 2.000 mdpl. Papaya gunung tropis ini memiliki tekstur daging buah yang padat, renyah kenyal (tidak lembek), dan aroma harum semerbak yang unik menyerupai perpaduan mangga, nanas, dan markisa.
            </p>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Berbeda dari carica pasaran yang sering menggunakan sari sirup encer atau pemanis sintetis, kami hanya memakai 100% gula kristal tebu alami dan air mata air pegunungan Dieng. Kuahnya kental alami, tidak menyengat di tenggorokan, dan menghasilkan sensasi rasa manis-asam seimbang yang sangat menyegarkan.
            </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div class="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1">
<span class="font-label-md text-label-md font-bold text-secondary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">eco</span>
                  Hand-Picked Selection
                </span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Setiap butir buah disortir manual untuk memastikan tingkat kematangan 85-90% optimal.</span>
</div>
<div class="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1">
<span class="font-label-md text-label-md font-bold text-secondary flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px]">water_drop</span>
                  No Artificial Additives
                </span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Bebas natrium siklamat, tanpa pemanis buatan, dan tanpa perisa kimia sintetik.</span>
</div>
</div>
</div>
<div class="lg:col-span-5">
<div class="relative rounded-2xl overflow-hidden shadow-sm aspect-4/3 bg-surface-container">
<img alt="Pemetikan Tradisional Carica Dieng" class="w-full h-full object-cover" data-alt="Indonesian mountain farmer hand-picking bright yellow carica fruits from trees in misty Dieng plateau terraced hillside with green vegetation and morning mist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy0J3E5mnhR-nBTAhG68j1rmUXuULMcEcOT8ghafWieC3MO5VG7auNyHJKUshrLQ63QaCFnDPNkglSytYhZsY7jFnAo0lhaorFOVlBFoVd-8gJ05pU3y9JPS4HasIOYXNNZv5dYi--g0NYwRLy6bufNKdIoXHzomm8xeMSJx6_MlQP-dBVhsdtr6hnm7dS95b7ulTzrrm7CGNLn3TEj-JtaVsOju6qlx3CG6izAWpm">
<div class="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-5">
<span class="font-label-md text-label-md text-on-primary">Ditanam dan dipanen langsung oleh komunitas petani lokal Wonosobo</span>
</div>
</div>
</div>
</div>
</div>
<!-- Tab 1: Informasi Nilai Gizi & Komposisi -->
<div class="tab-content hidden flex-col gap-6" id="tab-panel-1">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div class="lg:col-span-6 flex flex-col gap-4">
<h3 class="font-headline-md text-headline-md text-on-surface font-bold">Komposisi Bahan Alami</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
              Kami memegang prinsip transparansi dan kemurnian. Seluruh racikan dibuat higienis di pabrik berstandar GMP (Good Manufacturing Practice).
            </p>
<div class="p-5 rounded-2xl bg-surface-container-low flex flex-col gap-3">
<div class="flex items-center justify-between pb-2 border-b border-surface-container-highest">
<span class="font-label-md text-label-md font-bold text-on-surface">Buah Carica Segar Pilihan</span>
<span class="font-label-md text-label-md text-secondary font-bold">65%</span>
</div>
<div class="flex items-center justify-between pb-2 border-b border-surface-container-highest">
<span class="font-label-md text-label-md text-on-surface">Air Sumber Pegunungan Dieng</span>
<span class="font-label-md text-label-md text-secondary font-bold">20%</span>
</div>
<div class="flex items-center justify-between pb-2 border-b border-surface-container-highest">
<span class="font-label-md text-label-md text-on-surface">Gula Tebu Kristal Alami</span>
<span class="font-label-md text-label-md text-secondary font-bold">14.8%</span>
</div>
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-on-surface">Pengatur Keasaman (Asam Sitrat Alami)</span>
<span class="font-label-md text-label-md text-secondary font-bold">0.2%</span>
</div>
</div>
</div>
<div class="lg:col-span-6 flex flex-col gap-4">
<h3 class="font-headline-md text-headline-md text-on-surface font-bold">Tabel Informasi Nilai Gizi</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Ukuran Takaran Saji: 100 gram | Jumlah Sajian per Kemasan: ~3.5</p>
<div class="p-5 rounded-2xl bg-surface-container-low flex flex-col gap-2.5">
<div class="flex items-center justify-between py-1">
<span class="font-label-md text-label-md font-bold text-on-surface">Energi Total</span>
<span class="font-label-md text-label-md font-bold text-on-surface">90 kkal</span>
</div>
<div class="flex items-center justify-between py-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Lemak Total</span>
<span>0 g (0% AKG)</span>
</div>
<div class="flex items-center justify-between py-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Protein</span>
<span>0.6 g (1% AKG)</span>
</div>
<div class="flex items-center justify-between py-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Karbohidrat Total</span>
<span>22 g (7% AKG)</span>
</div>
<div class="flex items-center justify-between py-1 text-on-surface-variant font-body-sm text-body-sm">
<span class="pl-4">Gula Alami</span>
<span>18 g</span>
</div>
<div class="flex items-center justify-between py-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Serat Pangan (Dietary Fiber)</span>
<span>3.2 g (11% AKG)</span>
</div>
<div class="flex items-center justify-between py-1 text-secondary font-label-md text-label-md font-bold pt-2 border-t border-surface-container-highest">
<span>Vitamin C Alami</span>
<span>45 mg (50% AKG)</span>
</div>
<div class="flex items-center justify-between py-1 text-secondary font-label-md text-label-md font-bold">
<span>Kalsium &amp; Enzim Papain Alami</span>
<span>Tinggi</span>
</div>
</div>
</div>
</div>
</div>
<!-- Tab 2: Saran Penyajian & Petunjuk Penyimpanan -->
<div class="tab-content hidden flex-col gap-6" id="tab-panel-2">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3">
<div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span class="material-symbols-outlined text-[24px]">ac_unit</span>
</div>
<h4 class="font-title-md text-title-md font-bold text-on-surface">Paling Nikmat Disajikan Dingin</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Simpan jar di dalam lemari pendingin (kulkas) pada suhu 4°C - 10°C selama 2-3 jam sebelum disantap. Dapat dinikmati langsung atau dicampur ke dalam es campur &amp; mocktail buah.
            </p>
</div>
<div class="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3">
<div class="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined text-[24px]">wb_twilight</span>
</div>
<h4 class="font-title-md text-title-md font-bold text-on-surface">Penyimpanan Sebelum Dibuka</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Tahan hingga 12 bulan dalam kondisi segel rapat belum terbuka. Letakkan di tempat yang sejuk, kering, dan terhindar dari paparan terik sinar matahari langsung.
            </p>
</div>
<div class="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3">
<div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[24px]">kitchen</span>
</div>
<h4 class="font-title-md text-title-md font-bold text-on-surface">Setelah Tutup Dibuka</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Wajib ditutup kembali dengan rapat dan disimpan di chiller kulkas. Disarankan untuk dihabiskan dalam waktu maksimal 7 hari untuk menjaga kesegaran rasa optimal.
            </p>
</div>
</div>
</div>
</div>
</section>
<!-- Corporate / B2B Gifting Callout Banner -->
<section class="max-w-[1320px] w-full mx-auto px-6 lg:px-12 py-6">
<div class="relative overflow-hidden rounded-3xl bg-secondary text-on-secondary p-8 lg:p-12 shadow-md">
<!-- Background Graphic Accents -->
<div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div class="lg:col-span-8 flex flex-col gap-3">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold w-fit">
<span class="material-symbols-outlined text-[16px]">card_giftcard</span>
            Bespoke Event &amp; Corporate Hampers
          </div>
<h2 class="font-headline-lg text-headline-lg font-bold text-on-secondary">
            Perlu Custom Hangtag, Box Kayu Eksklusif, atau Pengadaan Acara?
          </h2>
<p class="font-body-md text-body-md text-secondary-fixed opacity-95 max-w-2xl">
            Kami melayani kustomisasi label nama untuk cenderamata resepsi pernikahan, bingkisan VVIP kementerian, rapat instansi, dan hampers hari raya dengan pengiriman terproteksi ke seluruh Indonesia.
          </p>
</div>
<div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
<a class="px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed-dim text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-sm transition-all text-center flex items-center justify-center gap-2" href="https://wa.me/6281234567890?text=Halo%20Tim%20Carica%20Gemilang,%20saya%20tertarik%20konsultasi%20paket%20hampers%20custom/B2B." rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-[20px]">chat</span>
            Hubungi Tim B2B Gift
          </a>
<button class="px-6 py-3.5 rounded-xl bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-secondary font-label-lg text-label-lg font-semibold transition-all text-center flex items-center justify-center gap-2" onclick="document.getElementById('catalog-modal').classList.remove('hidden')" type="button">
<span class="material-symbols-outlined text-[20px]">download</span>
            Unduh Brosur Katalog Korporat
          </button>
</div>
</div>
</div>
</section>
<!-- Related & Complementary Products Section -->
<section class="max-w-[1320px] w-full mx-auto px-6 lg:px-12 py-12">
<div class="flex flex-col gap-8">
<div class="flex flex-wrap items-end justify-between gap-4">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Koleksi Terpopuler</span>
<h2 class="font-headline-lg text-headline-lg font-bold text-on-surface">Lengkapi Oleh-Oleh Khas Dieng Anda</h2>
</div>
<a class="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary font-bold hover:underline" href="/produk">
          Lihat Semua Produk
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<!-- 3 Recommended Product Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Rec Card 1 -->
<div class="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all">
<div class="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-surface-container-low">
<img alt="Carica Cup Family Pack" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Pack of 12 transparent cups of Carica Dieng in glossy box packaging, clear yellow syrup visible through sealed cups, fresh mountain setting background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChhDIqQ4k6n5w39lNRZU8yR6LOkoNcq1NVqj_Rw9EHfJb-IpRu8jt--pK6VoM9kAQTudIvpsia108egVEgnENDAikMRrjqopaqEKoImgNokHp0qRTWd9xTyzgT1U0rcb4vCEbqdgPPUeFHNQNz4jTc-jZM2J6yDww0TUiE4_EkvDU1nzmIPnQ3BBRaRNYgVgAMBMAHP4OVvCSvu8uZYegQktCgMNUBqBq_IgzZfsWe">
<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold shadow-xs">
              Terlaris Wisata
            </span>
</div>
<div class="flex flex-col gap-1 flex-1">
<span class="font-label-sm text-label-sm text-on-surface-variant">Kemasan Cup Praktis</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
              Carica Cup Family Pack (12 Cup)
            </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Kemasan cup sekali santap yang higienis dan praktis dibawa bepergian bersama keluarga.
            </p>
</div>
<div class="flex items-center justify-between pt-2 border-t border-surface-container">
<span class="font-title-md text-title-md font-bold text-on-surface">Rp 48.000</span>
<a class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md font-bold transition-all" href="/produk/detail">
              Detail Produk
            </a>
</div>
</div>
<!-- Rec Card 2 -->
<div class="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all">
<div class="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-surface-container-low">
<img alt="Sirup Sari Buah Carica Asli" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Glass bottle 500ml filled with rich golden carica pure fruit syrup extract, elegant kraft label, condensation drops, surrounded by halved carica fruits." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB17pCV_wVdUpTnb34ZqqF8OjjsD6i6hC9arhA_lEe04bS0VgweYLCwUJSgO-WodxrhKDPKt-3z425phV548ozyT1k_VAvI1GqA6EIgSsMssn1vODkmQpWMhB8PfgYzb3e0CCEkOWImO3pL1L-hiXhQTmhPWPuzE0T_0yPcL21Jqg2Vj12l3qj_CbXsrSlmzMMgi2PDDIuMr1PxtFcpVF8Spffx5ZTVwlko15_6rrIc">
<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-xs">
              Konsentrat Murni
            </span>
</div>
<div class="flex flex-col gap-1 flex-1">
<span class="font-label-sm text-label-sm text-on-surface-variant">Sirup Konsentrat</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
              Sirup Sari Buah Carica 500ml
            </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Ekstrak sari carica kental untuk minuman segar, topping es krim, maupun campuran puding lezat.
            </p>
</div>
<div class="flex items-center justify-between pt-2 border-t border-surface-container">
<span class="font-title-md text-title-md font-bold text-on-surface">Rp 30.000</span>
<a class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md font-bold transition-all" href="/produk/detail">
              Detail Produk
            </a>
</div>
</div>
<!-- Rec Card 3 -->
<div class="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all">
<div class="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-surface-container-low">
<img alt="Manisan Kering Carica Spesial" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern stand-up pouch of dried candied carica fruit chewy snack with clear window showing golden yellow fruit bites on wooden background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZiRGQp9YPQ-gB_ZwR57gv2kmFDRkCTDxwGXZVRns0swcqE9bVTxFmu3OQTUMgNUXwxumKmNLHWrLfq2N7gZcXvB66Ae6R1SfpDkutqQFkDs9b5Doj0V6tCaUbtbuoj_R8al6TKwOp1_-gAKT9C31oMEo_u0cYJcooAnFz-p0OAIJQVfPfxrHU0ryeVTugpRMIrPTxjHE1k6c_yn7POJv7_5Q_aoYEN-uwkVSmKOwa">
<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold shadow-xs">
              Camilan Kering
            </span>
</div>
<div class="flex flex-col gap-1 flex-1">
<span class="font-label-sm text-label-sm text-on-surface-variant">Pouch 200g</span>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
              Manisan Kering Carica Spesial
            </h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Tekstur kenyal manis legit dengan taburan gula halus tipis, tanpa rasa lengket berlebih.
            </p>
</div>
<div class="flex items-center justify-between pt-2 border-t border-surface-container">
<span class="font-title-md text-title-md font-bold text-on-surface">Rp 26.000</span>
<a class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md font-bold transition-all" href="/produk/detail">
              Detail Produk
            </a>
</div>
</div>
</div>
</div>
</section>
<!-- Simple Modal Dialog for B2B Inquiry -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm hidden p-4" id="inquiry-modal">
<div class="bg-surface-container-lowest max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-5">
<div class="flex items-center justify-between">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Permintaan Penawaran Grosir</h3>
<button class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high" onclick="closeInquiryModal()">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">
        Silakan isi data estimasi kebutuhan souvenir atau reseller Anda. Admin sales kami akan mengirimkan invoice resmi dan diskon bertingkat.
      </p>
<form class="flex flex-col gap-3" onsubmit="handleInquirySubmit(event)">
<div>
<label class="font-label-sm text-label-sm font-bold text-on-surface block mb-1">Nama Instansi / Pemesan</label>
<input class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Contoh: PT Semesta Mandiri / Ibu Ratna" required="" type="text">
</div>
<div>
<label class="font-label-sm text-label-sm font-bold text-on-surface block mb-1">Nomor WhatsApp Aktif</label>
<input class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="081234567890" required="" type="tel">
</div>
<div>
<label class="font-label-sm text-label-sm font-bold text-on-surface block mb-1">Estimasi Jumlah (Jar/Karton)</label>
<input class="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary" min="12" placeholder="Minimal 12 jar (1 karton)" required="" type="number">
</div>
<button class="mt-2 w-full py-3 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-on-secondary-fixed-variant transition-all" type="submit">
          Kirim Form Penawaran
        </button>
</form>
</div>
</div>
<!-- Modal for Catalog Download Notice -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm hidden p-4" id="catalog-modal">
<div class="bg-surface-container-lowest max-w-md w-full rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-center">
<div class="w-12 h-12 rounded-full bg-secondary-container text-secondary mx-auto flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">task_alt</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Katalog Korporat 2026 Tersedia</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">
        File PDF katalog lengkap dengan spesifikasi gift box dan pricelist kemitraan telah disiapkan.
      </p>
<div class="flex items-center gap-3 pt-2">
<button class="flex-1 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold" onclick="document.getElementById('catalog-modal').classList.add('hidden')">Tutup</button>
<a class="flex-1 py-2.5 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md font-bold" href="/kemitraan" onclick="alert('Mengunduh Katalog Carica Gemilang...'); document.getElementById('catalog-modal').classList.add('hidden')">Unduh PDF</a>
</div>
</div>
</div>
</div>
</div>` }} />
      <Footer />
    </>
  );
}
