import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-custom text-black text-center py-6 w-full">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
        Obra en danza "Más allá de la vida"
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
        Tesis de la carrera Reina Reech
      </p>
      <a
        href="https://www.instagram.com/masalladelavida.obra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        className="text-sky-600 text-sm sm:text-xs inline-flex items-center gap-1 mt-1 font-link"
      >
        <FaInstagram /> masalladelavida.obra
      </a>
      <p className="text-xs sm:text-sm md:text-base mt-2 opacity-75">
        © 2025 - Todos los derechos reservados
      </p>
    </footer>
  );
}
