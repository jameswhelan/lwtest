import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Radio } from "./Radio";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: RadioOption[];
  direction?: "row" | "column";
  error?: string;
  label?: string;
}

export function RadioGroup({
  className,
  name,
  value,
  onChange,
  options,
  direction = "column",
  error,
  label,
  ...props
}: RadioGroupProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label && (
        <span className="block text-lw-sm font-medium text-neutral-700 mb-2">
          {label}
        </span>
      )}
      <div
        className={cn(
          "flex gap-4",
          direction === "column" ? "flex-col" : "flex-row flex-wrap"
        )}
      >
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            disabled={opt.disabled}
            checked={value === opt.value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        ))}
      </div>
      {error && <p className="text-lw-sm text-error mt-1">{error}</p>}
    </div>
  );
}
