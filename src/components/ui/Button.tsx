import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  light: "btn-light",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

function classes(variant: Variant, size: Size, className?: string) {
  return cn("btn", variantClass[variant], size === "lg" && "btn-lg", className);
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className } = props;

  if ("href" in props && props.href) {
    const { href, external } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes(variant, size, className)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes(variant, size, className)}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonAsButton;

  return (
    <button {...rest} className={classes(variant, size, className)}>
      {children}
    </button>
  );
}
