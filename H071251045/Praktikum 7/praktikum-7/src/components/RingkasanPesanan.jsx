function RingkasanPesanan({ items, jumlahItem, totalHarga, onTambah, onKurangi, onHapus, formatRupiah }) {
  return (
    <section className="overflow-hidden rounded-[1.7rem] border border-[#e8dbcf] bg-white shadow-soft" aria-labelledby="judul-ringkasan">
      <div className="flex items-start justify-between bg-[#fffaf4] px-5 py-5 sm:px-6">
        <div>
          <h2 id="judul-ringkasan" className="mt-1 font-serif text-2xl font-semibold text-[#3f2d23]">Pesanan anda</h2>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="px-6 py-8 text-center">
          <p className="   font-semibold text-[#49362b]">Belum ada pesanan</p>
          <p className="mx-auto mt-1 max-w-[220px] text-xs leading-5 text-[#98877b]">Pilihan menu anda akan muncul di sini.</p>
        </div>
      ) : (
        <div className="space-y-4 px-5 py-5 sm:px-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-[#49362b]">{item.nama}</p>
                    <p className="mt-0.5 text-xs text-[#9a887a]">{formatRupiah(item.harga)} / item</p>
                  </div>
                  <button type="button" onClick={() => onHapus(item.id)} className="rounded-md px-1 text-xs text-[#ad8b75] transition hover:text-red-700" aria-label={`Hapus ${item.nama} dari pesanan`}>Hapus</button>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#e9ddd1] px-1.5 py-1">
                    <button type="button" onClick={() => onKurangi(item.id)} className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-[#75462f] transition hover:bg-[#f3e8dc]" aria-label={`Kurangi jumlah ${item.nama}`}>−</button>
                    <span className="min-w-4 text-center text-xs font-bold tabular-nums">{item.jumlah}</span>
                    <button type="button" onClick={() => onTambah(item.id)} className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-[#75462f] transition hover:bg-[#f3e8dc]" aria-label={`Tambah jumlah ${item.nama}`}>+</button>
                  </div>
                  <p className="text-xs font-bold text-[#49362b]">{formatRupiah(item.harga * item.jumlah)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-dashed border-[#e6d8ca] bg-[#fffaf4] px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between text-sm text-[#88766b]">
          <span>Total item</span>
          <span className="font-semibold text-[#49362b]">{jumlahItem} item</span>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-semibold text-[#49362b]">Total pembayaran</span>
          <span className="font-serif text-2xl font-bold text-[#75462f]">{formatRupiah(totalHarga)}</span>
        </div>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
