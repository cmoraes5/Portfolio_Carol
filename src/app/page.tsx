import { ArrowUpRight } from "@/components/Icons";
import { Galeria } from "@/components/sections/Galeria";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-24 text-black w-full mx-auto">
      {/* FRASE DE IMPACTO */}
      <section className="flex flex-row gap-5 w-full justify-center px-[100px]">
        <div className="flex flex-col max-w-[708px]">
          {/* Título com SVG posicionado */}
          <div>
            <h1 className="text-[64px] font-semibold leading-[64px]">
              Meu combustível é a curiosidade. Minha direção é o
            </h1>
            <img
              src="/IMPACTO.svg"
              alt="Impacto"
              className="inline-block relative"
            />
          </div>

          <p className="text-3xl max-w-[600px] text-[#2E2E2E] leading-[39px]">
            Não crio telas bonitas, crio <br />
            experiências que fazem <br />
            sentido. Gosto de investigar, entender e transformar dores em
            soluções reais.
          </p>

          <Button
            href="#projetos"
            className="text-3xl font-bold mt-5 text-[#FB527A] w-fit underline"
          >
            Ver Projetos
          </Button>
        </div>

        <div className="mt-60">
          <img src="/Avatar.svg" alt="icon" />
        </div>
      </section>

      {/* SOBRE MIM */}
      <section
        className="w-full flex flex-row items-center justify-center gap-[124px]
        py-[180px] px-[100px]
        bg-linear-to-t to-[#FEFEFE] shadow-sm"
      >
        <div className="flex-shrink-0 h-[450px]">
          <img src="/Foguete.svg" alt="Ilustration" />
        </div>

        <div className="flex flex-col max-w-[880px]">
          <div>
            <img src="/SobreMim.svg" alt="Sobre Mim (Palavra)" />
          </div>

          <p className="text-[28px] text-[#2E2E2E] mt-3">
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
            className="flex flex-row mt-6 items-center space-x-1 px-3 py-2 bg-[#EC2B58] font-semibold text-2xl text-white rounded-lg w-fit"
          >
            <span>Conheça minha história</span>
            <ArrowUpRight size={28} weight="bold" />
          </Button>
        </div>
      </section>

      {/* ONDE A CURIOSIDADE VIRA IMPACTO */}
      <section className="w-full flex flex-row gap-[22px] items-center justify-center pt-[200px] px-[100px]">
        <div className="flex flex-1 items-center gap-[22px] max-w-[1240px]">
          <div className="shrink-0">
            <img src="/Left.svg" alt="Lupa" />
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-[36px] font-semibold">
              Onde a curiosidade vira impacto!
            </h1>
            <p className="text-2xl text-[#2E2E2E]">
              Aqui você encontra projetos que nasceram da vontade de investigar,
              entender e transformar realidades.
            </p>
          </div>

          <div className="shrink-0">
            <img src="/Right.svg" alt="Site" />
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
