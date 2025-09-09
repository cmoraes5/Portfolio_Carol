"use client";

import { usePathname } from "next/navigation";
import { DownloadSimple, LinkedinLogo } from "../Icons";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    // The portfolio link is a special case, as it's an anchor on the home page.
    // It should be active when the user is on the home page.
    const isActive = pathname === href

    return `transition-opacity duration-500 hover:opacity-100 ${
      isActive ? "opacity-100" : "opacity-40"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#717171] text-black text-xl font-medium shadow-sm">
      <nav className="bg-[#F7F7F7] container mx-auto flex items-center justify-between p-7">
        <div className="flex gap-15 px-[100px]">
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
        <div className="flex items-center gap-10 px-[100px]">
          <Button
            href="/cv.pdf"
            target="_blank"
            className="text-primary flex gap-2 items-center hover:bg-primary hover:text-white p-2 transition-all duration-200"
          >
            <DownloadSimple weight="bold" size={24} />
            CURRICULO
          </Button>

            <Button
              href="https://www.linkedin.com/in/carol-magdalena-176299274/"
              target="_blank"
              className="p-2 hover:bg-black hover:text-white transition-all duration-200"
            >
              <LinkedinLogo weight="fill" size={28} />
            </Button>
        </div>
      </nav>
    </header>
  );
}