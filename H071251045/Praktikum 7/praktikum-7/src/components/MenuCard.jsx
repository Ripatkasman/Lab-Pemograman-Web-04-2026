import { useState } from "react";

function MenuCard({ item, jumlahDiKeranjang, onTambah, formatRupiah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  let cardBorder = "border-[#eee4d9]";
  if (!item.tersedia) {
    cardBorder = "border-[#e7e0d9] cursor-not-allowed";
  }

  let detailDisplayClass = "hidden";
  if (detailTerbuka) {
    detailDisplayClass = "block";
  }

  let teksDetail = "Lihat detail";
  if (detailTerbuka) {
    teksDetail = "Tutup detail";
  }

  let tombolClass = "bg-[#75462f] text-white hover:bg-[#573625] active:scale-95";
  let teksTombol = "Tambah";
  if (!item.tersedia) {
    
    tombolClass = "cursor-not-allowed bg-[#eee8e2] text-[#a99b8f]";
    teksTombol = "Habis";
  }

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.6rem] border bg-white shadow-[0_8px_26px_rgba(65,39,25,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-soft ${cardBorder}`}
    >
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div>{item.gambar}</div>
            <h3 className="mt-1 font-serif text-xl font-semibold text-[#3f2d23]">
              {item.nama}
            </h3>
          </div>
          {jumlahDiKeranjang > 0 && (
            <span className="shrink-0 rounded-full bg-[#edf2e8] px-2.5 py-1 text-[10px] font-bold text-[#526747]">
              {jumlahDiKeranjang} dipilih
            </span>
          )}
        </div>

        <div
          id={`detail-menu-${item.id}`}
          aria-hidden={!detailTerbuka}
          className={`mt-3 rounded-xl bg-[#f8f3ed] p-3 text-xs leading-5 text-[#766357] ${detailDisplayClass}`}
        >
          <p>{item.deskripsi}</p>
        </div>

        <button
          type="button"
          onClick={() => setDetailTerbuka((terbuka) => !terbuka)}
          aria-expanded={detailTerbuka}
          aria-controls={`detail-menu-${item.id}`}
          className="mt-3 self-start text-xs font-bold text-[#9a6542] transition hover:text-[#573625]"
        >
          {teksDetail}
        </button>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#f0e8df] pt-4">
          <p className="text-sm font-extrabold tracking-tight text-[#49362b]">
            {formatRupiah(item.harga)}
          </p>
          <button
            type="button"
            onClick={() => onTambah(item.id)}
            disabled={!item.tersedia}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition ${tombolClass}`}
          >
            {teksTombol}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;