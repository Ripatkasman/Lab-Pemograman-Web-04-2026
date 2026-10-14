
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const namaAsisten = prompt("Masukkan nama Asisten Lab untuk mengakses sistem:");

if (namaAsisten === "") {
    document.write(`
        <div class="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center mt-10">
            <h2 class="font-bold text-lg">Akses Ditolak!</h2>
            <p>Nama Asisten Lab wajib diisi untuk melihat laporan praktikum.</p>
        </div>
    `);
} else {
    let hasil = [];

    for (let i = 0; i < dataPraktikan.length; i++) {
        let Praktikan = dataPraktikan[i];
        let nilaiTotal = 0;

        for (let j = 0; j < Praktikan.nilaiTugas.length; j++) {
            nilaiTotal += Praktikan.nilaiTugas[j];
        }

        let nilaiRataRata = nilaiTotal / Praktikan.nilaiTugas.length;
        let status = nilaiRataRata >= 75 ? "LULUS" : "TIDAK LULUS";

        hasil.push({
            nama: Praktikan.nama,
            nilaiTugas: Praktikan.nilaiTugas,
            rataRata: nilaiRataRata, 
            status: status
        });
    }

    
    document.write(`
        <div class="max-w-6xl mx-auto py-8 px-4">
            <!-- Header Dashboard -->
            <header class="mb-8 bg-indigo-600 text-white p-6 rounded-2xl shadow-md flex justify-between items-center">
                <div>
                    <h1 class="text-2xl font-bold">Dashboard Evaluasi Praktikum</h1>
                    <p class="text-indigo-200 text-sm mt-1">Laporan Hasil Belajar Praktikan</p>
                </div>
                <div class="text-right bg-indigo-700 px-4 py-2 rounded-xl border border-indigo-500">
                    <span class="text-xs text-indigo-200 block">Asisten Bertugas</span>
                    <span class="font-semibold text-white">${namaAsisten}</span>
                </div>
            </header>

            <!-- Grid Kartu Evaluasi -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `);

    hasil.forEach(p => {
        const isLulus = p.status === "LULUS";
        const badgeColor = isLulus ? "bg-emerald-100 text-emerald-700 border-emerald-300" : "bg-rose-100 text-rose-700 border-rose-300";
        const avatarBg = isLulus ? "bg-emerald-500" : "bg-rose-500";

        document.write(`
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-slate-200 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="${avatarBg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                                ${p.nama.charAt(0)}
                            </div>
                            <h3 class="text-lg font-bold text-slate-800">${p.nama}</h3>
                        </div>
                        <span class="px-3 py-1 text-xs font-bold rounded-full border ${badgeColor}">
                            ${p.status}
                        </span>
                    </div>

                    <div class="space-y-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Rincian Nilai</span>
                        <div class="flex justify-between text-sm text-slate-600">
                            <span>Tugas:</span>
                            <span class="font-medium">${p.nilaiTugas.join(", ")}</span>
                        </div>
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-500">Nilai Rata-rata</span>
                    <span class="text-2xl font-extrabold">
                        ${p.rataRata}
                    </span>
                </div>
            </div>
        `);
    });


    console.log("Data Array of Objects:", hasil);
}