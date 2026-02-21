import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type LinkVariant = "default" | "muted" | "primary";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  external?: boolean;
}

const variantStyles: Record<LinkVariant, string> = {
  default: "text-neutral-900 underline underline-offset-4 hover:text-neutral-700",
  muted: "text-neutral-500 underline underline-offset-4 hover:text-neutral-700",
  primary: "text-primary-600 underline underline-offset-4 hover:text-primary-700",
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "primary", external, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn("transition-colors", variantStyles[variant], className)}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
