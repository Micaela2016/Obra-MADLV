import { motion } from "framer-motion";

export default function Agradecimientos() {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center ">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Agradecimientos
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full shadow-lg rounded-2xl p-8 border border-gray-200"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Aquí podés escribir tus agradecimientos. Por ejemplo:<br /><br />
          A nuestra familia, amigos y a todas las personas que formaron parte de
          este proyecto. Gracias por su apoyo, energía y confianza.
        </p>
      </motion.div>
    </section>
  );
}
