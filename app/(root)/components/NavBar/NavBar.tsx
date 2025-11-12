import React from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import Logo from "@/components/shared/Logo/Logo";

export default function NavBar() {
  return (
    <nav
      className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 <-20 flex items-center
    justify-between px-6 py-3 bg-blue-500/30 backdrop-blur-md rounded-full shadow-lg border border-blue-400/20"
    >
      <Logo />
      <NavbarDesktop />

      <NavbarMobile />
    </nav>
  );
}
