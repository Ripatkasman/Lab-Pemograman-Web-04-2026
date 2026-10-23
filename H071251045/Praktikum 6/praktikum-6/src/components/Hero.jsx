function Hero() {
  return (
    <section id="home" className="bg-slate-50 px-6 py-20 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row">

        <div className="max-w-xl text-center md:text-left">
          <p className="mb-3 font-semibold text-blue-600 tracking-wider">
            HELLO, WELCOME TO MY WEBSITE
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Halo, saya Rifat.
            <br />
            Mahasiswa Sistem Informasi
          </h1>

          <p className="mt-5 leading-7 text-slate-600">
            Saya tertarik pada teknologi, desain, dan pengembangan produk
            digital. Saat ini saya terus belajar untuk mengembangkan kemampuan
            dan pengalaman saya.
          </p>

          <button
            onClick={() =>
              console.log("Terima kasih sudah mengunjungi profil saya!")
            }
            className="mt-7 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 shadow-md"
          >
            Kenali Saya
          </button>
        </div>

        <div className="w-500 flex items-center justify-center gap-4 sm:gap-6 flex-wrap md:flex-nowrap">
    
          <img
            src="/fotoprofil.jpeg"
            alt="Foto 1"
            className="w-40 h-56 sm:w-48 sm:h-64 object-cover rounded-2xl  shadow-lg transform -rotate-3 border-4 border-white transition-all duration-300 hover:-rotate-12 hover:scale-105 "
          />

          <img
            src="/fotoprofil2.jpeg"
            alt="Foto 2"
            className="w-40 h-56 sm:w-48 sm:h-64 object-cover rounded-2xl shadow-xl transform rotate-2 sm:-translate-y-4 border-4 border-white transition-all duration-300 hover:rotate-0 hover:scale-105 "
          />
          
          <img
            src="/fotoprofil3.jpeg"
            alt="Foto 3"
            className="w-40 h-56 sm:w-48 sm:h-64 object-cover  rounded-2xl shadow-xl transform rotate-6 border-4 border-white transition-all duration-300 hover:rotate-12 hover:scale-105 "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;