import { TypeAnimation } from "react-type-animation";

export default function Inicio() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* {"mi nombre"} */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center bg-linear-to-r from-blue-700 via-purple-600 to-black bg-clip-text text-transparent">
          José Alfredo Obeso Lora
        </h1>
        {/* Profesión principal */}
        <h2 className="text-center text-white text-lg ">Desarrollador Frontend / Ingeniero de Sistemas.</h2>
        {/* Frase profesional */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Desarrollo soluciones web innovadoras con enfoque en eficiencia, escalabilidad y experiencia de usuario.
        </p>

        <div className="mb-10 justify-center flex">
          <span className="inline-block bg-blue-500/30 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-lx">
            <TypeAnimation
              sequence={[
                "🖥️ Desarrollador Frontend",
                1000,
                "📱 Desarrollador Mobile",
                1000,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#Proyectos"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lx mr-4 hover:bg-indigo-600 transition"
          >
            🧠 Ver proyectos
          </a>
          <a
            href="#DescargarCV"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lx mr-4 hover:bg-indigo-600 transition"
          >
            📄 Descargar CV
          </a>
          <a
            href="#contacto"
            className="bg-indigo-500 text-white px-6 py-3 rounded-lx mr-4 hover:bg-indigo-600 transition"
          >
            📞 Contactame
          </a>
          
        </div>
      </div>
    </section>
  );
}
