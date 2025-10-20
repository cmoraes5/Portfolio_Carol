import { ArrowUpRight } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

export default function CaseStudyPage() {
  return (
    <main className="flex flex-col items-center py-16 md:py-24 text-black w-full mx-auto">
      <section className="flex flex-col gap-10 w-full justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-4">
          <h1 className="text-7xl sm:text-9xl md:text-[130px] font-bold text-[#7F5528] leading-none">
            UX
          </h1>
          <span className="text-2xl sm:text-3xl md:text-[40px] font-medium text-[#7F5528]">
            Case Study
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          <div className="flex-shrink-0">
            <img
              src="/Images2.png"
              alt="Case Study Image Mobile"
              className="block lg:hidden max-w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/Images.png"
              alt="Case Study Image Desktop"
              className="hidden lg:block max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-lg text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold">Spoiler</h1>
            <p className="font-medium text-lg md:text-2xl">
              O projeto está pronto, mas o código ainda não chegou até aqui 🚧.
              Mas você não precisa esperar: baixe o PDF e veja meu estudo de
              caso e todo o raciocínio por trás da solução.
            </p>

            <Button
              href="/case (1).pdf"
              target="_blank"
              className="flex items-center justify-center lg:justify-start bg-primary font-semibold text-lg md:text-2xl text-[#F7F7F7] rounded-xl px-4 py-3 w-fit mx-auto lg:mx-0 mt-4"
            >
              Ver projeto completo
              <ArrowUpRight size={24} weight="bold" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
