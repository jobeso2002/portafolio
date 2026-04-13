"use client";
import Contacto from "./components/Contacto/Contacto";
import Formacion from "./components/Formacion/Formacion";
import Habilidades from "./components/Habilidades/Habilidades";
import Inicio from "./components/Inicio/Inicio";
import NavBar from "./components/NavBar/NavBar";
import PiePagina from "./components/Pie_Pagina/PiePagina";
import Proyectos from "./components/Proyectos/Proyectos";
import SobreMi from "./components/Sobre_Mi/SobreMi";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <NavBar />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Formacion />
      <Contacto />
      <PiePagina />
    </div>
  );
}