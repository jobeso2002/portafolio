import { Mail, Linkedin, MessageCircle, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    label:   "WhatsApp",
    href:    "https://wa.me/573008489111",
    icon:    <MessageCircle size={22} />,
    classes: "bg-green-600 hover:bg-green-700 shadow-green-900/40",
  },
  {
    label:   "Email",
    href:    "mailto:josealfredoobesolora7@gmail.com",
    icon:    <Mail size={22} />,
    classes: "bg-blue-600 hover:bg-blue-700 shadow-blue-900/40",
  },
  {
    label:   "LinkedIn",
    href:    "https://linkedin.com/in/josé-alfredo-obeso-270440257",
    icon:    <Linkedin size={22} />,
    classes: "bg-sky-700 hover:bg-sky-800 shadow-sky-900/40",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-white">
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Contáctame
        </span>
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-3xl p-10 shadow-2xl shadow-blue-900/20 flex flex-col items-center gap-8">
          {/* Texto intro */}
          <p className="text-slate-400 text-center text-base leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar?{" "}
            <span className="text-blue-400 font-medium">Hablemos.</span>
          </p>

          {/* Botones de contacto */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {contactOptions.map(({ label, href, icon, classes }) => (
              <Button
                key={label}
                asChild
                className={`${classes} text-white px-7 py-5 text-base rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center gap-3`}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                  {label}
                </a>
              </Button>
            ))}
          </div>

          {/* Divisor */}
          <div className="w-full border-t border-slate-700/60" />

          {/* Descargar CV */}
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 text-base rounded-xl font-semibold shadow-lg shadow-indigo-900/40 transition-all duration-200"
          >
            <a
              href="/cv/hojavida.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <FileDown size={22} />
              Descargar CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}