import React from "react";

const Navbar = () => (
  <nav className="fixed w-full bg-[#0f0f10]/70 backdrop-blur-md text-white z-50 border-b border-gray-800 shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-400 tracking-wide">Samuel Solano</h1>
      <ul className="flex space-x-6">
        {["Inicio","Sobre mí","Habilidades","Proyectos","Contacto"].map((item,i)=>(
          <li key={i}>
            <a 
              href={`#${item.toLowerCase().replace(" ","")}`} 
              className="relative text-gray-300 hover:text-indigo-400 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-400 hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
