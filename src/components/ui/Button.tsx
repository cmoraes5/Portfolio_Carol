import { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export function Button({ children, className, onClick, href }: ButtonProps) {
  const buttonClasses = `cursor-action ${className || ''}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
