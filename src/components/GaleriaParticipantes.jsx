import { FaInstagram } from "react-icons/fa";

import p_protagonista from "../assets/participantes-prota.jpeg";
import p_coprotagonista from "../assets/participantes-coprotagonista.jpeg";
import p_madre from "../assets/participantes-madre.jpeg";
import p_padre from "../assets/participantes-padre.jpeg";
import p_hermana from "../assets/participantes-hermana.jpeg";
import p_amiga from "../assets/participantes-amiga.jpeg";
import p_abuelo from "../assets/participantes-abuelo.jpeg";
import p_elenco1 from "../assets/participantes-elenco1.jpeg";
import p_elenco2 from "../assets/participantes-elenco2.jpeg";
import p_elenco3 from "../assets/participantes-elenco3.jpeg";
import p_elenco4 from "../assets/participantes-elenco4.jpeg";
import p_elenco5 from "../assets/participantes-elenco5.jpeg";
import p_elenco6 from "../assets/participantes-elenco6.jpeg";

export default function GaleriaParticipantes() {
  const fotos = [
    {
      img: p_protagonista,
      nombre: "Daniela Hermida",
      ig: "https://www.instagram.com/danihermida_?igsh=MWJzb3V4cW82c3B4NA==",
      nombreIg:"danihermida_",
      objectPosition: "center",
      scale: 1,
    },
    {
      img: p_coprotagonista,
      nombre: "Hernan Ontiveros",
      ig: "https://www.instagram.com/ontiveroshernan?igsh=c2h2NDFxa2J6Y2Y0",
      nombreIg:"ontiveroshernan",
      objectPosition: "center",
      scale: 1.4,
    },
    {
      img: p_madre,
      nombre: "Martina Corres",
      ig: "https://www.instagram.com/marticoorres?igsh=b2Q3OWZud3p0YWQ2",
      nombreIg:"marticoorres",
      objectPosition: "center",
      scale: 1.3,
    },
    {
      img: p_padre,
      nombre: "Sofia Urbieta",
      ig: "https://www.instagram.com/sofi.urbieta?igsh=MXUzdDhrMnI5YWRjNQ==",
      nombreIg:"sofi.urbieta",
      objectPosition: "bottom",
      scale: 1.05,
    },
    {
      img: p_hermana,
      nombre: "Nerisa Muriel Suarez Nuñez",
      ig: "https://www.instagram.com/suarez_nerisa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"suarez_nerisa",
      objectPosition: "center",
      scale: 1,
    },
    {
      img: p_amiga,
      nombre: "Celeste Palleres",
      ig: "https://www.instagram.com/celestepalleres?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"celestepalleres",
      objectPosition: "center",
      scale: 1.15,
    },
    {
      img: p_abuelo,
      nombre: "Victoria Abril Bustos",
      ig: "https://www.instagram.com/abrill.bustos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"abrill.bustos",
      objectPosition: "center",
      scale: 1.1,
    },
    {
      img: p_elenco1,
      nombre: "Priscilla Alegre",
      ig: "https://www.instagram.com/priissss_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"priissss_",
      objectPosition: "center",
      scale: 1,
    },
    {
      img: p_elenco2,
      nombre: "Sofia Belén Decca",
      ig: "https://www.instagram.com/sofi_dk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"sofi_dk",
      objectPosition: "center",
      scale: 1.4,
    },
    {
      img: p_elenco3,
      nombre: "Josefina Conte",
      ig: "https://www.instagram.com/josefinnie_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"josefinnie_",
      objectPosition: "center",
      scale: 1.3,
    },
    {
      img: p_elenco4,
      nombre: "Lara Renni Navia",
      ig: "https://www.instagram.com/laranav.renn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"laranav.renn",
      objectPosition: "center",
      scale: 1.1,
    },
    {
      img: p_elenco5,
      nombre: "Ana Veliz",
      ig: "https://www.instagram.com/anivelizz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"anivelizz",
      objectPosition: "center",
      scale: 1.1,
    },
    {
      img: p_elenco6,
      nombre: "Maira Correa",
      ig: "https://www.instagram.com/maicorreaa_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      nombreIg:"maicorreaa_",
      objectPosition: "top",
      scale: 1,
    },
  ];

  return (
    <section id="interpretes" className="p-6 md:p-12 scroll-mt-16">
      <h2 className="text-3xl font-logo mb-6">Intérpretes</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fotos.map((p) => (
          <div key={p.nombre} className="text-center">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-md shadow-md ">
              <img
                src={p.img}
                alt={p.nombre}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: p.objectPosition,
                  transform: `scale(${p.scale})`,
                }}
              />
            </div>
            <p className="mt-2 font-semibold font-link">{p.nombre}</p>

            {p.ig && (
              <a
                href={p.ig}
                target="_blank"
                className="text-sky-600 text-sm sm:text-base inline-flex items-center gap-1 mt-1 font-link"
              >
                <FaInstagram /> {p.nombreIg}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
