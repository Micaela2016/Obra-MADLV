export default function Cronograma() {
  const escenas = [
    "Mía y su familia",
    "Escuela, primer encuentro con Adam.",
    "Accidente automovilistico, fallece la madre.",
    "Pasado: Fiesta escolar, amigos y amor.",
    "Presente: el hospital, se enteran del accidente. fallece el padre.",
    "Pasado: Reunion familiar, amor y felicidad. Le avisan a mia sobre una audición.",
    "Seguimos en el pasado: amor y contencion de una abuela a su nieta, la alienta para ir a la audición.",
    "Audición de Mía.",
    "Volvemos al presente: Hospital, Mia se encuentra con su hermana y se despide.",
    "Adam, le dedica una cancion de amor y dolor por todo lo sucedido. Mia tiene que tomar una decision.",
    "Entre la vida y la muerte."
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

