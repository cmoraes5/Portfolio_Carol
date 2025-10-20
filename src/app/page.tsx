import { ArrowUpRight } from "@/components/Icons";
import { Galeria } from "@/components/sections/Galeria";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-16 text-black w-full mx-auto">
      {/* FRASE DE IMPACTO */}
      <section className="flex flex-col md:flex-row gap-2 md:max-w-full justify-center px-10 sm:px-8 md:px-16 lg:px-24 md:pt-24">
        <div className="flex flex-col relative">
          {/* Título com SVG posicionado */}
          <div>
            <img src="/Head.svg" alt="icon" className="w-full flex" />
          </div>

          <div className="flex flex-col absolute gap-4 top-2/3 pt-2 md:gap-6 md:top-3/12 md:pt-9">
            <p className="text-sm md:text-[28px] max-w-[600px] text-[#2E2E2E]">
              Não crio telas bonitas, <br className="block md:hidden" />
              crio <br className="hidden md:block" />
              experiências que <br className="block md:hidden" />
              fazem <br className="hidden md:block" />
              sentido. Gosto de investigar, <br className="block md:hidden" />
              entender e transformar dores em <br className="block md:hidden" />
              soluções reais.
            </p>

            <Button
              href="#projetos"
              className="text-xl md:text-3xl font-bold text-[#FB527A] w-fit underline md:mx-0"
            >
              Ver Projetos
            </Button>
          </div>
        </div>

        <div className="self-end mt-10 block md:hidden">
          <img src="/ILUS.svg" alt="icon" />
        </div>

        <div className="w-5/12 mt-40 hidden md:inline">
          <img src="/Avatar.svg" alt="icon" />
        </div>
      </section>

      {/* SOBRE MIM */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24
        py-24 px-10 sm:px-8 md:px-16 lg:px-24
        bg-linear-to-t to-[#FEFEFE] shadow-sm"
      >
        <div className="flex-shrink-0 order-2 md:order-1">
          <img
            src="/Foguete.svg"
            alt="Ilustration"
            className="hidden md:max-w-full md:h-auto md:inline"
          />
        </div>

        <div className="flex flex-col max-w-full md:max-w-[880px] order-1 md:order-2 text-center md:text-left">
          <div className="flex flex-row gap-6 items-center h-fit">
            <img
              src="/SobreMim.svg"
              alt="Sobre Mim (Palavra)"
              className="max-h-[37px] md:max-h-full md:mx-0"
            />

            <img
              src="/Foguete.svg"
              alt="Ilustration"
              className="max-w-[28px] rotate-90 md:hidden"
            />
          </div>

          <p className="text-left md:text-[28px] text-[#2E2E2E] md:mt-3">
            Sou UX/UI Designer movida por curiosidade e empatia, dois
            combustíveis que me fazem buscar, a cada projeto, algo além da
            solução óbvia.
            <br />
            Me encontrei nessa área ao perceber que ela une tudo que me fascina:
            tecnologia, psicologia e design. Desde então, me dedico a entender
            pessoas e transformar suas necessidades em experiências reais, e com
            propósito, daquelas que nascem da escuta atenta e da colaboração
            entre pessoas diversas.
          </p>

          <Button
            href="/sobre"
            className="
              flex flex-row mt-6 items-center space-x-1 px-3 py-1 w-fit bg-[#EC2B58] font-semibold text-sm text-white rounded-sm
              md:text-2xl md:py-2 md:rounded-lg
             "
          >
            <span>Conheça minha história</span>
            <ArrowUpRight className="text-base md:text-[28px]" weight="bold" />
          </Button>
        </div>
      </section>

      {/* ONDE A CURIOSIDADE VIRA IMPACTO */}
      <section className="w-full flex flex-col md:flex-row gap-6 items-center justify-center text-center md:text-left py-24 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-7xl">
          <div className="flex-shrink-0 inline md:hidden">
            <img
              src="/Curiosidade(mobile).svg"
              alt="Lupa"
              className="max-w-full h-12"
            />
          </div>

          <div className="flex-shrink-0 hidden md:inline">
            <img src="/Left.svg" alt="Lupa" className="max-w-full h-auto" />
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Onde a curiosidade vira impacto!
            </h1>

            <p className="text-sm md:text-2xl text-[#2E2E2E]">
              Aqui você encontra projetos que nasceram da vontade de investigar,
              entender e transformar realidades.
            </p>
          </div>

          <div className="flex-shrink-0 hidden md:inline">
            <img src="/Right.svg" alt="Site" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="flex flex-row w-full justify-center" id="projetos">
        <Galeria />
      </section>
    </main>
  );
}
