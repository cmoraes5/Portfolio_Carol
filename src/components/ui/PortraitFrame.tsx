import { ReactNode } from "react";

interface PortraitFrameProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "large";
  lineHeight?: number;
  linePosition?: "top" | "bottom";
  borderWidth?: number;
}

export default function PortraitFrame({
  children,
  className,
  size = "large",
  lineHeight,
  linePosition = "top",
  borderWidth = 1,
}: PortraitFrameProps) {
  const variants = {
    small: {
      square: "w-[18px] h-[18px]",
      padding: "p-[14px]",
    },
    large: {
      square: "w-7 h-7",
      padding: "p-[22px]",
    },
  };

  const selectedVariant = variants[size];

  const line = lineHeight ? (
    <div className="w-px bg-black" style={{ height: `${lineHeight}px` }} />
  ) : null;

  const borderStyle = { borderWidth: `${borderWidth}px` };

  const frame = (
    <div className={`relative inline-block ${className || ""}`}>
      {/* Moldura */}
      <div
        className="absolute inset-0 border-solid border-black"
        style={borderStyle}
      />

      {/* Quadradinhos nos cantos */}
      <span
        className={`absolute top-0 left-0 ${selectedVariant.square} border-solid border-black -translate-x-1/2 -translate-y-1/2 bg-white`}
        style={borderStyle}
      />
      <span
        className={`absolute top-0 right-0 ${selectedVariant.square} border-solid border-black translate-x-1/2 -translate-y-1/2 bg-white`}
        style={borderStyle}
      />
      <span
        className={`absolute bottom-0 left-0 ${selectedVariant.square} border-solid border-black -translate-x-1/2 translate-y-1/2 bg-white`}
        style={borderStyle}
      />
      <span
        className={`absolute bottom-0 right-0 ${selectedVariant.square} border-solid border-black translate-x-1/2 translate-y-1/2 bg-white`}
        style={borderStyle}
      />

      {/* Conteúdo */}
      <div className={selectedVariant.padding}>{children}</div>
    </div>
  );

  if (line) {
    return (
      <div className="flex flex-col items-center">
        {linePosition === "top" && line}
        {frame}
        {linePosition === "bottom" && line}
      </div>
    );
  }

  return frame;
}