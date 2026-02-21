import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, disabled, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-") ?? props.name + "-" + props.value;

    return (
      <div className="flex items-center gap-3">
        <input
          ref={ref}
          type="radio"
          id={inputId}
          disabled={disabled}
          className={cn(
            "h-4 w-4 border-neutral-300 text-primary-600",
            "focus:ring-2 focus:ring-primary-500 focus:ring-offset-0",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="text-lw-sm font-medium text-neutral-700 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";
