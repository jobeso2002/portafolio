import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-16 flex justify-center">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 text-center">
        <CardHeader className="space-y-4">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-blue-700 via-purple-600 to-black bg-clip-text text-transparent">
            Sobre <span className="text-white">Mí</span>
          </CardTitle>

          <CardDescription className="text-lg text-gray-200 leading-relaxed">
            Soy{" "}
            <span className="font-semibold text-blue-400">
              José Alfredo Obeso Lora
            </span>
            , un apasionado del{" "}
            <span className="font-semibold">
              desarrollo web, la automatización y los sistemas distribuidos
            </span>
            . Desde 2019 he trabajado en proyectos que me han permitido
            fortalecer mis habilidades técnicas y mejorar continuamente en el
            diseño UI/UX, enfocándome siempre en ofrecer una experiencia de
            usuario óptima. Disfruto aprender nuevas tecnologías y aplicarlas en
            mis proyectos para crear soluciones innovadoras, eficientes y
            funcionales, que impulsen mi crecimiento profesional y contribuyan
            al éxito de cada desarrollo que realizo.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
