import { FaInstagram } from "react-icons/fa";
import directoraFoto from "../assets/participantes-directora.jpeg";

// FOTO ÚNICA DE LAS ASISTENTES
import asistentesFoto from "../assets/asistentes.jpeg";

export default function Direccion() {
  const scaleDirectora = 1.35;
  const scaleAsistentes = 1.1; // podés ajustar

  const asistentes = [
    {
      nombre: "Valentina Rocha",
      ig: "https://www.instagram.com/vaalrochx__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg: "vaalrochx__"}, 
    {
      nombre: "Camila Peñalba",
      ig: "https://www.instagram.com/camii.penalba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // cambiar
      nombreIg: "camii.penalba", // cambiar
    },
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

        <p className="mt-4 font-link font-semibold text-lg sm:text-base">
          Agostina Belén Orellano
        </p>

        <p className="text-sm sm:text-xs opacity-80 font-link -mt-1">
          Dirección y coreografía
        </p>

        <a
          href="https://www.instagram.com/tinaorellanoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="text-sky-600 text-sm sm:text-xs inline-flex items-center gap-1 mt-1 font-link"
        >
          <FaInstagram /> tinaorellano
        </a>
      </div>

      
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-2xl sm:text-xl font-logo mb-4">Asistentes:</h3>
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg shadow-md overflow-hidden">
          <img
            src={asistentesFoto}
            alt="Asistentes"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(${scaleAsistentes})`,
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Nombres + IG */}
      <div className="grid grid-cols-1 sm:grid-cols-2 p-2 sm:p-4 md:p-6 rounded-xl gap-4">
        {asistentes.map((a) => (
          <div
            key={a.nombre}
            className="p-1 rounded-md shadow-md border border-gray-200 text-center bg-sky-custom/20 sm:text-xl"
          >
            <p className="font-link font-semibold text-base sm:text-sm">
              {a.nombre}
            </p>

            <a
              href={a.ig}
              target="_blank"
              className="text-sky-600 text-sm sm:text-xs inline-flex items-center gap-1 mt-1 font-link"
            >
              <FaInstagram /> {a.nombreIg}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
