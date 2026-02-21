import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "outline";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  primary: "bg-primary-100 text-primary-700",
  success: "bg-success-light text-neutral-800",
  warning: "bg-warning-light text-neutral-800",
  error: "bg-error-light text-neutral-800",
  outline: "border border-neutral-300 bg-transparent text-neutral-700",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-lw-xs",
  md: "px-2.5 py-1 text-lw-sm",
  lg: "px-3 py-1.5 text-lw-base",
};

export function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-lw-md",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
