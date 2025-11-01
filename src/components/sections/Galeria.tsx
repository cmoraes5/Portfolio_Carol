import { Button } from "../ui/Button";

export function Galeria() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-12 md:gap-16 items-center w-full">
      {/* === Versão MOBILE === */}
      <div className="flex flex-col gap-3 max-w-md md:hidden">
        <div className="grid grid-cols-3">
        {/* Linha de cima (3 colunas) */}
        <Button
          href="/case-study"
          className="col-span-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/card_mobile.png"
            alt="UX Case Study"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>

        <Button
          href="https://www.behance.net/gallery/204356427/Redesign-Teamspeak-%28UXUI%29"
          target="_blank"
          className="col-span-1 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/teamspeak_mobile.png"
            alt="Redesign TeamSpeak"
            loading="lazy"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </Button>
      </div>

        {/* Linha de baixo (2 colunas) */}
        <div className="grid grid-cols-2">
        <Button
          href="https://www.behance.net/gallery/230148661/ADOPT-Site-de-adocao-(UXUI-responsivo)"
          target="_blank"
          className="col-span-1 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/adopt_mobile.png"
            alt="Adopt Design Responsivo"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>

        <Button
          href="https://www.figma.com/design/VXRLUAj3bqh6V43VCoFeBq/bikcraft-Wireframe?node-id=8-76&p=f&t=g6HKjAL1RbM8jccO-0"
          target="_blank"
          className="col-span-1 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/bikcraft_mobile.svg"
            alt="Bikcraft Layout"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>
        </div>
      </div>

      {/* === Versão DESKTOP === */}
      <div className="hidden md:grid grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Linha de cima (1 card ocupando 3 colunas) */}
        <Button
          href="/case-study"
          className="col-span-3 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/card_desktop.svg"
            alt="UX Case Study"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>

        {/* Linha de baixo (3 cards individuais) */}
        <Button
          href="https://www.behance.net/gallery/204356427/Redesign-Teamspeak-%28UXUI%29"
          target="_blank"
          className="transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/teamspeak.png"
            alt="Redesign TeamSpeak"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>

        <Button
          href="https://www.behance.net/gallery/230148661/ADOPT-Site-de-adocao-%28UXUI-responsivo%29"
          target="_blank"
          className="transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/adopt.jpg"
            alt="Design Responsivo"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>

        <Button
          href="https://www.figma.com/design/VXRLUAj3bqh6V43VCoFeBq/bikcraft-Wireframe?node-id=8-76&p=f&t=g6HKjAL1RbM8jccO-0"
          target="_blank"
          className="transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/bikcraft.png"
            alt="Bikcraft Layout"
            loading="lazy"
            className="w-full h-auto object-cover rounded-[18px]"
          />
        </Button>
      </div>
    </section>
  );
}
