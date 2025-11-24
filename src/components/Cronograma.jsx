export default function Cronograma() {
  const escenas = [
    "Presentación de Mía",
    "Escuela: aparece Kim, su mejor amiga, y primer encuentro con Adam.",
    "El accidente",
    "Cambio de época: fiesta antes del accidente.",
    "Presente: conocidos de la familia consolándose; Mía intenta acercarse al padre fallecido.",
    "Pasado: cena familiar, abuelo y Adam. Mía toca el piano, le avisan sobre la audición.",
    "Mía baila con el piano. El abuelo la anima para la audición, se dirigen juntos.",
    "Audición de Mía",
    "Presente: hospital. Fallecimiento del hermano; dúo con él. Madre y padre aparecen al final.",
    "Adam dedica una canción; Mía espíritu baila con él y toma conciencia de su decisión.",
    "Último cuadro entre vida y muerte; familia y conocidos 'luchan' por Mía usando la tela.",
    "Saludo final."
  ];

  return (
    <section id="cronograma" className="px-6 md:px-12 py-8 scroll-mt-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo mb-8">
        Cronograma
      </h2>

      <ul className="space-y-4">
        {escenas.map((escena, index) => (
          <li
            key={index}
            className="bg-white/20 backdrop-blur-sm shadow-md p-6 rounded-md text-base md:text-lg lg:text-xl font-medium hover:bg-white/50 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <span className="font-bold mr-3">{index + 1}.</span>
            {escena}
          </li>
        ))}
      </ul>
    </section>
  );
}

