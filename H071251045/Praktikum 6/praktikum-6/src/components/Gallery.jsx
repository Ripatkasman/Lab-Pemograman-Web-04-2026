import foto1 from "../assets/gallery/foto1.jpeg";
import foto2 from "../assets/gallery/foto2.jpeg";
import foto3 from "../assets/gallery/foto3.jpeg";
import foto4 from "../assets/gallery/foto4.jpeg";

function Gallery() {
  const foto = [
    {
      id: 1,
      src: foto1,
      title: "Sunset CPI",
      desc: "Ini Ripat sedang nyore di pantai CPI bersama keluargah",
    },
    {
      id: 2,
      src: foto2,
      title: "Expo Start-up Unhas",
      desc: "Ripat dan kawan-kawan meramaikan expo start-up unhas dengan mengusung produk kecap kelapa nya",
    },
    {
      id: 3,
      src: foto3,
      title: "Motor & Parkiran Wesgo",
      desc: "Motor Ripat yang diberi nama Benhil (Honda Phantom TA200) sedang parkir di parkiran wesgo",
    },
    { id: 4, src: foto4, title: "Kappire Barru", desc: "Ripat dan kawan-kawan sedang menggunung di Kappira Barru, kurang dari 10 kilo sudah sampai ke Takkalasi (kampung ny ripat)" },
  ];

  return (
    <section id="gallery" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-slate-900"> Ripat's Gallery</h2>

        <p className="mt-3 text-slate-600">
          Beberapa momen dan dokumentasi pilihan saya.
        </p>

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

export default Gallery;
