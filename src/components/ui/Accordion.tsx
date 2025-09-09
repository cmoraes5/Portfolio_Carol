"use client";

import { useState, ReactNode } from "react";
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

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-1 text-left font-normal text-[44px]"
      >
        {title}
        {open ? <CaretUp size={48} /> : <CaretDown size={48} />}
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