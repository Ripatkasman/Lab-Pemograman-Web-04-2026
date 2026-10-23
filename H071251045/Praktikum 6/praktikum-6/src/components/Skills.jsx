
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
    "Problem Solving",
  ];

  return (
    <section id="experience" className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-6xl font-bold text-slate-900">
          My Skills
        </h2>

        <p className="mt-3 text-slate-600">
          Beberapa bidang yang sedang saya pelajari dan kembangkan.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-blue-200 bg-white px-5 py-3 font-medium text-blue-800 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
