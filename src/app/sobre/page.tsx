"use client";

import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useEffect, useState } from "react";

import { DownloadSimple } from "../../components/Icons";

export default function Sobre() {
  return (
    <main className="flex flex-col items-center text-black w-full mx-auto py-24 gap-16 md:gap-[180px]">
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-10 md:px-24 text-left">
        <div className="hidden md:block">
          <PortraitFrame
            size="large"
            className="max-w-[250px] md:max-w-[300px]"
            borderWidth={2}
          >
            <img src="/foto.png" alt="Foto" />
          </PortraitFrame>
        </div>

        <div className="max-w-full md:max-w-[800px]">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="block md:hidden">
              <PortraitFrame
                size="small"
                className="max-w-[80px] md:max-w-[300px]"
                borderWidth={1.5}
              >
                <img src="/foto.png" alt="Foto" />
              </PortraitFrame>
            </div>

            <div>
              <img
                src="/SobreMim.svg"
                alt="Sobre Mim (Palavra)"
                className="h-12 md:h-auto"
              />
            </div>

            <div className="hidden md:inline-block -rotate-[30deg]">
              <img
                src="/Foguete.svg"
                alt="Ilustration"
                className="h-[40px] md:h-[57px]"
              />
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-[28px] text-[#2E2E2E] mt-3">
            Sou UX/UI designer júnior formada em Design Gráfico, apaixonada por
            mergulhar em ideias, transformar dados em decisões e, acima de tudo,
            ouvir. Atualmente, também atuo como UX/UI no Pipoca Ágil, em um
            projeto voltado à prevenção do burnout
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-24 px-10 md:px-24 text-center lg:text-left">
        <div className="flex flex-col items-center md:gap-12 lg:items-start">
          <div className="flex flex-row w-full justify-between gap-2 text-left">
            <h1 className="text-[28px] font-mono md:text-[44px]">
              Me conheça um pouco mais
            </h1>

            <div className="mt-[7px] block md:hidden">
              <img
                src="/Avatar2.png"
                alt="Ilustration"
                className="max-w-32 h-auto"
              />
            </div>
          </div>

          <Accordion className="max-w-full md:max-w-[700px] text-left">
            <AccordionItem title="Experiência">
              <p className="text-base md:text-lg">
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
              <ul className="list-disc pl-5 text-sm md:text-lg">
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
                className="text-primary text-xl md:text-2xl font-bold flex flex-row items-center gap-2 p-2"
                href="https://drive.google.com/file/d/1-9H6vXTXduSDYdRKjSK72P5qBLqguv_a/view"
                target="_blank"
              >
                <DownloadSimple weight="bold" size={32} />
                BAIXAR CURRÍCULO
              </Button>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex-shrink-0 mt-12 hidden md:block md:mt-0">
          <img
            src="/Avatar2.png"
            alt="Ilustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section className="border-t md:border-t-[1.5px] w-full flex flex-row justify-center gap-7 md:gap-20 px-10 md:px-24">
        <span className="hidden md:block">
          <PortraitFrame
            borderWidth={1.5}
            size={"medium"}
            className={"w-[144px]"}
            lineHeight={319}
          >
            <img src="foto2.png" alt="" />
          </PortraitFrame>
        </span>

        <div className="flex flex-col gap-6 items-center max-w-[713px] mt-16 md:mt-[180px]">
          {/* <img src="Fora_do_trabalho.svg" alt="" className="h-12 md:h-[60px]" /> */}
          <h1 className="text-[28px] font-mono md:text-6xl text-primary">
            Fora do trabalho...
          </h1>

          <p className="md:font-semibold text-xs md:text-[28px]">
            Sou super comunicativa e adoro estar cercada de pessoas! No meu
            tempo livre, estou sempre entre amigos e família, jogando um bom
            jogo de tabuleiro, dançando ou cultivando boas memórias. Tenho um
            olhar curioso para o mundo e gosto de observar comportamentos, desde
            interações nas ruas até como as pessoas navegam por aplicativos. No
            fundo, tudo vira inspiração!
          </p>
        </div>

        <span className="hidden md:block">
          <PortraitFrame
            borderWidth={1.5}
            size={"medium"}
            className={"w-[144px]"}
            lineHeight={452}
          >
            <img src="foto1.png" alt="" />
          </PortraitFrame>
        </span>
      </section>
    </main>
  );
}
