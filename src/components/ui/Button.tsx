import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button className={`cursor-action ${className || ''}`}>
      {children}
    </button>
  )
}
