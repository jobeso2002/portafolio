"use client";
import Habilidades from "./components/Habilidades/Habilidades";
import Inicio from "./components/Inicio/Inicio";
import NavBar from "./components/NavBar/NavBar";
import SobreMi from "./components/Sobre_Mi/SobreMi";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      <NavBar />
      <Inicio />
      <SobreMi />
      <Habilidades />
    </div>
  );
}
