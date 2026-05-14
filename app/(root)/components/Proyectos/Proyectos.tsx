"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiFlutter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";

const proyectos = [
  {
    titulo: "🏐 Sistema Administrativo LIVOLCE",
    descripcion:
      "Aplicación web integral para la Liga de Voleibol del Cesar. Permite registro de deportistas, control de citas, seguimiento de procesos y administración de usuarios.",
    imagen: "/asset/proyectos/voleibol/imagen1.1.png",
    tecnologias: ["React","TypeScript","TailwindCSS","HTML","Node.js","NestJS","PostgreSQL","Docker"],
    repoFrontend: "https://github.com/jobeso2002/despliegue_frontend_proy_final.git",
    repoBackend:  "https://github.com/jobeso2002/despliegue_backend_proy_final.git",
    demo:         "https://despliegue-frontend-proy-final.vercel.app/",
  },
  {
    titulo: "🤖 SaaS Entrevistas Clon",
    descripcion:
      "Plataforma SaaS para simulación de entrevistas técnicas impulsada por IA. Ofrece práctica realista para desarrolladores mejorando habilidades de programación y comunicación.",
    imagen: "/asset/proyectos/saas_entrevistas/clonsaasentrevistas.png",
    tecnologias: ["React","TypeScript","HTML","TailwindCSS","Node.js","Prisma"],
    repoFrontend: "https://github.com/jobeso2002/saas_clon_proyecto.git",
    demo:         "https://saas-clon-proyecto.vercel.app/",
  },
  {
    titulo: "🕹️ Landing Page Mario Bros",
    descripcion:
      "Proyecto de diseño web inspirado en el universo de Mario Bros. Creado para perfeccionar habilidades en animaciones, diseño responsivo y maquetación avanzada.",
    imagen: "/asset/proyectos/landing/inicio.png",
    tecnologias: ["React","TailwindCSS","HTML","TypeScript"],
    repoFrontend: "https://github.com/jobeso2002/landing_mariobros.git",
    demo:         "https://mariobros123.netlify.app/",
  },
  {
    titulo: "☀️ Calculadora Solar",
    descripcion:
      "Aplicación web interactiva que simula la inversión necesaria para instalación de paneles solares, estimando costos y beneficios del proyecto.",
    imagen: "/asset/proyectos/solar/mienergiasolar.png",
    tecnologias: ["React","TailwindCSS","TypeScript","HTML"],
    repoFrontend: "https://github.com/jobeso2002/hackatonfinal.git",
    demo:         "https://calculadorasolar2025.netlify.app/",
  },
  {
    titulo: "✅ Todo List Flutter",
    descripcion:
      "Aplicación de lista de tareas desarrollada con Flutter para entorno web. Permite crear, editar y eliminar tareas con una interfaz limpia e intuitiva.",
    imagen: "/asset/proyectos/flutter/todo_list.png",
    tecnologias: ["Flutter"],
    repoFrontend: "https://github.com/jobeso2002/todo_list_flutter.git",
  },
  {
    titulo: "🍳 Recetas de Cocina Flutter",
    descripcion:
      "Aplicación Flutter web para explorar y gestionar recetas de cocina. Diseñada con una experiencia visual atractiva para los amantes de la gastronomía.",
    imagen: "/asset/proyectos/flutter/recetas_cocina.png",
    tecnologias: ["Flutter"],
    repoFrontend: "https://github.com/jobeso2002/recetas_cocinas_flutter.git",
  },
  {
    titulo: "💰 Gestión de Gastos Flutter",
    descripcion:
      "App Flutter web para el control y seguimiento de gastos personales. Permite registrar, categorizar y visualizar movimientos financieros de forma sencilla.",
    imagen: "/asset/proyectos/flutter/gestion_gasto.png",
    tecnologias: ["Flutter"],
    repoFrontend: "https://github.com/jobeso2002/gestion_gasto_flutter.git",
  },
  {
    titulo: "🧮 Calculadora Java",
    descripcion:
      "Calculadora de escritorio desarrollada en Java con interfaz gráfica. Soporta operaciones aritméticas básicas con un diseño funcional y limpio.",
    imagen: "/asset/proyectos/java/calculadora.png",
    tecnologias: ["Java"],
    repoFrontend: "https://github.com/jobeso2002/calculadora.git",
  },
  {
    titulo: "🔐 Login Java",
    descripcion:
      "Sistema de autenticación con interfaz gráfica en Java. Incluye validación de credenciales, manejo de sesiones y flujo de inicio de sesión seguro.",
    imagen: "/asset/proyectos/java/login_java.png",
    tecnologias: ["Java"],
    repoFrontend: "https://github.com/jobeso2002/login_java.git",
  },
  {
    titulo: "👥 Gestor de Usuarios Java",
    descripcion:
      "Aplicación de escritorio en Java para la gestión completa de usuarios. Permite crear, editar, eliminar y listar usuarios con interfaz gráfica robusta.",
    imagen: "/asset/proyectos/java/gestor_usuarios.png",
    tecnologias: ["Java"],
    repoFrontend: "https://github.com/jobeso2002/Gestor_Usuarios.git",
  },
];

