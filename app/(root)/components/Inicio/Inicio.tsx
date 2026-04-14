"use client";
import { Github, Mail, FileDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Fondo decorativo con orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Disponible para trabajar
        </div>

        {/* Nombre */}
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">
          José Alfredo{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Obeso Lora
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-blue-300/80 text-lg md:text-xl mb-6 font-medium tracking-wide">
          Desarrollador Fullstack · Ingeniero de Sistemas
        </p>

        {/* TypeAnimation */}
        <div className="mb-8 flex justify-center">
          <span className="inline-block bg-slate-800/80 border border-blue-500/30 text-white shadow-lg shadow-blue-900/30 px-6 py-2.5 rounded-xl text-lg font-mono">
            <TypeAnimation
              sequence={[
                "🖥️ Desarrollador Frontend",
                1000,
                "⚙️ Desarrollador Backend",
                1000,
                "🚀 Desarrollador Fullstack",
                1000,
              ]}
              wrapper="span"
              speed={65}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* Descripción */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Desarrollo soluciones web modernas con enfoque en eficiencia,
          escalabilidad y experiencia de usuario. Del diseño al deploy.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-900/40"
          >
            <a href="#proyectos">🧠 Ver proyectos</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500/40 text-blue-800 hover:bg-blue-500/10 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            <a
              href="/cv/hojavida.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileDown size={18} />
              Descargar CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-700 hover:bg-slate-700/50 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            <a
              href="https://github.com/jobeso2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-indigo-900/40"
          >
            <a href="#contacto" className="flex items-center gap-2">
              <Mail size={18} />
              Contacto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}