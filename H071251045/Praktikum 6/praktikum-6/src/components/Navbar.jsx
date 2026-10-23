function Navbar() {
  const menu = [
    { id: 1, nama: "Home", target: "#" },
    { id: 2, nama: "About", target: "#about" },
    { id: 3, nama: "Projects", target: "#projects" },
    { id: 4, nama: "Experience", target: "#gallery" }
  ];

  const handleClick = (nama) => {
    console.log("Menu diklik:", nama);
  };

  return (
    <nav className="bg-blue-950 text-white top-0 sticky z-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 relative">
        
        <h2 className="text-xl font-bold">Rifat.</h2>
        <input 
          type="checkbox" 
          id="menu-toggle" 
          className="peer hidden md:hidden" 
        />

        <label 
          htmlFor="menu-toggle" 
          className="md:hidden cursor-pointer flex flex-col justify-between w-6 h-5 z-20"
          aria-label="Toggle Menu"
        >
          <span className="w-full h-0.5 bg-white transition-transform duration-300 peer-checked:rotate-45 peer-checked:translate-y-2"></span>
          <span className="w-full h-0.5 bg-white transition-opacity duration-350 peer-checked:opacity-0"></span>
          <span className="w-full h-0.5 bg-white transition-transform duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
        </label>

        <ul className="hidden md:flex flex-wrap gap-5 items-center">
          {menu.map((item) => (
            <li key={item.id}>
              <a 
                href={item.target} 
                onClick={() => handleClick(item.nama)} 
                className="font-medium text-slate-400 underline-offset-8 transition hover:text-white hover:underline"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>

        <ul className="absolute top-full left-0 w-full bg-blue-950 px-6 py-4 shadow-lg border-t border-blue-900 hidden peer-checked:flex flex-col space-y-4 md:hidden">
          {menu.map((item) => (
            <li key={item.id}>
              <a 
                href={item.target} 
                onClick={() => handleClick(item.nama)} 
                className="font-medium text-slate-400 underline-offset-8 transition hover:text-white hover:underline"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;