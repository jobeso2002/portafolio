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
import {
  Code,
  ExternalLink,
  Github,
  LayoutGrid,
  Server,
  UserCheck,
} from "lucide-react";
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
} from "react-icons/si";
import Autoplay from "embla-carousel-autoplay";

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "🏐 Sistema Administrativo LIVOLCE",
      descripcion:
        "Aplicación web integral desarrollada para la Liga de Voleibol del Cesar (LIVOLCE), diseñada para optimizar la gestión administrativa y deportiva de la organización. Permite el registro de deportistas, control de citas, seguimiento de procesos y administración de usuarios. Implementada con tecnologías modernas enfocadas en eficiencia y automatización de procesos internos.",
      imagen: "/asset/proyectos/voleibol/imagen1.1.png",
      tecnologias: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "HTML",
        "Shadcn UI",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Docker",
      ],
      repoFrontend: "https://github.com/jobeso2002/despliegue_frontend_proy_final.git",
      repoBackend: "https://github.com/jobeso2002/despliegue_backend_proy_final.git",
      demo: "https://despliegue-frontend-proy-final.vercel.app/",
    },
    {
      titulo: "🤖 SaaS Entrevistas Clon",
      descripcion:
        "Clon funcional de una plataforma tipo SaaS para simulación de entrevistas técnicas, impulsada por inteligencia artificial. Su objetivo es ofrecer una experiencia de práctica realista para desarrolladores, mejorando sus habilidades de programación y comunicación en entornos similares a entrevistas laborales.",
      imagen: "/asset/proyectos/saas_entrevistas/clonsaasentrevistas.png",
      tecnologias: [
        "React",
        "TypeScript",
        "HTML",
        "TailwindCSS",
        "Node.js",
        "Prisma",
        "Clerck.js",
        "Vapi",
        "Shadcn UI",
      ],
      repoFrontend: "https://github.com/jobeso2002/saas_clon_proyecto.git",
      demo: "https://saas-clon-proyecto.vercel.app/",
    },
    {
      titulo: "🕹️ Landing Page Mario Bros",
      descripcion:
        "Proyecto de diseño web inspirado en el universo de Mario Bros, desarrollado con Tailwind CSS. Este landing page fue creado con el propósito de perfeccionar mis habilidades en el manejo de estilos, animaciones y diseño responsivo, explorando técnicas avanzadas de maquetación y personalización visual para fortalecer mi dominio en el frontend.",
      imagen: "/asset/proyectos/landing/inicio.png",
      tecnologias: ["React", "TailwindCSS", "HTML", "TypeScript", "Shadcn UI"],
      repoFrontend: "https://github.com/jobeso2002/landing_mariobros.git",
      demo: "https://mariobros123.netlify.app/",
    },
    {
      titulo: "☀️ Calculadora Solar",
      descripcion:
        "Aplicación web interactiva que simula la inversión necesaria para la instalación de paneles solares, permitiendo al usuario estimar los costos y beneficios del proyecto. Este proyecto busca facilitar la comprensión financiera y técnica sobre el uso de energías renovables.",
      imagen: "/asset/proyectos/solar/mienergiasolar.png",
      tecnologias: ["React", "TailwindCSS", "TypeScript", "HTML", "Shadcn UI"],
      repoFrontend: "https://github.com/jobeso2002/hackatonfinal.git",
      demo: "https://calculadorasolar2025.netlify.app/",
    },
  ];

  // 🎨 Colores e íconos por tecnología
  const techStyles: Record<string, { color: string; icon: React.ReactNode }> = {
    React: { color: "bg-sky-500/20 text-sky-400", icon: <SiReact /> },
    TailwindCSS: {
      color: "bg-cyan-500/20 text-cyan-400",
      icon: <SiTailwindcss />,
    },
    HTML: { color: "bg-orange-500/20 text-orange-400", icon: <SiHtml5 /> },
    TypeScript: {
      color: "bg-blue-500/20 text-blue-400",
      icon: <SiTypescript />,
    },
    JavaScript: {
      color: "bg-yellow-500/20 text-yellow-400",
      icon: <SiJavascript />,
    },
    "Node.js": {
      color: "bg-green-500/20 text-green-400",
      icon: <SiNodedotjs />,
    },
    NestJS: { color: "bg-red-500/20 text-red-400", icon: <SiNestjs /> },
    PostgreSQL: {
      color: "bg-indigo-500/20 text-indigo-400",
      icon: <SiPostgresql />,
    },
    Docker: { color: "bg-blue-400/20 text-blue-300", icon: <SiDocker /> },
    Prisma: { color: "bg-emerald-500/20 text-emerald-400", icon: <SiPrisma /> },
    "Shadcn UI": {
      color: "bg-indigo-500/20 text-indigo-400",
      icon: <LayoutGrid size={14} />,
    },
    "Clerk.js": {
      color: "bg-pink-500/20 text-pink-400",
      icon: <UserCheck size={14} />,
    },
    Vapi: {
      color: "bg-purple-500/20 text-purple-400",
      icon: <Server size={14} />,
    },
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="proyectos" className="py-20 px-6 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-16 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Mis <span className="text-white">Proyectos</span>
      </h1>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-6xl"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2">
            {proyectos.map((proyecto, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-[#0f172a]/80 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />

                  <CardHeader className="pb-0">
                    <CardTitle className="text-xl font-bold mt-4 text-white">
                      {proyecto.titulo}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 text-left">
                    <p className="text-sm text-gray-300 mb-4">
                      {proyecto.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.tecnologias.map((tec, i) => {
                        const style = techStyles[tec] || {
                          color: "bg-gray-500/20 text-gray-300",
                          icon: <Code size={14} />,
                        };
                        return (
                          <Badge
                            key={i}
                            variant="secondary"
                            className={`flex items-center gap-2 px-2 py-1 text-sm font-medium border border-white/10 ${style.color}`}
                          >
                            {style.icon}
                            {tec}
                          </Badge>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap justify-between gap-2 mt-4">
                      <div className="flex gap-2">
                        {proyecto.repoFrontend && (
                          <Button
                            asChild
                            className="flex items-center gap-2 border-black text-white hover:bg-white/10"
                          >
                            <a
                              href={proyecto.repoFrontend}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={18} />
                              Código
                            </a>
                          </Button>
                        )}
                        {proyecto.repoBackend && (
                          <Button
                            asChild
                            className="flex items-center gap-2 border-black text-white hover:bg-white/10"
                          >
                            <a
                              href={proyecto.repoBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={18} />
                              Backend
                            </a>
                          </Button>
                        )}
                      </div>

                      {proyecto.demo && (
                        <Button
                          asChild
                          className="bg-indigo-600 hover:bg-indigo-800 flex items-center gap-2"
                        >
                          <a
                            href={proyecto.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={18} />
                            Ver Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white/20 hover:bg-white/40 text-white border border-white/30 backdrop-blur-md rounded-full p-2 transition-all" />
          <CarouselNext className="bg-white/20 hover:bg-white/40 text-white border border-white/30 backdrop-blur-md rounded-full p-2 transition-all" />
        </Carousel>
      </div>
    </section>
  );
}
