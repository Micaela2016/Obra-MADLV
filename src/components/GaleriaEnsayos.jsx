import { Carousel } from "flowbite-react";

// --- Importaciones ---
import portada1 from "../assets/Ensayo7.png";
import portada2 from "../assets/Ensayo2.png";
import portada3 from "../assets/Ensayo3.png";
import portada4 from "../assets/Ensayo4.png";
import portada5 from "../assets/Ensayo5.png";
import portada6 from "../assets/Ensayo6.png";
import portada7 from "../assets/Ensayo1.png";
import portada8 from "../assets/Ensayo8.png";
import portada9 from "../assets/Ensayo9.png";
import portada10 from "../assets/Ensayo10.png";

import portada11 from "../assets/ensa1.jpeg";
import portada12 from "../assets/ensa2.jpeg";
import portada13 from "../assets/ensa3.jpeg";
import portada14 from "../assets/ensa4.jpeg";
import portada15 from "../assets/ensa5.jpeg";
import portada16 from "../assets/ensa6.jpeg";
import portada17 from "../assets/ensa7.jpeg";
import portada18 from "../assets/ensa8.jpeg";
import portada19 from "../assets/ensa9.jpeg";
import portada20 from "../assets/ensa10.webp";
import portada21 from "../assets/ensa11.jpeg";
import portada22 from "../assets/ensa12.jpeg";
import portada23 from "../assets/ensa13.webp";
import portada25 from "../assets/ensa15.jpeg";

// ---------------------
// ESCALAS INDIVIDUALES
// ---------------------
const images = [
  { src: portada1, scale: "scale-[1.00]",objectPosition: "center", },
  { src: portada2, scale: "scale-[1.00]",objectPosition: "50% 30%", },
  { src: portada3, scale: "scale-[1.05]",objectPosition: "center", },
  { src: portada4, scale: "scale-[1.00]",objectPosition: "center", },
  { src: portada5, scale: "scale-[1.10]",objectPosition: "center", },
  { src: portada6, scale: "scale-[1.04]",objectPosition: "center", },
  { src: portada7, scale: "scale-[1.02]",objectPosition: "50% 40%", },
  { src: portada8, scale: "scale-[1.07]",objectPosition: "50% 30%", },
  { src: portada9, scale: "scale-[1.09]",objectPosition: "center", },
  { src: portada10, scale: "scale-[1.06]",objectPosition: "50% 40%", },
];

const images2 = [
  { src: portada11, scale: "scale-[1.02]",objectPosition: "center", },
  { src: portada12, scale: "scale-[1.04]",objectPosition: "center", },
  { src: portada13, scale: "scale-[1.00]",objectPosition: "center", },
  { src: portada14, scale: "scale-[1.06]",objectPosition: "center", },
  { src: portada15, scale: "scale-[1.03]",objectPosition: "center", },
  { src: portada16, scale: "scale-[1.05]",objectPosition: "center", },
  { src: portada17, scale: "scale-[1.01]",objectPosition: "center", },
  { src: portada18, scale: "scale-[1.08]",objectPosition: "center", },
  { src: portada19, scale: "scale-[1.09]",objectPosition: "center", },
  { src: portada20, scale: "scale-[1.07]",objectPosition: "center", },
  { src: portada21, scale: "scale-[1.07]",objectPosition: "center", },
  { src: portada22, scale: "scale-[1.07]",objectPosition: "center", },
  { src: portada23, scale: "scale-[1.07]",objectPosition: "center", },
  { src: portada25, scale: "scale-[1.07]",objectPosition: "center", },
];

export default function GaleriaEnsayos() {
  return (
    <section
      id="galeria"
      className="flex flex-col items-start justify-start w-full scroll-mt-16 px-6"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo mb-6 text-left w-full">
        Galería de fotos
      </h2>

      {/* === GALERÍA 1 === */}
      <div className="w-full h-64 sm:h-80 md:h-[450px] mb-16 overflow-hidden">
        <Carousel
          className="h-full"            // <--- necesario para ocupar alto completo
          slide={true}                 // fade
          slideInterval={4000}          // autoplay cada 4s
          pauseOnHover={true}
          indicators={false}
          controls
          leftControl={<span className="text-[#9bd1e7] text-3xl">❮</span>}
          rightControl={<span className="text-[#9bd1e7] text-3xl">❯</span>}
          transition={{ duration: 1.2 }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full overflow-hidden">
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                  objectPosition: img.objectPosition,
                  transform: `scale(${img.scale})`,
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* === GALERÍA 2 === */}
      <div className="w-full h-64 sm:h-80 md:h-[450px] mb-16 overflow-hidden">
        <Carousel
          className="h-full"
          slide={true}
          slideInterval={4000}
          pauseOnHover={true}
          indicators={false}
          controls
          leftControl={<span className="text-[#9bd1e7] text-3xl">❮</span>}
          rightControl={<span className="text-[#9bd1e7] text-3xl">❯</span>}
          transition={{ duration: 1.2 }}
        >
          {images2.map((img, i) => (
            <div key={i} className="w-full h-full overflow-hidden">
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  style={{
                  objectPosition: img.objectPosition,
                  transform: `scale(${img.scale})`,
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
