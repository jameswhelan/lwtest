import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/cn";
import { Button } from "../Button";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  closeOnOverlayClick?: boolean;
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  full: "max-w-[90vw] max-h-[90vh]",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnOverlayClick = true,
}: ModalProps) {
  if (!open) return null;

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-description" : undefined}
    >
      <div
        className="fixed inset-0 bg-neutral-950/50 transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className={cn(
          "relative w-full bg-white rounded-lw-lg shadow-lw-lg overflow-hidden",
          sizeStyles[size]
        )}
      >
        {(title || description) && (
          <div className="px-6 pt-6 pb-4">
            {title && (
              <h2 id="modal-title" className="text-lw-lg font-semibold text-neutral-900">
                {title}
              </h2>
            )}
            {description && (
              <p id="modal-description" className="mt-1 text-lw-sm text-neutral-500">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="px-6 pb-6">{children}</div>
        {footer && (
          <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

export function ModalCloseButton({
  onClose,
  children = "Close",
}: {
  onClose: () => void;
  children?: ReactNode;
}) {
  return (
    <Button variant="secondary" onClick={onClose}>
      {children}
    </Button>
  );
}
