"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { DownloadSimple, LinkedinLogo, List, X } from "../Icons";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `transition-opacity duration-500 hover:opacity-100 ${
      isActive ? "opacity-100" : "opacity-40"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F7] border-b border-[#717171] text-black text-xl font-medium shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-7">
        {/* Logo ou Título Principal - Visível em todas as telas */}
        <div className="flex-shrink-0">
          <Button href="/" className="text-2xl font-bold">
            Carol Magdalena
          </Button>
        </div>

        {/* Botão do Menu Hambúrguer - Visível apenas em telas pequenas */}
        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <List size={28} />}
          </Button>
        </div>

        {/* Navegação Principal - Visível em telas médias e grandes */}
        <div className="hidden md:flex items-center gap-8">
          <Button href="/" className={getLinkClassName("/")}>
            HOME
          </Button>
          <Button href="/sobre" className={getLinkClassName("/sobre")}>
            SOBRE
          </Button>
          <Button href="/#projetos" className={getLinkClassName("/#projetos")}>
            PORTFOLIO
          </Button>
        </div>

        {/* Ações - Visível em telas médias e grandes */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            href="https://drive.google.com/file/d/1Ea4U5eRJlB008oU7Mp106BlidvF8Io6e/view"
            target="_blank"
            className="text-primary flex gap-2 items-center hover:bg-primary hover:text-white p-2 transition-all duration-200 rounded-md"
          >
            <DownloadSimple weight="bold" size={24} />
            CURRICULO
          </Button>
          <Button
            href="https://www.linkedin.com/in/carol-magdalena-176299274/"
            target="_blank"
            className="p-2 hover:bg-black hover:text-white transition-all duration-200 rounded-md"
          >
            <LinkedinLogo weight="fill" size={28} />
          </Button>
        </div>
      </nav>

      {/* Menu Dropdown para Telas Pequenas */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F7F7F7] shadow-lg">
          <div className="flex flex-col items-center gap-4 p-4">
            <Button
              href="/"
              className={getLinkClassName("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Button>
            <Button
              href="/sobre"
              className={getLinkClassName("/sobre")}
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE
            </Button>
            <Button
              href="/#projetos"
              className={getLinkClassName("/#projetos")}
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </Button>
            <div className="border-t border-[#717171] w-full my-2" />
            <Button
              href="https://drive.google.com/file/d/1Ea4U5eRJlB008oU7Mp106BlidvF8Io6e/view"
              target="_blank"
              className="text-primary flex gap-2 items-center justify-center w-full p-2 rounded-md"
            >
              <DownloadSimple weight="bold" size={24} />
              CURRICULO
            </Button>
            <Button
              href="https://www.linkedin.com/in/carol-magdalena-176299274/"
              target="_blank"
              className="flex gap-2 items-center justify-center w-full p-2 rounded-md"
            >
              <LinkedinLogo weight="fill" size={28} />
              LINKEDIN
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
