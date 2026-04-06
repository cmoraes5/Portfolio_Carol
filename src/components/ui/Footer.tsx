"use client";

import { toast } from "sonner";
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
      <div className="w-full py-16 md:py-32 flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-12 md:gap-24 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
            Vamos nos conectar!
          </h1>

          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <Button
              className="border-2 border-secondary p-1 rounded-md"
              href="https://www.linkedin.com/in/carol-magdalena-176299274/"
              target="_blank"
            >
              <LinkedinLogo size={44} />
            </Button>

            <Button
              onClick={() => {
                navigator.clipboard.writeText("carol.ux.ui@gmail.com");
                toast.success("Email copiado com sucesso!");
              }}
              className="border-2 border-secondary p-1 rounded-md"
            >
              <EnvelopeSimple size={44} />
            </Button>

            <Button
              className="border-2 border-secondary p-1 rounded-md"
              href="https://wa.me/5521966067793"
              target="_blank"
            >
              <WhatsappLogo size={44} />
            </Button>
          </div>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-secondary pt-8 md:pt-0 md:pl-14 flex flex-col justify-center space-y-2 ">
          <Button
            className="text-primary text-2xl md:text-3xl font-bold flex flex-row items-center gap-2 p-2"
            href="https://drive.google.com/file/d/1Ea4U5eRJlB008oU7Mp106BlidvF8Io6e/view"
            target="_blank"
          >
            <DownloadSimple weight="bold" size={32} />
            BAIXAR CURRÍCULO
          </Button>

          <Button
            onClick={scrollToTop}
            className="text-[#404040] text-xl md:text-2xl font-bold flex flex-row items-center gap-2 p-2"
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
