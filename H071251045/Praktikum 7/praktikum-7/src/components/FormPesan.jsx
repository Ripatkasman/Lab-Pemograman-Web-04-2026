function PesanError({ pesan }) {
  if (!pesan) return null;

  return (
    <div
      role="alert"
      className="mb-4 flex gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-xs leading-5 text-red-800"
    >
      <span aria-hidden="true">!</span>
      <p>{pesan}</p>
    </div>
  );
}

function PesanSukses({ pesan }) {
  if (!pesan) return null;

  return (
    <div
      role="status"
      className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-3 text-xs leading-5 text-emerald-800"
    >
      <p className="mt-0.5">{pesan}</p>
    </div>
  );
}

function FormPesan({
  nama,
  setNama,
  nomorMeja,
  setNomorMeja,
  onSubmit,
  pesanError,
  pesanSukses,
}) {
  return (
    <section
      className="rounded-[1.7rem] border border-[#e8dbcf] bg-white p-5 shadow-soft sm:p-6"
      aria-labelledby="judul-form-pesan"
    >
      <div className="mb-5">
        <h2
          id="judul-form-pesan"
          className="mt-1 font-serif text-2xl font-semibold text-[#3f2d23]"
        >
          Detail pemesan
        </h2>
      </div>

      <PesanError pesan={pesanError} />
      <PesanSukses pesan={pesanSukses} />

      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <div>
          <label
            htmlFor="nama-pemesan"
            className="mb-1.5 block text-xs font-bold text-[#574438]"
          >
            Nama pemesan
          </label>
          <input
            id="nama-pemesan"
            type="text"
            name="nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            placeholder="Contoh: Kasman"
            autoComplete="name"
            className="w-full rounded-xl border border-[#e5d8cc] bg-[#fffdfa] px-4 py-3 text-sm text-[#49362b] placeholder:text-[#b3a397] transition focus:border-[#b58a69] focus:bg-white focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="nomor-meja"
            className="mb-1.5 block text-xs font-bold text-[#574438]"
          >
            Nomor meja
          </label>
          <input
            id="nomor-meja"
            type="number"
            name="nomorMeja"
            min="1"
            max="99"
            step="1"
            value={nomorMeja}
            onChange={(event) => setNomorMeja(event.target.value)}
            placeholder="Contoh: 08"
            inputMode="numeric"
            className="w-full rounded-xl border border-[#e5d8cc] bg-[#fffdfa] px-4 py-3 text-sm text-[#49362b] placeholder:text-[#b3a397] transition focus:border-[#b58a69] focus:bg-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#75462f] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[#75462f]/15 transition hover:-translate-y-0.5 hover:bg-[#573625] active:translate-y-0"
        >
          Kirim pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
