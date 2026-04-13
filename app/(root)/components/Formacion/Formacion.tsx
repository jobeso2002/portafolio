import Image from "next/image";

const certificaciones = [
  {
    img:   "/cursos/conceptosbasicosderedes.png",
    alt:   "Conceptos Básicos de Redes",
    title: "Conceptos Básicos de Redes",
    pdf:   "/cursos/Conceptosbasicosderedes.pdf",
    year:  "2023",
  },
  {
    img:   "/cursos/defensadelared.png",
    alt:   "Defensa de Red",
    title: "Defensa de la Red",
    pdf:   "/cursos/Defensadelared.pdf",
    year:  "2023",
  },
  {
    img:   "/cursos/fundamentosdepython.png",
    alt:   "Fundamentos de Python",
    title: "Fundamentos de Python 1",
    pdf:   "/cursos/FundamentosdePython1.pdf",
    year:  "2023",
  },
  {
    img:   "/cursos/gestiondeamenazasciberneticas.png",
    alt:   "Gestión de Amenazas Cibernéticas",
    title: "Gestión de Amenazas Cibernéticas",
    pdf:   "/cursos/GestiondeAmenazasCiberneticas.pdf",
    year:  "2023",
  },
  {
    img:   "/cursos/seguridadterminales.png",
    alt:   "Seguridad en Terminales",
    title: "Seguridad en Terminales",
    pdf:   "/cursos/SeguridaddeTerminales.pdf",
    year:  "2023",
  },
];

export default function Formacion() {
  return (
    <section id="formacion" className="py-24 px-6">
      {/* Título con tilde */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-white">
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Educación
        </span>
      </h2>

      {/* Cards de formación académica */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-20">
        {/* Ingeniería en Sistemas */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 shadow-xl hover:-translate-y-0.5 transition-transform duration-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Ingeniería en Sistemas
              </h3>
              <p className="text-slate-400 text-sm">
                Universidad Popular del Cesar (UPC) · Valledupar, Colombia
              </p>
              <p className="text-slate-500 text-sm mt-0.5">
                Agosto 2019 – Diciembre 2025
              </p>
            </div>
            {/* Badge graduado */}
            <span className="self-start inline-flex items-center gap-1.5 bg-green-500/15 text-green-400 border border-green-500/30 text-sm px-3 py-1 rounded-full whitespace-nowrap">
              ✅ Graduado · 2025
            </span>
          </div>
        </div>

        {/* Técnico en Sistemas */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 shadow-xl hover:-translate-y-0.5 transition-transform duration-200">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Técnico en Sistemas
            </h3>
            <p className="text-slate-400 text-sm">
              SENA · Valledupar, Colombia
            </p>
            <p className="text-slate-500 text-sm mt-0.5">
              Agosto 2018 – Diciembre 2018
            </p>
          </div>
        </div>
      </div>

      {/* Cursos y Certificaciones */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
        Cursos y{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Certificaciones
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certificaciones.map((cert) => (
          <div
            key={cert.title}
            className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-blue-900/30"
          >
            <Image
              src={cert.img}
              alt={cert.alt}
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h4 className="text-white font-semibold text-sm mb-1">
                {cert.title}
              </h4>
              <p className="text-blue-400 text-xs mb-0.5">Cisco Networking Academy</p>
              <p className="text-slate-500 text-xs mb-3">{cert.year}</p>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline underline-offset-2 transition-colors"
              >
                Ver certificado →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}