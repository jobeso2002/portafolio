"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { links } from "../NavBar.data";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <Button
        className="text-black bg-blue-500/30 hover:bg-blue-700/10 transition"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-[#0a0a0a]/95 backdrop-blur-md border border-gray-800 
            text-white rounded-2xl shadow-lg p-4 w-48 flex flex-col gap-2 z-50"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