const techStyles: Record<string, { color: string; icon: React.ReactNode }> = {
  React:       { color: "bg-sky-500/20 text-sky-400 border-sky-500/30",             icon: <SiReact        size={12} /> },
  TailwindCSS: { color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",           icon: <SiTailwindcss  size={12} /> },
  HTML:        { color: "bg-orange-500/20 text-orange-400 border-orange-500/30",     icon: <SiHtml5        size={12} /> },
  TypeScript:  { color: "bg-blue-500/20 text-blue-400 border-blue-500/30",           icon: <SiTypescript   size={12} /> },
  JavaScript:  { color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",     icon: <SiJavascript   size={12} /> },
  "Node.js":   { color: "bg-green-500/20 text-green-400 border-green-500/30",        icon: <SiNodedotjs    size={12} /> },
  NestJS:      { color: "bg-red-500/20 text-red-400 border-red-500/30",              icon: <SiNestjs       size={12} /> },
  PostgreSQL:  { color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",     icon: <SiPostgresql   size={12} /> },
  Docker:      { color: "bg-blue-400/20 text-blue-300 border-blue-400/30",           icon: <SiDocker       size={12} /> },
  Prisma:      { color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",  icon: <SiPrisma       size={12} /> },
  Flutter:     { color: "bg-sky-400/20 text-sky-300 border-sky-400/30",              icon: <SiFlutter      size={12} /> },
  Java:        { color: "bg-amber-500/20 text-amber-400 border-amber-500/30",        icon: <FaJava         size={12} /> },
};

export default function Proyectos() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="proyectos" className="py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-white">
        Mis{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Proyectos
        </span>
      </h2>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-6xl"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {proyectos.map((proyecto, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-slate-800/60 backdrop-blur-md border border-blue-500/20 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-blue-900/30 h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>

                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-base font-bold text-white leading-tight">
                      {proyecto.titulo}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 flex flex-col flex-1">
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed flex-1">
                      {proyecto.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proyecto.tecnologias.map((tec, i) => {
                        const style = techStyles[tec] ?? {
                          color: "bg-slate-700/50 text-slate-300 border-slate-600/30",
                          icon: <Code size={12} />,
                        };
                        return (
                          <Badge
                            key={i}
                            variant="outline"
                            className={`flex items-center gap-1 px-2 py-0.5 text-xs font-medium border ${style.color}`}
                          >
                            {style.icon}
                            {tec}
                          </Badge>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap justify-between gap-2 mt-auto">
                      <div className="flex gap-2">
                        {proyecto.repoFrontend && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-slate-700 text-slate-300 bg-slate-700 hover:bg-slate-700 hover:text-white text-xs"
                          >
                            <a href={proyecto.repoFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <Github size={14} /> Código
                            </a>
                          </Button>
                        )}
                        {proyecto.repoBackend && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-slate-700 text-slate-300 bg-slate-700  hover:bg-slate-700 hover:text-white text-xs"
                          >
                            <a href={proyecto.repoBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <Github size={14} /> Backend
                            </a>
                          </Button>
                        )}
                      </div>
                      {proyecto.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs"
                        >
                          <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <ExternalLink size={14} /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-slate-800/80 hover:bg-slate-700 text-white border border-blue-500/30 backdrop-blur-md" />
          <CarouselNext    className="bg-slate-800/80 hover:bg-slate-700 text-white border border-blue-500/30 backdrop-blur-md" />
        </Carousel>
      </div>
    </section>
  );
}