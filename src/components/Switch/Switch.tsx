import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onChange, label, disabled, ...props }, ref) => {
    return (
      <div className="flex items-center gap-3">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            checked ? "bg-primary-600" : "bg-neutral-300",
            className
          )}
          {...props}
        >
          <span
            className={cn(
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lw-sm transition-transform",
              "translate-y-0.5",
              checked ? "translate-x-5 ml-0.5" : "translate-x-0.5"
            )}
          />
        </button>
        {label && (
          <span className="text-lw-sm font-medium text-neutral-700">{label}</span>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";
