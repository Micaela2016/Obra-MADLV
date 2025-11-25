import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-sky-custom text-white shadow-lg z-50 `}>
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-sm">
        <h1 onClick={() => scrollToSection("home")} className="text-2xl font-logo italic tracking-wide text-gray-900">
          Más allá de la vida
        </h1>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1 transition">
            <div className={`w-6 h-0.5 bg-black ${open ? "rotate-45 translate-y-1.5" : ""} transition-all duration-300`}></div>
            <div className={`w-6 h-0.5 bg-black ${open ? "opacity-0" : ""} transition-all duration-300`}></div>
            <div className={`w-6 h-0.5 bg-black ${open ? "-rotate-45 -translate-y-1.5" : ""} transition-all duration-300`}></div>
          </div>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 md:text-lg font-link text-gray-600 ">

          <li onClick={() => scrollToSection("historia")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Historia</li>
          <li onClick={() => scrollToSection("cronograma")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Cronograma</li>
          <li onClick={() => scrollToSection("interpretes")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Intérpretes</li>
          <li onClick={() => scrollToSection("direccion")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Dirección</li>
          <li onClick={() => scrollToSection("galeria")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Galería</li>
        </ul>
      </div>

      {/* Menú mobile animado */}
      <div
        className={`md:hidden bg-sky-custom overflow-hidden transition-all duration-500 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col text-center md:text-lg py-4 space-y-4 text-gray-600 ">
          <li onClick={() => scrollToSection("historia")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Historia</li>
          <li onClick={() => scrollToSection("cronograma")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Cronograma</li>
          <li onClick={() => scrollToSection("interpretes")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Intérpretes</li>
          <li onClick={() => scrollToSection("direccion")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Dirección</li>
          <li onClick={() => scrollToSection("galeria")} className="cursor-pointer hover:opacity-80 hover:underline hover:decoration-2 hover:underline-offset-4">Galería</li>
        </ul>
      </div>
    </nav>
  );
}
