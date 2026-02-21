import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, hint, id, disabled, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              "mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary-600",
              "focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 focus:ring-offset-transparent",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-error",
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
        {error && (
          <p id={`${inputId}-error`} className="text-lw-sm text-error">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-lw-sm text-neutral-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
