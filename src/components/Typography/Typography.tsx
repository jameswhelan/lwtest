import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "label";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: TypographyElement;
  color?: "default" | "muted" | "primary" | "error";
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-lw-3xl font-bold text-neutral-900",
  h2: "text-lw-2xl font-bold text-neutral-900",
  h3: "text-lw-xl font-semibold text-neutral-900",
  h4: "text-lw-lg font-semibold text-neutral-900",
  "body-lg": "text-lw-lg text-neutral-700",
  body: "text-lw-base text-neutral-700",
  "body-sm": "text-lw-sm text-neutral-700",
  caption: "text-lw-xs text-neutral-500",
  label: "text-lw-sm font-medium text-neutral-700",
};

const colorStyles = {
  default: "",
  muted: "!text-neutral-500",
  primary: "!text-primary-600",
  error: "!text-error",
};

const variantElements: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
  label: "span",
};

export function Typography({
  className,
  variant = "body",
  as,
  color = "default",
  ...props
}: TypographyProps) {
  const Component = as ?? variantElements[variant];

  return (
    <Component
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        className
      )}
      {...props}
    />
  );
}
