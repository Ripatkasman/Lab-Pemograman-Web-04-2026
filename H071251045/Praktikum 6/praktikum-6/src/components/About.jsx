
function About() {
  const dataDiri = [
    {
      id: 1,
      label: "Nama",
      value: "Rifat",
    },
    {
      id: 2,
      label: "Program Studi",
      value: "Sistem Informasi",
    },
    {
      id: 3,
      label: "Minat",
      value: "UI/UX Design dan Teknologi",
    },
    {
      id: 4,
      label: "Prinsip",
      value: "Terus belajar dan berkembang",
    },
  ];

  return (
    <section id="about" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-7xl font-bold text-slate-900">
          About Me
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Saya adalah mahasiswa Sistem Informasi yang tertarik
          memahami hubungan antara teknologi dan kebutuhan manusia.
          Saya senang mempelajari hal baru, mengembangkan ide, dan
          mencoba berbagai cara untuk menyelesaikan masalah.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <p className="text-sm text-slate-500">
                {item.label}
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
