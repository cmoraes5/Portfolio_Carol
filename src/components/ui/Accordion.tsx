"use client";

import { useState, ReactNode, useEffect } from "react";
import { CaretDown, CaretUp } from "../Icons";
import { Button } from "./Button";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={`border border-black divide-y divide-black ${className}`}>
      {children}
    </div>
  );
}

export function AccordionItem({
  title,
  children,
  className,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-1 text-left font-normal text-base md:text-[44px]"
      >
        {title}
        {open ? (
          <CaretUp size={isMobile ? 12.5 : 48} />
        ) : (
          <CaretDown size={isMobile ? 12.5 : 48} />
        )}
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "p-4 border-t border-black" : "max-h-0"
        }`}
      >
        <div className={`text-[18px] ${className}`}>{children}</div>
      </div>
    </div>
  );
}