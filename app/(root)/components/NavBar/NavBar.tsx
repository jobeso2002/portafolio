import React from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import Logo from "@/components/shared/Logo/Logo";

export default function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:max-w-5xl flex items-center justify-between px-6 py-3 bg-slate-900/70 backdrop-blur-xl rounded-full shadow-2xl border border-blue-500/20">
      <Logo />
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}