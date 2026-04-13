import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href:  "https://github.com/jobeso2002",
    icon:  <Github size={20} />,
  },
  {
    label: "LinkedIn",
    href:  "https://linkedin.com/in/josé-alfredo-obeso-270440257",
    icon:  <Linkedin size={20} />,
  },
  {
    label: "Correo",
    href:  "mailto:josealfredoobesolora7@gmail.com",
    icon:  <Mail size={20} />,
  },
];

export default function PiePagina() {
  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-10 mt-4">
      <div className="flex flex-col items-center gap-5">
        {/* Íconos sociales */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Correo en texto */}
        <p className="text-slate-500 text-sm">
          josealfredoobesolora7@gmail.com
        </p>

        {/* Copyright */}
        <p className="text-slate-600 text-xs text-center">
          © 2025 José Alfredo Obeso Lora · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}