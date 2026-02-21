# Tabs

Tabbed navigation for switching between views.

## Import

```tsx
import { Tabs } from "./components";
```

## Props

- `tabs` — Array of `{ id, label, content, disabled? }`
- `defaultTab` — Initial tab id
- `onChange` — (tabId: string) => void
- `variant` — underline | pills

## Usage

```tsx
<Tabs
  tabs={[
    { id: "a", label: "Tab A", content: <div>Content A</div> },
    { id: "b", label: "Tab B", content: <div>Content B</div> },
  ]}
  variant="underline"
/>
```
