import { useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "underline" | "pills";
  className?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = "underline",
  className,
}: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab ?? tabs[0]?.id ?? "");

  const handleTabClick = (id: string) => {
    const tab = tabs.find((t) => t.id === id);
    if (tab?.disabled) return;
    setActiveId(id);
    onChange?.(id);
  };

  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        className={cn(
          "flex gap-1",
          variant === "underline"
            ? "border-b border-neutral-200"
            : "p-1 bg-neutral-100 rounded-lw-md"
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id}
            aria-disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id)}
            disabled={tab.disabled}
            className={cn(
              "px-4 py-2 text-lw-sm font-medium transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lw-sm",
              tab.disabled && "opacity-50 cursor-not-allowed",
              variant === "underline"
                ? cn(
                    activeId === tab.id
                      ? "text-primary-600 border-b-2 border-primary-600 -mb-px"
                      : "text-neutral-500 hover:text-neutral-700"
                  )
                : cn(
                    activeId === tab.id
                      ? "bg-white text-neutral-900 shadow-lw-sm"
                      : "text-neutral-600 hover:text-neutral-900"
                  )
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="pt-4"
      >
        {activeTab?.content}
      </div>
    </div>
  );
}
