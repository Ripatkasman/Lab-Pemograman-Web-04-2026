import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const DAFTAR_MENU = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
  },
];

function formatRupiah(angka) {
    return 'Rp' + angka;
}

function App() {
  const kategoriState = useState("Semua");
  const kategoriAktif = kategoriState[0];
  const setKategoriAktif = kategoriState[1];

  const keranjangState = useState([]);
  const keranjang = keranjangState[0];
  const setKeranjang = keranjangState[1];

  const namaState = useState("");
  const nama = namaState[0];
  const setNama = namaState[1];

  const nomorMejaState = useState("");
  const nomorMeja = nomorMejaState[0];
  const setNomorMeja = nomorMejaState[1];

  const pesanErrorState = useState("");
  const pesanError = pesanErrorState[0];
  const setPesanError = pesanErrorState[1];

  const pesanSuksesState = useState("");
  const pesanSukses = pesanSuksesState[0];
  const setPesanSukses = pesanSuksesState[1];

  const detailKeranjang = [];

  for (let i = 0; i < keranjang.length; i++) {
    const baris = keranjang[i];
    let itemMenu = null;

    for (let j = 0; j < DAFTAR_MENU.length; j++) {
      if (DAFTAR_MENU[j].id === baris.id) {
        itemMenu = DAFTAR_MENU[j];
        break;
      }
    }

    if (itemMenu !== null) {
      const hasil = Object.assign({}, itemMenu);
      hasil.jumlah = baris.jumlah;
      detailKeranjang.push(hasil);
    }
  }

  let jumlahItem = 0;

  for (let i = 0; i < detailKeranjang.length; i++) {
    const item = detailKeranjang[i];
    jumlahItem = jumlahItem + item.jumlah;
  }

  let totalHarga = 0;

  for (let i = 0; i < detailKeranjang.length; i++) {
    const item = detailKeranjang[i];
    const subtotal = item.harga * item.jumlah;
    totalHarga = totalHarga + subtotal;
  }

  const menuTampil = [];

  if (kategoriAktif === "Semua") {
    for (let i = 0; i < DAFTAR_MENU.length; i++) {
      menuTampil.push(DAFTAR_MENU[i]);
    }
  } else {
    for (let i = 0; i < DAFTAR_MENU.length; i++) {
      const item = DAFTAR_MENU[i];

      if (item.kategori === kategoriAktif) {
        menuTampil.push(item);
      }
    }
  }

  function getKategoriClass(kategori) {
    if (kategoriAktif === kategori) {
      return "rounded-full px-4 py-2.5 text-sm font-semibold transition bg-[#75462f] text-white shadow-md shadow-[#75462f]/15";
    } else {
      return "rounded-full px-4 py-2.5 text-sm font-semibold transition border border-[#e5d9cd] bg-white/70 text-[#76675e] hover:border-[#c4a58d] hover:bg-white";
    }
  }

  function tambahKeKeranjang(id) {
    let itemMenu = null;

    for (let i = 0; i < DAFTAR_MENU.length; i++) {
      if (DAFTAR_MENU[i].id === id) {
        itemMenu = DAFTAR_MENU[i];
        break;
      }
    }

    if (itemMenu === null) {
      return;
    }

    if (itemMenu.tersedia === false) {
      return;
    }

    setKeranjang(function (keranjangSaatIni) {
      let sudahAda = false;

      for (let i = 0; i < keranjangSaatIni.length; i++) {
        if (keranjangSaatIni[i].id === id) {
          sudahAda = true;
          break;
        }
      }

      const keranjangBaru = [];

      if (sudahAda === true) {
        for (let i = 0; i < keranjangSaatIni.length; i++) {
          const item = keranjangSaatIni[i];

          if (item.id === id) {
            const itemBaru = Object.assign({}, item);
            itemBaru.jumlah = itemBaru.jumlah + 1;
            keranjangBaru.push(itemBaru);
          } else {
            keranjangBaru.push(item);
          }
        }

        return keranjangBaru;
      }

      for (let i = 0; i < keranjangSaatIni.length; i++) {
        keranjangBaru.push(keranjangSaatIni[i]);
      }

      const itemBaru = {
        id: id,
        jumlah: 1,
      };

      keranjangBaru.push(itemBaru);

      return keranjangBaru;
    });

    setPesanError("");
    setPesanSukses("");
  }

  function kurangiDariKeranjang(id) {
    setKeranjang(function (keranjangSaatIni) {
      const keranjangBaru = [];

      for (let i = 0; i < keranjangSaatIni.length; i++) {
        const item = keranjangSaatIni[i];

        if (item.id === id) {
          if (item.jumlah > 1) {
            const itemBaru = Object.assign({}, item);
            itemBaru.jumlah = itemBaru.jumlah - 1;
            keranjangBaru.push(itemBaru);
          }
        } else {
          keranjangBaru.push(item);
        }
      }

      return keranjangBaru;
    });

    setPesanError("");
    setPesanSukses("");
  }

  function hapusDariKeranjang(id) {
    setKeranjang(function (keranjangSaatIni) {
      const keranjangBaru = [];

      for (let i = 0; i < keranjangSaatIni.length; i++) {
        const item = keranjangSaatIni[i];

        if (item.id !== id) {
          keranjangBaru.push(item);
        }
      }

      return keranjangBaru;
    });

    setPesanError("");
    setPesanSukses("");
  }

  function kirimPesanan(event) {
    event.preventDefault();

    setPesanError("");
    setPesanSukses("");

    if (keranjang.length === 0) {
      setPesanError(
        "Pesanan masih kosong. Tambahkan minimal satu menu terlebih dahulu.",
      );
      return;
    }

    if (nama.length < 2) {
      setPesanError(
        "Masukkan nama minimal 2 karakter agar pesanan mudah dikenali.",
      );
      return;
    }

    const mejaAngka = Number(nomorMeja);

    if (
      !nomorMeja ||
      !Number.isInteger(mejaAngka) ||
      mejaAngka < 1 ||
      mejaAngka > 99
    ) {
      setPesanError("Masukkan nomor meja berupa angka dari 1 sampai 99.");
      return;
    }

    const namaPelanggan = nama.trim();

    const pesanBerhasil =
      "Terima kasih, " +
      namaPelanggan +
      "! Pesanan untuk meja " +
      mejaAngka +
      " berhasil dikirim.";

    setPesanSukses(pesanBerhasil);

    setNama("");
    setNomorMeja("");
    setKeranjang([]);
  }

  return (
    <div className="min-h-screen text-[#30251f]">
      <Navbar
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
        formatRupiah={formatRupiah}
      />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-7 sm:px-6 lg:px-8 lg:pt-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              Menu pilihan
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            aria-label="Filter kategori menu"
          >
            <button
              type="button"
              onClick={function () {
                setKategoriAktif("Semua");
              }}
              aria-pressed={kategoriAktif === "Semua"}
              className={getKategoriClass("Semua")}
            >
              Semua
            </button>

            <button
              type="button"
              onClick={function () {
                setKategoriAktif("Kopi");
              }}
              aria-pressed={kategoriAktif === "Kopi"}
              className={getKategoriClass("Kopi")}
            >
              Kopi
            </button>

            <button
              type="button"
              onClick={function () {
                setKategoriAktif("Non-Kopi");
              }}
              aria-pressed={kategoriAktif === "Non-Kopi"}
              className={getKategoriClass("Non-Kopi")}
            >
              Non-Kopi
            </button>

            <button
              type="button"
              onClick={function () {
                setKategoriAktif("Makanan");
              }}
              aria-pressed={kategoriAktif === "Makanan"}
              className={getKategoriClass("Makanan")}
            >
              Makanan
            </button>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)] lg:gap-9">
          <section id="menu" aria-label="Daftar menu">
            <MenuList
              items={menuTampil}
              keranjang={keranjang}
              onTambah={tambahKeKeranjang}
              formatRupiah={formatRupiah}
            />
          </section>

          <aside id="pesan" className="space-y-6 lg:sticky lg:top-36">
            <RingkasanPesanan
              items={detailKeranjang}
              jumlahItem={jumlahItem}
              totalHarga={totalHarga}
              onTambah={tambahKeKeranjang}
              onKurangi={kurangiDariKeranjang}
              onHapus={hapusDariKeranjang}
              formatRupiah={formatRupiah}
            />

            <FormPesan
              nama={nama}
              setNama={setNama}
              nomorMeja={nomorMeja}
              setNomorMeja={setNomorMeja}
              onSubmit={kirimPesanan}
              pesanError={pesanError}
              pesanSukses={pesanSukses}
            />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
