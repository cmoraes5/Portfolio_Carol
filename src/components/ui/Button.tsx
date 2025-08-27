import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`cursor-action ${className || ''}`}>
      {children}
    </button>
  )
}
