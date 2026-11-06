import MenuCard from './MenuCard.jsx';

function MenuList({ items, keranjang, onTambah, formatRupiah }) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#d8c5b4] bg-white/60 p-10 text-center">
        <span className="text-4xl" aria-hidden="true">☕</span>
        <p className="mt-3 font-semibold text-[#49362b]">Menu tidak ditemukan</p>
        <p className="mt-1 text-sm text-[#88766b]">Coba pilih kategori lainnya.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const dataKeranjang = keranjang.find((baris) => baris.id === item.id);
        return (
          <MenuCard
            key={item.id}
            item={item}
            jumlahDiKeranjang={dataKeranjang ? dataKeranjang.jumlah : 0}
            onTambah={onTambah}
            formatRupiah={formatRupiah}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
