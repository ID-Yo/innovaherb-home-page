import Link from "next/link";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href?: string;
  type?: "button" | "submit";
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}>;

const variantMap = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-white text-grey-900 ring-1 ring-warm-200 hover:bg-warm-50",
  ghost: "bg-transparent text-grey-700 hover:bg-warm-100",
};

export function Button({
  children,
  href,
  type = "button",
  className,
  variant = "primary",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
    variantMap[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
