import { ReactNode } from "react";

interface PortraitFrameProps {
  children: ReactNode;
  className?: string;
}

export default function PortraitFrame({ children, className }: PortraitFrameProps) {
  return (
    <div className={`relative inline-block ${className || ''}`}>
      {/* Moldura */}
      <div className="absolute inset-0 border-2 border-black" />

      {/* Quadradinhos nos cantos (pra fora da borda) */}
      <span className="absolute top-0 left-0 w-7 h-7 border-2 border-black -translate-x-1/2 -translate-y-1/2 bg-white" />
      <span className="absolute top-0 right-0 w-7 h-7 border-2 border-black translate-x-1/2 -translate-y-1/2 bg-white" />
      <span className="absolute bottom-0 left-0 w-7 h-7 border-2 border-black -translate-x-1/2 translate-y-1/2 bg-white" />
      <span className="absolute bottom-0 right-0 w-7 h-7 border-2 border-black translate-x-1/2 translate-y-1/2 bg-white" />

      {/* Conteúdo (com padding de 22px até a borda preta) */}
      <div className="p-[22px]">{children}</div>
    </div>
  );
}
