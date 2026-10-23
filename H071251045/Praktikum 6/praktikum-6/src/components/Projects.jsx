import foto1 from "../assets/projects/foto1.jpg";
import foto2 from "../assets/projects/foto2.jpg";
import foto3 from "../assets/projects/foto3.png";
import foto4 from "../assets/projects/foto4.png";

function Projects() {
  const foto = [
    {
      id: 1,
      src: foto1,
      title: "J-Tour: Perencanaan Perjalanan Wisata",
      desc: "Ini adalah project J-Tour yang berfokus pada perencanaan perjalanan wisata. Aplikasi ini membantu pengguna merencanakan perjalanan wisata mereka dengan fitur-fitur seperti rekomendasi destinasi, rencana perjalanan, dan informasi penting lainnya.",
    },
    {
      id: 2,
      src: foto2,
      title: "Smart Task Manager: Manajemen Tugas Pintar",
      desc: "Ini adalah project Smart Task Manager yang berfokus pada manajemen tugas secara pintar. Aplikasi ini membantu pengguna mengelola tugas mereka dengan fitur-fitur seperti penjadwalan, notifikasi, dan pelacakan kemajuan.",
    },
    {
      id: 3,
      src: foto3,
      title: "Palapor: Aplikasi Pelaporan Masyarakat",
      desc: "Ini adalah project Palapor yang berfokus pada pelaporan masyarakat. Aplikasi ini membantu pengguna melaporkan masalah atau kejadian penting di lingkungan mereka dengan fitur-fitur seperti pengunggahan foto, lokasi, dan deskripsi.",
    },
    {
      id: 4,
      src: foto4,
      title: "Basic Diagram Flowchart App",
      desc: "Ini adalah project membuat sebuah Basic Diagram Flowchart App yang berfokus pada pembuatan diagram alur dasar. ini membantu pengguna membuat diagram alur dengan fitur-fitur seperti drag-and-drop, pengaturan bentuk, dan penyimpanan diagram.",
    },
  ];

  return (
    <section id="projects" className="bg-slate-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900">
          Projects
        </h2>

        <p className="mt-3 text-slate-600 text-lg">Berikut adalah beberapa Project saya.</p>

        <div className="mt-8 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 ">
          {foto.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.title}
                className=" w-full object-cover  "
              />
              <div className="p-3 text-justify">
                <h3 className="font-bold text-slate-700">{item.title}</h3>
                <p className="text-slate-600 text-sm ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
