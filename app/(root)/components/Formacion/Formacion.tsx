import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Formacion() {
  return (
    <section id="formacion" className="py-20 px-6 text-white ">
      <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-16 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Educacion
      </h1>
      <div>
        <Card className="bg-linear-to-br from-slate-700 via-blue-600 to-slate-700 border border-gray-700 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white mb-6">
              Ingeniería en Sistemas - 10° Semestre
            </CardTitle>

            <CardDescription className="text-xl text-gray-300">
              Universidad Popular del Cesar (UPC) - Valledupar, Colombia
              <p>Agosto 2019 - Presente</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mb-6 mt-8">
        <Card className="bg-linear-to-br from-slate-700 via-blue-600 to-slate-700 border border-gray-700 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white mb-6">
              Tecnico en Sistemas - 2018
            </CardTitle>

            <CardDescription className="text-xl text-gray-300">
              Sena - Valledupar, Colombia
              <p>Agosto 2018 - Diciembre 2018</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <h1 className="text-4xl md:text-4xl text-center font-extrabold mb-16">
        Cursos y Certificaciones
      </h1>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* CARD 1 */}
        <Card className="bg-[#0f172a] border border-gray-700 shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <Image
            src="/cursos/conceptosbasicosderedes.png"
            alt="Conceptos Basicos de Redes"
            width={600}
            height={400}
            className="rounded-xl mb-4 h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">
              Certificado En Conceptos Basicos De Redes
            </CardTitle>

            <CardDescription className="text-blue-300">
              cisco networking academy
              <p className="text-gray-400">2023</p>
              <a
                href="/cursos/Conceptosbasicosderedes.pdf"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Ver certificado
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* CARD 2 */}
        <Card className="bg-[#0f172a] border border-gray-700 shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <Image
            src="/cursos/defensadelared.png"
            alt="defensa de red"
            width={600}
            height={400}
            className="rounded-xl mb-4 h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">
              Certificado En Defensa De La Red
            </CardTitle>

            <CardDescription className="text-blue-300">
              cisco networking academy
              <p className="text-gray-400">2023</p>
              <a
                href="/cursos/Defensadelared.pdf"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Ver certificado
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* CARD 3 */}
        <Card className="bg-[#0f172a] border border-gray-700 shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <Image
            src="/cursos/fundamentosdepython.png"
            alt="fundamentos de python"
            width={600}
            height={400}
            className="rounded-xl mb-4 h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">
              Certificado De Fundamentos De Python 1
            </CardTitle>

            <CardDescription className="text-blue-300">
              cisco networking academy
              <p className="text-gray-400">2023</p>
              <a
                href="/cursos/FundamentosdePython1.pdf"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Ver certificado
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* CARD 4 */}
        <Card className="bg-[#0f172a] border border-gray-700 shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <Image
            src="/cursos/gestiondeamenazasciberneticas.png"
            alt="gestion de amenazas ciberneticas"
            width={600}
            height={400}
            className="rounded-xl mb-4 h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">
              Certificado De Gestion De Amenazas Ciberneticas
            </CardTitle>

            <CardDescription className="text-blue-300">
              cisco networking academy
              <p className="text-gray-400">2023</p>
              <a
                href="/cursos/GestiondeAmenazasCiberneticas.pdf"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Ver certificado
              </a>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* CARD 5 */}
        <Card className="bg-[#0f172a] border border-gray-700 shadow-xl rounded-2xl p-4 hover:scale-105 transition-transform">
          <Image
            src="/cursos/seguridadterminales.png"
            alt="seguridad terminales"
            width={600}
            height={400}
            className="rounded-xl mb-4 h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">
              Certificado De Seguridad En Terminales
            </CardTitle>

            <CardDescription className="text-blue-300">
              cisco networking academy
              <p className="text-gray-400">2023</p>
              <a
                href="/cursos/SeguridaddeTerminales.pdf"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Ver certificado
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
