import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-white">
          Sobre{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Mí
          </span>
        </h2>

        {/* Card glassmorphism */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Foto de perfil */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-md opacity-50 scale-105" />
                <Image
                  src="/asset/foto-perfil.jpg"
                  alt="José Alfredo Obeso"
                  width={150}
                  height={150}
                  className="relative rounded-full border-4 border-blue-500/60 object-cover w-36 h-36 md:w-44 md:h-44"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                José Alfredo Obeso Lora
              </h3>
              <p className="text-blue-400 text-sm font-medium mb-4 tracking-wide uppercase">
                Desarrollador Fullstack · Valledupar, Colombia
              </p>
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                Apasionado del{" "}
                <span className="text-blue-300 font-semibold">
                  desarrollo web fullstack, la automatización y los sistemas
                  distribuidos
                </span>
                , con experiencia tanto en{" "}
                <span className="text-cyan-300 font-semibold">
                  frontend (React, Next.js, TypeScript)
                </span>{" "}
                como en{" "}
                <span className="text-indigo-300 font-semibold">
                  backend (Node.js, NestJS, PostgreSQL)
                </span>
                . Desde 2019 he trabajado en proyectos que fortalecen mis
                habilidades técnicas y el diseño UI/UX, creando soluciones
                innovadoras, eficientes y funcionales.
              </p>

              {/* Links de contacto */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="mailto:josealfredoobesolora7@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail size={16} />
                  josealfredoobesolora7@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/josé-alfredo-obeso-270440257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jobeso2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Github size={16} />
                  github.com/jobeso2002
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}