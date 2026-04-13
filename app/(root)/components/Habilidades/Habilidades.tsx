import Image from "next/image";
import {
  SiNodedotjs,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
} from "react-icons/si";

type BackendTech = {
  icon: React.ReactNode;
  name: string;
};

const backendTechs: BackendTech[] = [
  { icon: <SiNodedotjs size={36} className="text-green-400" />,   name: "Node.js"     },
  { icon: <SiNestjs    size={36} className="text-red-400"   />,   name: "NestJS"      },
  { icon: <SiDotnet    size={36} className="text-purple-400"/>,   name: "C# / .NET"   },
  { icon: <SiPostgresql size={36} className="text-sky-400"  />,   name: "PostgreSQL"  },
  { icon: <SiMongodb   size={36} className="text-emerald-400"/>,  name: "MongoDB"     },
  { icon: <SiMysql     size={36} className="text-orange-400"/>,   name: "MySQL"       },
  { icon: <SiDocker    size={36} className="text-blue-300"  />,   name: "Docker"      },
];

const frontendTechs = [
  ["html.png",           "HTML5"      ],
  ["css.png",            "CSS3"       ],
  ["javascripticono.png","JavaScript" ],
  ["typescript.png",     "TypeScript" ],
  ["react.png",          "React"      ],
  ["nextjs.png",         "Next.js"    ],
  ["tailwind.png",       "Tailwind"   ],
];

const designTechs = [
  ["figma.png",  "Figma"       ],
  ["pincel.png", "UI / UX"     ],
  ["canva.png",  "Canva"       ],
];

const softSkills = [
  ["trabajoequipo.png",         "Trabajo en equipo"       ],
  ["comunicacion.png",          "Comunicación"            ],
  ["tiempo.png",                "Gestión del tiempo"      ],
  ["orientacionresultados.png", "Orientación a resultados"],
  ["resolucionproblemas.png",   "Resolución de problemas" ],
  ["adptabilidad.png",          "Adaptabilidad"           ],
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-white">
      {children}
    </h2>
  );
}

function SkillCard({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 shadow-xl hover:shadow-blue-900/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className={`text-xl font-bold mb-6 text-center ${color}`}>{title}</h3>
      {children}
    </div>
  );
}

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <SectionTitle>
        Mis{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Habilidades
        </span>
      </SectionTitle>

      {/* Grid 2x2 en desktop, 1 col en móvil */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {/* Diseño */}
        <SkillCard title="Diseño" color="text-pink-400">
          <div className="flex flex-col gap-4 items-center">
            {designTechs.map(([icon, name]) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <Image src={`/asset/diseño/${icon}`} alt={name} width={40} height={40} />
                <p className="text-slate-300 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </SkillCard>

        {/* Frontend */}
        <SkillCard title="Frontend" color="text-cyan-400">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {frontendTechs.map(([icon, name]) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <Image src={`/asset/tecnologia/${icon}`} alt={name} width={36} height={36} />
                <p className="text-slate-300 text-xs text-center">{name}</p>
              </div>
            ))}
          </div>
        </SkillCard>

        {/* Backend */}
        <SkillCard title="Backend" color="text-green-400">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {backendTechs.map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-1">
                {icon}
                <p className="text-slate-300 text-xs text-center">{name}</p>
              </div>
            ))}
          </div>
        </SkillCard>

        {/* Blandas */}
        <SkillCard title="Blandas" color="text-purple-400">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {softSkills.map(([icon, name]) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <Image src={`/asset/blandas/${icon}`} alt={name} width={36} height={36} />
                <p className="text-slate-300 text-xs text-center">{name}</p>
              </div>
            ))}
          </div>
        </SkillCard>

      </div>
    </section>
  );
}