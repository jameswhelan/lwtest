import { cn } from "../../lib/cn";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-lw-xs",
  md: "h-10 w-10 text-lw-sm",
  lg: "h-12 w-12 text-lw-base",
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({ src, alt, fallback = "?", size = "md", className }: AvatarProps) {
  const initials = fallback !== "?" ? getInitials(fallback) : "?";

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lw-full overflow-hidden bg-primary-100 text-primary-700 font-medium shrink-0",
        sizeStyles[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
