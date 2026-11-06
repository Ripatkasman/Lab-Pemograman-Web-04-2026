# Kedai Kopi Senja — Praktikum 7 React Hooks (State & Props)

Contoh aplikasi menu dan pemesanan yang mengikuti ketentuan pada **Tugas Praktikum 7: React Hooks (State & Props)**. Aplikasi menggunakan React function component, Vite, dan Tailwind CSS. Data menu disimpan lokal di `src/App.jsx`; tidak ada server atau database.

## Menjalankan proyek

Pastikan Node.js dan npm sudah terpasang. Dari terminal, masuk ke folder proyek `kopi-senja`, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal. Untuk menguji build produksi:

```bash
npm run build
npm run preview
```

## Isi fitur

- Menampilkan sembilan menu beserta harga dan deskripsi.
- Filter kategori **Semua**, **Kopi**, **Non-Kopi**, dan **Makanan**.
- Detail setiap menu dapat dibuka atau ditutup secara mandiri.
- Menu dengan `tersedia: false` memiliki tombol nonaktif dan tidak dapat ditambahkan.
- Tombol **Tambah**, tombol `+`/`−`, serta **Hapus** memperbarui keranjang.
- Jumlah item dan total harga di Navbar dan Ringkasan Pesanan berasal dari perhitungan state keranjang yang sama.
- Validasi pesanan kosong, nama pemesan, dan nomor meja 1–99.
- Setelah pesanan terkirim, tampil pesan terima kasih, form dikosongkan, dan keranjang direset.

## Struktur berkas

```text
kopi-senja/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── components/
        ├── Navbar.jsx
        ├── MenuList.jsx
        ├── MenuCard.jsx
        ├── RingkasanPesanan.jsx
        ├── FormPesan.jsx
        └── Footer.jsx
```

## Penjelasan ketentuan praktikum dan contohnya

### 1. React function component dan Tailwind CSS

Setiap komponen ditulis sebagai fungsi JavaScript, misalnya `function MenuCard(...) { ... }`. Gaya tata letak menggunakan utility class Tailwind seperti `grid`, `rounded-2xl`, `bg-white`, `px-4`, dan `hover:bg-[#573625]`. Tidak menggunakan Bootstrap, MUI, Redux, Context, atau Zustand.

### 2. `useState` harus berupa named import dan berada di tingkat teratas komponen

Contoh di `App.jsx`:

```jsx
import { useState } from 'react';

function App() {
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  // ...
}
```

`useState` diimpor menggunakan kurung kurawal. Pemanggilannya dilakukan pada awal komponen, bukan di dalam `if`, `map`, atau event handler. `MenuCard.jsx` juga memakai state lokal untuk membuka detail kartu tersebut.

### 3. Data yang berubah harus menjadi state dan tidak dimutasi langsung

Kategori aktif, isi keranjang, nama, nomor meja, dan pesan validasi disimpan menggunakan `useState`. Saat menambah barang, kode menggunakan setter dengan membuat array/objek baru:

```jsx
setKeranjang((sebelumnya) => [
  ...sebelumnya,
  { id, jumlah: 1 },
]);
```

Jangan mengubah state menggunakan cara seperti `keranjang.push(...)` atau `keranjang[0].jumlah++`.

### 4. Props diterima dengan destructuring dan tidak diubah

Contoh pada `MenuCard.jsx`:

```jsx
function MenuCard({ item, jumlahDiKeranjang, onTambah, formatRupiah }) {
  // item adalah props; tampilkan saja, jangan mengubah item.harga.
}
```

Parent mengirim data kepada child melalui atribut komponen. Untuk angka dan boolean, gunakan kurung kurawal, contohnya `jumlahDiKeranjang={jumlah}` dan `tersedia={item.tersedia}` jika prop tersebut dibutuhkan.

### 5. Render daftar memakai `.map()` dan `key` unik dari ID

Contoh pada `MenuList.jsx`:

```jsx
items.map((item) => (
  <MenuCard key={item.id} item={item} />
))
```

`key` mengambil `item.id` dari data menu, bukan nomor urutan/index. Komponen ringkasan juga memakai `key={item.id}`.

### 6. Event memakai event props React; tidak memanipulasi DOM langsung

Filter kategori menggunakan `onClick`, input memakai `onChange`, dan form memakai `onSubmit`. Tidak ada `document.querySelector`, `innerHTML`, atau `dangerouslySetInnerHTML`. React memperbarui tampilan berdasarkan perubahan state.

### 7. Data menu ditulis sekali di `App.jsx`

Array `DAFTAR_MENU` pada awal `App.jsx` berisi ID, nama, kategori, harga, status tersedia, dan deskripsi. Harga berjenis `number` (contoh `18000`) dan status berjenis boolean (`true`/`false`). Komponen anak menerima data menu melalui props.

### 8. Satu data, satu state

`kategoriAktif` hanya disimpan di `App`, sedangkan komponen filter menerima nilai dan callback melalui props. Isi state `keranjang` hanya berupa `{ id, jumlah }`. Nama, harga, kategori, dan deskripsi untuk keranjang dicari lagi dari `DAFTAR_MENU`, sehingga nama/harga menu tidak dibuat sebagai sumber data kedua. `jumlahItem` dan `totalHarga` adalah hasil `reduce()` dari data tersebut, bukan state terpisah yang berisiko tidak sinkron.

### 9. Satu komponen, satu berkas di `src/components`

`Navbar`, `MenuList`, `MenuCard`, `RingkasanPesanan`, `FormPesan`, dan `Footer` masing-masing ada di berkas PascalCase sendiri dan menggunakan `export default`.

### 10. Console bersih

Daftar menggunakan key berbasis ID. Input nama dan nomor meja merupakan controlled input dengan `value` dan `onChange`. Semua nilai awal input berupa string kosong, sehingga tidak berpindah dari uncontrolled menjadi controlled.

## Alur utama state dan props

1. Pengguna memilih kategori di `App.jsx` → `menuTampil` difilter → `MenuList` menerima daftar melalui props.
2. `MenuList` membuat kartu melalui `.map()` → setiap `MenuCard` menerima satu objek menu.
3. Pengguna menekan **Tambah** → `MenuCard` menjalankan callback `onTambah(id)` → `App` memperbarui `keranjang`.
4. `App` menghitung `detailKeranjang`, `jumlahItem`, dan `totalHarga` → Navbar dan Ringkasan Pesanan menerima hasil hitung yang sama.
5. Pengguna mengirim form → `App` memvalidasi data → menampilkan pesan berhasil dan mengosongkan input serta keranjang.

## Checklist pengujian manual

- [ ] Pilih tiap kategori dan pastikan daftar menyesuaikan.
- [ ] Buka detail Kopi Susu dan detail menu lain; detail masing-masing seharusnya independen.
- [ ] Pastikan tombol Teh Tarik dan Pisang Goreng nonaktif.
- [ ] Tambahkan dua menu berbeda; cocokkan jumlah dan total di Navbar dengan Ringkasan Pesanan.
- [ ] Tekan `+`, `−`, dan Hapus; pastikan dua total ikut berubah.
- [ ] Kirim form dengan keranjang kosong, nama kurang dari dua karakter, atau nomor meja tidak valid; pastikan ada pesan validasi.
- [ ] Isi data yang valid dan kirim; pastikan pesan sukses muncul serta form dan keranjang kosong kembali.

> Catatan: ini adalah simulasi sisi frontend untuk praktikum. Pesanan tidak disimpan ke server atau dikirim ke kasir sungguhan.
