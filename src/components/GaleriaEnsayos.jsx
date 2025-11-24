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
import portada20 from "../assets/ensa10.jpeg";

const images = [
  portada1, portada2, portada3, portada4, portada5,
  portada6, portada7, portada8, portada9, portada10
];

const images2 = [
  portada11, portada12, portada13, portada14, portada15,
  portada16, portada17, portada18, portada19, portada20
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
      <div className="w-full h-64 sm:h-80 md:h-[450px] mb-16 group">
        <Carousel
          slideInterval={4000}
          controls
          indicators={false}
          pauseOnHover={true}
          transition={{ duration: 1.2 }}
          slide={false}  // desactiva slide y activa FADING
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          ))}
        </Carousel>
      </div>

      {/* === GALERÍA 2 === */}
      <div className="w-full h-64 sm:h-80 md:h-[450px] mb-16 group">
        <Carousel
          slideInterval={4000}
          controls
          indicators={false}
          pauseOnHover={true}
          transition={{ duration: 1.2 }}
          slide={false} // fading también
        >
          {images2.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
