import {
  Card,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 px-6 text-white text-center">
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-16 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Mis <span className="text-white">Habilidades</span>
      </h1>

      {/* Contenedor de las cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* === Card Diseño === */}
        <Card className="bg-linear-to-br from-slate-700 via-blue-600 to-slate-700 border border-gray-700 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            
            <CardTitle className="text-2xl font-bold text-pink-500 mb-6">
              Diseño
            </CardTitle>

            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <Image src="/asset/diseño/figma.png" alt="Figma" width={40} height={40} />
                <p className="text-gray-300 text-sm mt-2">Figma</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/asset/diseño/pincel.png" alt="UI/UX" width={40} height={40} />
                <p className="text-gray-300 text-sm mt-2">Diseño UI/UX</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/asset/diseño/canva.png" alt="Canva" width={40} height={40} />
                <p className="text-gray-300 text-sm mt-2">Canva</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* === Card Tecnologías === */}
        <Card className="bg-linear-to-br from-slate-700 via-blue-600 to-slate-700 border border-gray-700 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            
            <CardTitle className="text-2xl font-bold text-cyan-300 mb-6">
              Tecnologías
            </CardTitle>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {[
                ["html.png", "HTML5"],
                ["css.png", "CSS3"],
                ["javascripticono.png", "JavaScript"],
                ["react.png", "React"],
                ["nextjs.png", "Next.js"],
                ["typescript.png", "TypeScript"],
                ["tailwind.png", "Tailwind CSS"],
                ["flutter.png", "Flutter"],
                ["dart.png", "Dart"],
              ].map(([icon, name]) => (
                <div key={name} className="flex flex-col items-center">
                  <Image src={`/asset/tecnologia/${icon}`} alt={name} width={60} height={60} />
                  <p className="text-gray-300 text-sm mt-2">{name}</p>
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* === Card Habilidades Blandas === */}
        <Card className="bg-linear-to-br from-slate-700 via-blue-600 to-slate-700 border border-gray-700 shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <CardHeader>
            
            <CardTitle className="text-2xl font-bold text-purple-500 mb-6">
              Blandas
            </CardTitle>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {[
                ["trabajoequipo.png", "Trabajo en equipo"],
                ["comunicacion.png", "Comunicación"],
                ["tiempo.png", "Gestión del tiempo"],
                ["orientacionresultados.png", "Orientación a resultados"],
                ["resolucionproblemas.png", "Resolución de problemas"],
                ["adptabilidad.png", "Adaptabilidad"],
              ].map(([icon, name]) => (
                <div key={name} className="flex flex-col items-center">
                  <Image src={`/asset/blandas/${icon}`} alt={name} width={60} height={60} />
                  <p className="text-gray-300 text-sm mt-2 text-center">{name}</p>
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
