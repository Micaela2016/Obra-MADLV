import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portada7 from "../assets/Ensayo1.png";
import portada2 from "../assets/Ensayo2.png";
import portada3 from "../assets/Ensayo3.png";
import portada4 from "../assets/Ensayo4.png";
import portada5 from "../assets/Ensayo5.png";
import portada6 from "../assets/Ensayo6.png";
import portada1 from "../assets/Ensayo7.png";
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

const images = [portada1, portada2, portada3, portada4, portada5, portada6, portada7, portada8, portada9, portada10];
const images2 = [portada11, portada12, portada13, portada14, portada15, portada16, portada17, portada18, portada19, portada20];

export default function GaleriaEnsayos() {
    const [current1, setCurrent1] = useState(0);
    const [current2, setCurrent2] = useState(0);

    // Slider 1
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent1((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Slider 2
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent2((prev) => (prev + 1) % images2.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="galeria"
            className="flex flex-col items-start justify-start w-full overflow-hidden scroll-mt-16 px-6"
        >
            {/* Título alineado a la izquierda */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo mb-6 text-left w-full">
                Galería de fotos
            </h2>

            {/* Slider 1 */}
            <div className="relative w-full flex items-center justify-center mb-16">
                <AnimatePresence mode="wait">
                    {images.map((img, index) =>
                        index === current1 ? (
                            <motion.img
                                key={index}
                                src={img}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] object-cover brightness-75"
                            />
                        ) : null
                    )}
                </AnimatePresence>

                {/* Puntos del slider */}
                <div className="absolute bottom-4 flex space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent1(index)}
                            className={`w-3 h-3 rounded-full ${index === current1 ? "bg-sky-custom" : "bg-zinc-500"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Slider 2 */}
            <div className="relative w-full flex items-center justify-center mb-16">
                <AnimatePresence mode="wait">
                    {images2.map((img, index) =>
                        index === current1 ? (
                            <motion.img
                                key={index}
                                src={img}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] object-cover brightness-75"
                            />
                        ) : null
                    )}
                </AnimatePresence>

                {/* Puntos del slider */}
                <div className="absolute bottom-4 flex space-x-3">
                    {images2.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent2(index)}
                            className={`w-3 h-3 rounded-full ${index === current2 ? "bg-sky-custom" : "bg-zinc-500"}`}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
}
