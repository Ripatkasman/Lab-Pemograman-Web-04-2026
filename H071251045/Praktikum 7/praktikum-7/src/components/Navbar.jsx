function Navbar({ jumlahItem, totalHarga, formatRupiah }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e9dfd4]/80 bg-[#C08552]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#atas" className="flex min-w-0 items-center gap-3" aria-label="Kedai Kopi Senja, kembali ke atas">

          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-bold leading-tight sm:text-xl">Kopi Markopi</span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white">Ngopi bersama mang Komar</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white md:flex" aria-label="Navigasi utama">
          <a href="#menu" className="transition hover:text-[#75462f]">Menu</a>
          <a href="#pesan" className="transition hover:text-[#75462f]">Pemesanan</a>
          <a href="#tentang" className="transition hover:text-[#75462f]">Tentang kami</a>
        </nav>

        
      </div>
      <span id="atas" className="absolute left-0 top-0 -z-10" aria-hidden="true" />
    </header>
  );
}

export default Navbar;
