import { ArrowUpRight } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

export default function CaseStudyPage() {
  return (
    <main className="flex flex-col items-center py-24 text-black w-full mx-auto">
      <section className="flex flex-col gap-10 lg:gap-3 w-full justify-center px-[100px]">
        <div className="flex flex-row items-center justify-center lg:justify-normal">
          <h1 className="text-[130px] font-bold text-[#7F5528] leading-[28px] ml-16">UX</h1>
          <span className="text-[40px] font-medium text-[#7F5528]">
            Case Study
          </span>
        </div>

        <div className="flex flex-row justify-center items-center gap-8">
          <img src="/Images2.png" alt="" className="block lg:hidden" />
          <img src="/Images.png" alt="" className="hidden lg:block" />

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Spoiler</h1>
            <p className="font-medium text-2xl">
              O projeto está pronto, mas o código ainda não chegou até aqui 🚧.
              Mas você não precisa esperar: baixe o PDF e veja meu estudo de
              caso e todo o raciocínio por trás da solução.
            </p>

            <Button
              href="/case (1).pdf"
              target="_blank"
              className="flex items-center bg-primary font-semibold text-2xl text-[#F7F7F7] rounded-xl px-3 py-2 w-fit"
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
