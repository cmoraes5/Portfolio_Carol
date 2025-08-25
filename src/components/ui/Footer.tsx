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
  return (
    <footer className="flex flex-col items-center text-black border-t-[1px]">
      <div className="max-w-7xl w-full mx-auto py-32 flex flex-row justify-between">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-semibold leading-snug">
            Vamos nos conectar!
          </h1>

          <ul className="flex flex-row space-x-4">
            <li>
              <Button className="border border-secondary p-1">
                <LinkedinLogo size={44} />
              </Button>
            </li>
            <li>
              <Button className="border border-secondary p-1">
                <EnvelopeSimple size={44} />
              </Button>
            </li>
            <li>
              <Button className="border border-secondary p-1">
                <WhatsappLogo size={44} />
              </Button>
            </li>
          </ul>
        </div>

        <div className="border-l border-secondary pl-14 flex flex-col justify-center space-y-2">
          <Button className="text-primary text-3xl font-bold flex flex-row items-center gap-2 p-2">
            <DownloadSimple weight="bold" size={32} />
            BAIXAR CURRÍCULO
          </Button>

          <Button className="text-[#404040] text-2xl font-bold flex flex-row items-center gap-2 p-2">
            SUBIR PARA O TOPO
            <ArrowFatLineUp weight="bold" size={28} />
          </Button>
        </div>
      </div>

      <Carrossel />
    </footer>
  );
}
