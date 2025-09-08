import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { Metadata } from "next";

import { DownloadSimple } from "../../components/Icons";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <main className="flex flex-col items-center text-black w-full mx-auto py-24 gap-[180px]">
      <section className="w-full flex flex-row items-center justify-center gap-20  px-[100px] ">
        <PortraitFrame size="large" className="max-w-[300px]" borderWidth={2}>
          <img src="/foto.png" alt="Foto" />
        </PortraitFrame>

        <div className="max-w-[800px]">
          <div className="flex flex-row items-center gap-4">
            <div>
              <img src="/SobreMim.svg" alt="Sobre Mim (Palavra)" />
            </div>

            <div className="-rotate-[30deg]">
              <img src="/Foguete.svg" alt="Ilustration" className="h-[57px]" />
            </div>
          </div>

          <p className="text-[28px] text-[#2E2E2E] mt-3">
            Sou UX/UI designer júnior formada em Design Gráfico, apaixonada por
            mergulhar em ideias, transformar dados em decisões e, acima de tudo,
            ouvir. Atualmente, também atuo como UX/UI no Pipoca Ágil, em um
            projeto voltado à prevenção do burnout
          </p>
        </div>
      </section>

      <section className="w-full flex flex-row items-center justify-center gap-[124px]  px-[100px] ">
        <div className="flex flex-col gap-12">
          <div>
            <img src="/Me_conheça.svg" alt="" />
          </div>

          <Accordion className="max-w-[700px]">
            <AccordionItem title="Experiência">
              <p>
                Atuo como UX/UI Designer em um projeto voltado à prevenção do
                burnout. Participo de todas as etapas de UX e UI: desde a
                análise de dados de pesquisa até a definição de funcionalidades
                com base nas reais necessidades dos usuários, passando pela
                construção de fluxos, wireframes e protótipos. Faço parte das
                reuniões de alinhamento com o time e stakeholders, aplicando
                metodologias ágeis como o Scrum para garantir entregas eficazes
                e centradas no usuário. Essa experiência tem sido essencial para
                desenvolver minha autonomia, visão estratégica e habilidade em
                transformar dados em soluções digitais relevantes.
              </p>
            </AccordionItem>

            <AccordionItem title="Formada em">
              <ul className="list-disc pl-5">
                <li>Universidade Veiga de Almeida - Design Gráfico</li>
                <li>Design Thinking - Tera</li>
                <li>UI Design avançado / UX Design Heurísticas - Origamid</li>
                <li>Jornada UX - Workshop EBAC</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              className="flex justify-center"
              title="Ver currículo completo"
            >
              <Button
                className="text-primary text-[32px] font-bold flex flex-row items-center gap-2 p-2"
                href="https://drive.google.com/file/d/1-9H6vXTXduSDYdRKjSK72P5qBLqguv_a/view"
                target="_blank"
              >
                <DownloadSimple weight="bold" size={32} />
                BAIXAR CURRÍCULO
              </Button>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex-shrink-0">
          <img src="/Avatar2.png" alt="Ilustration" />
        </div>
      </section>

      <section
        className="w-full flex flex-row justify-center gap-[124px]
        px-[100px] border-t-[1.5px]"
      >
        <PortraitFrame
          borderWidth={1.5}
          size="small"
          className="w-[144px]"
          lineHeight={319}
        >
          <img src="foto2.png" alt="" />
        </PortraitFrame>

        <div className="flex flex-col gap-6 items-center max-w-[713px] mt-[180px]">
          <img src="Fora_do_trabalho.svg" alt="" className="h-[60px]" />

          <p className="font-semibold text-[28px]">
            Sou super comunicativa e adoro estar cercada de pessoas! No meu
            tempo livre, estou sempre entre amigos e família, jogando um bom
            jogo de tabuleiro, dançando ou cultivando boas memórias. Tenho um
            olhar curioso para o mundo e gosto de observar comportamentos, desde
            interações nas ruas até como as pessoas navegam por aplicativos. No
            fundo, tudo vira inspiração!
          </p>
        </div>

        <PortraitFrame
          borderWidth={1.5}
          size="small"
          className="w-[144px]"
          lineHeight={452}
        >
          <img src="foto1.png" alt="" />
        </PortraitFrame>
      </section>
    </main>
  );
}
