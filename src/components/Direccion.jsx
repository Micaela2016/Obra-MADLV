import { FaInstagram } from "react-icons/fa";
import directoraFoto from "../assets/participantes-directora.jpeg";

export default function Direccion() {
  const scaleDirectora = 1.35;

  const asistentes = [
    { nombre: "Asistente: Valentina Rocha" },
    { nombre: "Asistente: Camila Peñalba" },
  ];

  return (
    <section id="direccion" className="p-6 md:p-12 scroll-mt-16">
      <h2 className="text-3xl sm:text-2xl font-logo mb-6">Dirección</h2>

      {/* Directora */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-lg shadow-lg overflow-hidden">
          <img
            src={directoraFoto}
            alt="Directora"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(${scaleDirectora})`,
              objectPosition: "50% 80%",
            }}
          />
        </div>

        {/* Nombre */}
        <p className="mt-4 font-link font-semibold text-lg sm:text-base">
          Agostina Belén Orellano
        </p>

        {/* Estudio */}
        <p className="text-sm sm:text-xs opacity-80 font-link -mt-1">
          Dirección y coreografía
        </p>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tinaorellanoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="text-sky-600 text-sm sm:text-xs inline-flex items-center gap-1 mt-1 font-link"
        >
          <FaInstagram /> tinaorellano
        </a>
      </div>

      {/* Asistentes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {asistentes.map((a) => (
          <div
            key={a.nombre}
            className="p-3 rounded-md shadow-md border border-gray-200 text-center bg-sky-custom/75"
          >
            <p className="font-link text-base sm:text-sm">
              {a.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
