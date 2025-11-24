import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portada1 from "../assets/inicio.jpeg";
import portada2 from "../assets/inicio2.jpeg";
import portada3 from "../assets/inicio3.jpeg";
// Agrega más fotos aquí si quieres
//import portada4 from "../assets/inicio4.jpeg";
//import portada5 from "../assets/inicio5.jpeg";

const images = [portada1, portada2, portada3];

export default function GaleriaEnsayos() {
    const [current, setCurrent] = useState(0);

    // Cambiar automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const scrollToCronograma = () => {
        const section = document.getElementById("cronograma");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="galeria"
            className="flex flex-col items-center justify-start min-h-[70vh] sm:min-h-screen overflow-hidden scroll-mt-16"
        >
            {/* Título arriba de las fotos */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo mb-8">
                Galería de fotos
            </h2>

            {/* Slider de imágenes */}
            <div className="relative w-full flex-1 flex items-center justify-center">
                <AnimatePresence>
                    {images.map((img, index) =>
                        index === current ? (
                            <motion.img
                                key={index}
                                src={img}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 w-full h-full object-cover object-center sm:object-top brightness-75"
                            />
                        ) : null
                    )}
                </AnimatePresence>

                {/* Puntos del slider */}
                <div className="absolute bottom-8 flex space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-sky-custom" : "bg-zinc-500"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
