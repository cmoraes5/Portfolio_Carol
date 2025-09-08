"use client";

import {
  ArrowFatLineUp,
  DownloadSimple,
  EnvelopeSimple,
  LinkedinLogo,
  WhatsappLogo,
} from "../Icons";
import { Carrossel } from "../sections/Carrossel";
import { Button } from "./Button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col items-center text-black border-t-[1px] bg-[#F3F3F3]">
      <div className="w-full py-32 flex flex-row justify-center gap-[120px] px-[100px] ">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[64px] font-semibold leading-snug">
            Vamos nos conectar!
          </h1>

          <div className="flex flex-row gap-4">
            <Button
              className="border-2 border-secondary p-1"
              href="https://www.linkedin.com/in/carol-magdalena-176299274/"
              target="_blank"
            >
              <LinkedinLogo size={44} />
            </Button>

            <Button
              className="border-2 border-secondary p-1"
              href="mailto:carol.ux.ui@gmail.com"
              target="_blank"
            >
              <EnvelopeSimple size={44} />
            </Button>

            <Button
              className="border-2 border-secondary p-1"
              href="https://wa.me/5521966067793"
              target="_blank"
            >
              <WhatsappLogo size={44} />
            </Button>
          </div>
        </div>

        <div className="border-l border-secondary pl-14 flex flex-col justify-center space-y-2 ">
          <Button
            className="text-primary text-[32px] font-bold flex flex-row items-center gap-2 p-2"
            href="https://drive.google.com/file/d/1-9H6vXTXduSDYdRKjSK72P5qBLqguv_a/view"
            target="_blank"
          >
            <DownloadSimple weight="bold" size={32} />
            BAIXAR CURRÍCULO
          </Button>

          <Button
            onClick={scrollToTop}
            className="text-[#404040] text-2xl font-bold flex flex-row items-center gap-2 p-2"
          >
            SUBIR PARA O TOPO
            <ArrowFatLineUp weight="bold" size={28} />
          </Button>
        </div>
      </div>

      <Carrossel />
    </footer>
  );
}
