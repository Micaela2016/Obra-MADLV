import { motion } from "framer-motion";
import fondo from "../assets/ensa1.jpeg";

export default function Home() {
  const scrollToCronograma = () => {
    const section = document.getElementById("cronograma");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
       className="relative min-h-[70vh] sm:min-h-screen overflow-hidden flex items-center"
    >
      {/* Imagen de fondo */}
      <img
        src={fondo}
        alt="fondo"
        className="absolute inset-0 w-full h-full object-contain object-center brightness-75 bg-black"
      />

      {/* Contenedor del contenido sobre el video */}
      <div className="absolute inset-0 flex flex-col justify-between px-4 py-6 z-10 pt-20">
        {/* Texto superior */}
        <div className="text-center mt-4">
          <p className="text-sm sm:text-lg md:text-xl max-w-xs sm:max-w-md mx-auto text-white">
            Obra en danza inspirada en
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-logo drop-shadow-lg mt-2 text-white">
            "Sí decido quedarme"
          </h2>
        </div>

        {/* Botón inferior */}
        <div className="text-center mb-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCronograma}
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-sky-custom text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Ver Cronograma
          </motion.button>
        </div>
      </div>
    </section>
  );
}
