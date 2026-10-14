const LinkUrlUser = "https://jsonplaceholder.typicode.com/users";
const LinkUrlUserId = "https://jsonplaceholder.typicode.com/todos?userId=";

const statusAnggota = document.getElementById("status-anggota");
const daftarAnggota = document.getElementById("daftar-anggota");
const judulTugas = document.getElementById("judul-tugas");
const statusTugas = document.getElementById("status-tugas");
const ringkasan = document.getElementById("ringkasan");
const inputCari = document.getElementById("cari");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");
const pesanKosong = document.getElementById("pesan-kosong");
const daftarTugas = document.getElementById("daftar-tugas");

let anggotaAktif = null;
let tugasList = [];
let nomorTugas = 0;
let timerNotifikasi = null;

const KELAS_AKTIF = ["bg-indigo-600", "text-white", "border-indigo-600"];
const KELAS_BIASA = ["bg-white", "text-slate-700", "border-slate-300"];
const KELAS_SELESAI = ["line-through", "text-gray-400"];

function perbaruiRingkasan() {
  const total = tugasList.length;
  const selesai = tugasList.filter((t) => t.completed).length;
  ringkasan.textContent = `${selesai} dari ${total} tugas selesai`;
}

function terapkanPencarian() {
  const kataKunci = inputCari.value.trim().toLowerCase();
  let adaYangCocok = false;

  tugasList.forEach((t) => {
    const cocok = t.title.toLowerCase().includes(kataKunci);
    if (cocok) {
      t.el.classList.remove("hidden");
      adaYangCocok = true;
    } else {
      t.el.classList.add("hidden");
    }
  });

  if (tugasList.length > 0 && !adaYangCocok) {
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

function tampilkanNotifikasi(pesan) {
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(() => {
    notifikasi.classList.add("hidden");
  }, 3000);
}

function aktifkanForm(aktif) {
  inputJudul.disabled = !aktif;
  tombolSimpan.disabled = !aktif;
}

function buatElemenTugas(tugas) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between gap-3 border border-slate-200 rounded-lg px-3 py-2";

  const judul = document.createElement("span");
  judul.className = "flex-1";
  judul.textContent = tugas.title;

  const aksi = document.createElement("div");
  aksi.className = "flex gap-2 shrink-0";

  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className = "text-sm px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200";

  tombolHapus.addEventListener("click", () => {
    li.remove();
    tugasList = tugasList.filter((t) => t.id !== tugas.id);
    perbaruiRingkasan();
    terapkanPencarian();
  });

  if (tugas.completed) {
    judul.classList.add(...KELAS_SELESAI);
  } else {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className = "text-sm px-2 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200";

    tombolSelesai.addEventListener("click", () => {
      tugas.completed = true;
      judul.classList.add(...KELAS_SELESAI);
      tombolSelesai.remove();
      perbaruiRingkasan();
    });

    aksi.appendChild(tombolSelesai);
  }

  aksi.appendChild(tombolHapus);
  li.appendChild(judul);
  li.appendChild(aksi);

  tugas.el = li;
  return li;
}

function tambahTugasKeDaftar(data) {
  nomorTugas += 1;
  const tugas = { id: nomorTugas, title: data.title, completed: data.completed, el: null };
  tugasList.push(tugas);
  daftarTugas.appendChild(buatElemenTugas(tugas));
  return tugas;
}

// ===== 1. Memuat Daftar Anggota dengan Fetch API =====
async function muatAnggota() {
  statusAnggota.className = "text-slate-500";
  statusAnggota.textContent = "Memuat anggota...";

  try {
    const respons = await fetch(LinkUrlUser);
    const anggota = await respons.json();

    statusAnggota.textContent = "";

    anggota.forEach((a) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = a.name;
      tombol.className = "px-3 py-1.5 rounded-full border text-sm hover:border-indigo-400 " + KELAS_BIASA.join(" ");

      tombol.addEventListener("click", () => pilihAnggota(a, tombol));
      daftarAnggota.appendChild(tombol);
    });
  } catch (error) {
    statusAnggota.className = "text-red-600";
    statusAnggota.textContent = "Gagal memuat anggota.";
  }
}

// ===== 2. Memilih Anggota & Memuat Tugas Berdasarkan ID =====
function tandaiAnggota(tombolDipilih) {
  const semua = daftarAnggota.querySelectorAll("button");
  semua.forEach((b) => {
    b.classList.remove(...KELAS_AKTIF);
    b.classList.add(...KELAS_BIASA);
  });
  tombolDipilih.classList.remove(...KELAS_BIASA);
  tombolDipilih.classList.add(...KELAS_AKTIF);
}

async function pilihAnggota(anggota, tombol) {
  tandaiAnggota(tombol);
  anggotaAktif = anggota.id;

  judulTugas.textContent = `Tugas ${anggota.name}`;

  // Bersihkan tampilan lama
  daftarTugas.innerHTML = "";
  tugasList = [];
  ringkasan.textContent = "";
  inputCari.value = "";
  errorForm.textContent = "";
  pesanKosong.classList.add("hidden");
  aktifkanForm(false);

  statusTugas.className = "text-slate-500";
  statusTugas.textContent = "Memuat tugas...";

  try {
    const respons = await fetch(`${LinkUrlUserId}${anggota.id}`);
    const data = await respons.json();

    statusTugas.textContent = "";
    data.forEach((t) => {
      tambahTugasKeDaftar({ title: t.title, completed: t.completed });
    });
    perbaruiRingkasan();
    aktifkanForm(true);
  } catch (error) {
    statusTugas.className = "text-red-600";
    statusTugas.textContent = "Gagal memuat tugas.";
  }
}

// ===== 3. Fitur Pencarian =====
inputCari.addEventListener("input", terapkanPencarian);

// ===== 4. Menambah Tugas Baru (Form Submit) =====
formTugas.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah form reload halaman
  errorForm.textContent = "";

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    errorForm.textContent = "Judul tugas tidak boleh kosong dan minimal 5 karakter.";
    return;
  }

  // Tambahkan tugas baru secara langsung
  tambahTugasKeDaftar({ title: judul, completed: false });
  perbaruiRingkasan();
  terapkanPencarian();
  
  inputJudul.value = "";
  tampilkanNotifikasi("Tugas berhasil ditambahkan.");
});

// ===== Jalankan saat pertama kali dimuat =====
muatAnggota();